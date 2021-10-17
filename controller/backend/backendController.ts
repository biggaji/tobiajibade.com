import { Request, Response} from 'express';
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

    res.status(200).json({
      message: "Data received",
      success: true,
      data: [employer_name, employer_email, employer_company, price, timeframe],
    });
};

export const contactControl = async (req: Request, res: Response) => {
    const { fullname, email, message } = req.body;
    res.status(200).json({
        "message" : "Data received",
        "success": true,
        "data" : [fullname, email, message]
    });
};