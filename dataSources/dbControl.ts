import db from "../config";
import { createTransport } from "nodemailer";

let mail = createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

/**
 * @type Class
 * @description A database class that controls the web application
 * @name DBControl
 * @author Tobi Ajibade 
 */



class DBControl {
    constructor() {}
 
    async processHireRequest(full_name:string, mail:string, price:string, place_of_work:string, time_frame:string) {
        try {
            let saveHireRequest = await db.query(`INSERT INTO hire_request(fullname, email, budget, company, launch_timeframe) 
            VALUES($1,$2,$3,$4,$5) RETURNING *`, [full_name, mail, price, place_of_work, time_frame]);
    
            // Alert me , alert sender
            let { fullname, received_at, email, company, launch_timeframe, budget } = saveHireRequest.rows[0];
            let message = `Hi, I'm ${fullname}, I work for ${company}. Come and work with us for ${launch_timeframe} for a budget of ${budget}, thanks.`;

            this.notifyMe(fullname, "hire", message, received_at);

            this.notifySender(fullname, email);
            
        } catch (e) {
            return e;
        }
    };

    async processContactRequest(full_name:string, mail:string, msg:string) {
        try {
            let saveContactRequest = await db.query(`INSERT INTO contact_request(fullname, email, message) 
            VALUES($1,$2,$3) RETURNING fullname, email , message, received_at`, [full_name, mail, msg]);
            
            // Alert message , alert sender

            let { message, fullname, received_at, email } = saveContactRequest.rows[0];

            this.notifyMe(fullname, "contact", message, received_at);

            this.notifySender(fullname, email);

        } catch (e) {
            return e;
        }
    }

    async notifyMe(senderName:string, requestType:string, message:string, sent_at:string) {
        // 

        if(requestType === "hire") {
            let mailOptions = {
              from: `Tobi Ajibade <noreply@tobiajibade.com>`,
              to: `herityjohnny14@gmail.com`,
              subject: `New Message from my portfolio`,
              html: `<p>Hey! Tobi, you have a new hire request from ${senderName} on your portfolio page.</p>
                   <p>Message Contents: ${message}</p>
                   <p>Sent at: ${sent_at}</p>
            `,
            };

            mail.sendMail(mailOptions)
            .then(resp => {
                console.log(`Mail sent : ${resp.response}`);
            })
            .catch(e => {
                console.log('Mail Failed to sent', e);
            });
        } else {
            let mailOptions = {
              from: `Tobi Ajibade <noreply@tobiajibade.com>`,
              to: `herityjohnny14@gmail.com`,
              subject: `New Message from my portfolio`,
              html: `<p>Hey! Tobi, you have a new message from ${senderName} on your portfolio page.</p>
                   <p>Message Contents: ${message}</p>
                   <p>Sent at: ${sent_at}</p>
            `,
            };

            mail
              .sendMail(mailOptions)
              .then((resp) => {
                console.log(`Mail sent : ${resp.response}`);
              })
              .catch((e) => {
                console.log("Mail Failed to send", e);
              });
        };
    };

    async notifySender(senderName:string, senderEmail:string) {
        let senderFirstName = senderName.split(" ")[0];
        let mailOptions = {
            from: `Tobi Ajibade <noreply@tobiajibade.com>`,
            to: `${senderEmail}`,
            subject: `Thank You For Contacting Me`,
            html: `
                <p>Hi ${senderFirstName}, thanks for contacting me. I have recieved your message
                . I will reply you ASAP or as soon as I see this message.</p>
                <p>Best regards!</p>
                <p>Tobi!</p>
            `
        };

            mail
              .sendMail(mailOptions)
              .then((resp) => {
                console.log(`Mail sent : ${resp.response}`);
              })
              .catch((e) => {
                console.log("Mail Failed to sent", e);
              });
    };
};

export default DBControl;