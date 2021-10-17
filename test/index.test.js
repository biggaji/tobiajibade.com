// import chai from "chai";
// import chaiHttp from 'chai-http';
// import app from "../app";

let chai = require("chai");
let chaiHttp = require("chai-http");
let app = require("../app");
let { should, expect } = chai;

chai.use(chaiHttp);

/**
 * These are test for the get routes
 */

describe('Test for all get routes on tobiajibade.com', () => {
    describe("GET /", () => {
        it("It should load the homepage correctly", (done) => {
            chai.request(app)
            .get('/')
            .end((err,res) => {
                res.should.have.status(200);
                done();
            });
        });
    });
});