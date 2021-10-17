"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactControl = exports.hireControl = void 0;
const hireControl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
    res.status(200).json({
        message: "Data received",
        success: true,
        data: [employer_name, employer_email, employer_company, price, timeframe],
    });
});
exports.hireControl = hireControl;
const contactControl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { fullname, email, message } = req.body;
    res.status(200).json({
        "message": "Data received",
        "success": true,
        "data": [fullname, email, message]
    });
});
exports.contactControl = contactControl;
