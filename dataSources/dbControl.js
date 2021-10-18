"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../config"));
const nodemailer_1 = require("nodemailer");
let mail = nodemailer_1.createTransport({
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
    constructor() { }
    async processHireRequest(full_name, mail, price, place_of_work, time_frame) {
        try {
            let saveHireRequest = await config_1.default.query(`INSERT INTO hire_request(fullname, email, budget, company, launch_timeframe) 
            VALUES($1,$2,$3,$4,$5) RETURNING *`, [full_name, mail, price, place_of_work, time_frame]);
            // Alert me , alert sender
            let { fullname, received_at, email, company, launch_timeframe, budget } = saveHireRequest.rows[0];
            let message = `Hi, I'm ${fullname}, I work for ${company}. Come and work with us for ${launch_timeframe} for a budget of ${budget}, thanks.`;
            this.notifyMe(fullname, "hire", message, received_at);
            this.notifySender(fullname, email);
            return saveHireRequest.rowCount === 1 ? true : false;
        }
        catch (e) {
            throw e;
        }
    }
    ;
    async processContactRequest(full_name, mail, msg) {
        try {
            let saveContactRequest = await config_1.default.query(`INSERT INTO contact_request(fullname, email, message) 
            VALUES($1,$2,$3) RETURNING fullname, email , message, received_at`, [full_name, mail, msg]);
            // Alert message , alert sender
            let { message, fullname, received_at, email } = saveContactRequest.rows[0];
            this.notifyMe(fullname, "contact", message, received_at);
            this.notifySender(fullname, email);
            return saveContactRequest.rowCount === 1 ? true : false;
        }
        catch (e) {
            throw e;
        }
    }
    async notifyMe(senderName, requestType, message, sent_at) {
        // 
        if (requestType === "hire") {
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
                throw e;
            });
        }
        else {
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
                throw e;
            });
        }
        ;
    }
    ;
    async notifySender(senderName, senderEmail) {
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
            throw e;
        });
    }
    ;
}
;
exports.default = DBControl;
