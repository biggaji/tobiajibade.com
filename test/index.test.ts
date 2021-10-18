import chai,{ expect } from "chai";
import chaiHttp from 'chai-http';
import { app } from '../app';
let should = chai.should();

chai.use(chaiHttp);

/**
 * These are test for the get routes
 */

describe("Test for all get routes on tobiajibade.com", () => {
  describe("GET /", () => {
    it("It should load the homepage silently", (done) => {
      chai
        .request(app)
        .get("/")
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });

    it("It should load the hire page silently", (done) => {
      chai.request(app)
      .get('/hire')
      .end((err, res) => {
        expect(res).to.have.status(200);
        res.should.be.an('object');
        done();
      });
    });

    it("It should load a 404 page", (done) => {
      chai
        .request(app)
        .get("/bla")
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
  });
});