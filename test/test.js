const server = require("../server");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect, should } = chai;

chai.use(chaiHttp);

describe("Server", () => {
  it("it should confirm server is running", done => {
    chai
      .request(server)
      .get("/")
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});
