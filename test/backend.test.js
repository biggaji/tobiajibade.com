"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = __importStar(require("chai"));
const chai_http_1 = __importDefault(require("chai-http"));
const app_1 = require("../app");
let should = chai_1.default.should();
chai_1.default.use(chai_http_1.default);
/**
 * These are test for the get routes
 */
describe("Test for all CRUD routes on tobiajibade.com", () => {
    describe("POST /b/hire", () => {
        it("Should save a hire request in the database successfully and send an follow up email", (done) => {
            let payload = {
                employer_name: "biggaji",
                employer_company: "Circleci",
                employer_email: "tobiajibade2017@yandex.com",
                budget: "more-five",
                launch_timeframe: "btw_1-2m"
            };
            chai_1.default
                .request(app_1.app)
                .post("/b/hire")
                .send(payload)
                .end((err, res) => {
                if (err) {
                    console.log(err);
                    throw err;
                }
                chai_1.expect(res).to.have.status(201);
                done();
            });
        });
    });
    describe("POST /b/contact", () => {
        it("Should save acontact request in the database successfully and send an follow up email", (done) => {
            let payload = {
                fullname: "Adewolu Olowode",
                email: "tobiajibade2017@yandex.com",
                message: "Hello, it would be nice to meet you!",
            };
            chai_1.default
                .request(app_1.app)
                .post("/b/contact")
                .send(payload)
                .end((err, res) => {
                if (err) {
                    console.log(err);
                    throw err;
                }
                chai_1.expect(res).to.have.status(201);
                done();
            });
        });
    });
});
