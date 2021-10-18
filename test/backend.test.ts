import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import { app } from "../app";
let should = chai.should();

chai.use(chaiHttp);

/**
 * These are test for the get routes
 */

describe("Test for all CRUD routes on tobiajibade.com", () => {
  describe("POST /b/hire", () => {
    it("Should save a hire request in the database successfully and send an follow up email", (done) => {
        let payload = {
            employer_name: "biggaji",
            employer_company : "Circleci",
            employer_email: "tobiajibade2017@yandex.com",
            budget: "more-five",
            launch_timeframe: "btw_1-2m"
        };

      chai
        .request(app)
        .post("/b/hire")
        .send(payload)
        .end((err, res) => {
            if(err) {
                console.log(err);
                throw err
            }
          expect(res).to.have.status(201);
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

      chai
        .request(app)
        .post("/b/contact")
        .send(payload)
        .end((err, res) => {
          if (err) {
            console.log(err);
            throw err;
          }
          expect(res).to.have.status(201);
          done();
        });
    });
  });
});
