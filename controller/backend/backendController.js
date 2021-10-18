"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactControl = exports.hireControl = void 0;
const dbControl_1 = __importDefault(require("../../dataSources/dbControl"));
let dbcontrol = new dbControl_1.default();
const hireControl = async (req, res) => {
    const { employer_name, employer_company, employer_email, budget, launch_timeframe } = req.body;
    let price;
    let timeframe;
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
    }
    ;
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
    }
    ;
    // save data into db
    try {
        dbcontrol.processHireRequest(employer_name, employer_email, price, employer_company, timeframe);
    }
    catch (e) {
        console.log(`Failed to process hire form request : `, e.message);
    }
    res.status(200).json({
        message: "Data received",
        success: true,
        data: [employer_name, employer_email, employer_company, price, timeframe],
    });
};
exports.hireControl = hireControl;
const contactControl = async (req, res) => {
    const { fullname, email, message } = req.body;
    // SAVE DATA INTO DB
    try {
        dbcontrol.processContactRequest(fullname, email, message);
    }
    catch (e) {
        console.log(`Failed to process contact form : `, e.message);
    }
    res.status(200).json({
        "message": "Data received",
        "success": true,
        "data": [fullname, email, message]
    });
};
exports.contactControl = contactControl;
