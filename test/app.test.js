const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');  // Adjust the path accordingly
const expect = chai.expect;

chai.use(chaiHttp);

describe('Party Routes', () => {
  it('should return a list of parties', (done) => {
    chai.request(app)
      .get('/api/parties')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });

  // Add more tests for different scenarios
});
