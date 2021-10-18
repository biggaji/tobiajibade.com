import { Request, Response} from 'express';
import DBControl from '../../dataSources/dbControl';

let dbcontrol = new DBControl();

export const hireControl = async (req:Request, res:Response) => {
    const { employer_name, employer_company, employer_email, budget, launch_timeframe } = req.body;
    let price:any;
    let timeframe:any;

    // buget chooser
    switch (budget) {
      case "five-one":
        price = "$500 - $1000";
        break;
      case "one-five":
        price = "$1000 - $5000";
        break;
      case "more-five":
        price = "$5000+";
        break;
    };

    // timefram chooser
    switch (launch_timeframe) {
      case "less_than_1m":
        timeframe = "< 1month";
        break;
      case "btw_1-2m":
        timeframe = "~ 1 - 2 months";
        break;
      case "more_than_2m":
        timeframe = "> 2months";
        break;
    };
    // save data into db

    try {
       let saveHireRequest = await dbcontrol.processHireRequest(employer_name, employer_email, price, employer_company, timeframe);

       console.log(saveHireRequest)
        if(saveHireRequest) {
          res.status(201).json({"success": true});
        } else {
          res.status(400).json({ "success": false });
        }
    } catch (e:any) {
        console.log(`Failed to process hire form request : `, e.message);
        res.status(500).json({ "server-error": true , "success": false });
    };

    // res.status(200).json({
    //   message: "Data received",
    //   success: true,
    //   data: [employer_name, employer_email, employer_company, price, timeframe],
    // });
};

export const contactControl = async (req: Request, res: Response) => {
    const { fullname, email, message } = req.body;

    // SAVE DATA INTO DB
    try {
        let saveContactRequest = await dbcontrol.processContactRequest(fullname, email, message);
        if (saveContactRequest) {
          res.status(201).json({ success: true });
        } else {
          res.status(400).json({ success: false });
        }
    } catch (e:any) {
        console.log(`Failed to process contact form : `, e.message);
        res.status(500).json({ "server-error": true, success: false });
    }

    // res.status(200).json({
    //     "message" : "Data received",
    //     "success": true,
    //     "data" : [fullname, email, message]
    // });
};