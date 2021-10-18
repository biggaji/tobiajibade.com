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
describe("Test for all get routes on tobiajibade.com", () => {
    describe("GET /", () => {
        it("It should load the homepage silently", (done) => {
            chai_1.default
                .request(app_1.app)
                .get("/")
                .end((err, res) => {
                chai_1.expect(res).to.have.status(200);
                done();
            });
        });
        it("It should load the hire page silently", (done) => {
            chai_1.default.request(app_1.app)
                .get('/hire')
                .end((err, res) => {
                chai_1.expect(res).to.have.status(200);
                res.should.be.an('object');
                done();
            });
        });
        it("It should load a 404 page", (done) => {
            chai_1.default
                .request(app_1.app)
                .get("/bla")
                .end((err, res) => {
                chai_1.expect(res).to.have.status(200);
                done();
            });
        });
    });
});
