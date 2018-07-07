const expect = require('chai').expect;
//const sinon = require('sinon');
const generateCustomerSalesMap = require('../src/acme-sales')
const sales = require('../src/acme-sales')
const customers = require('../src/acme-sales')



describe('acme-sales', () => {
    it('has the function generateCustomerSalesMap', () => {
        expect(generateCustomerSalesMap).to.be.ok;
    })
    it('returns an object', () => {
        expect(typeof generateCustomerSalesMap([],[])).to.eql('object');
    })
    it('returns the right results', () => {
        expect(generateCustomerSalesMap(sales, customers)).to.eql({
            moe: 55,
            larry: 33,
            curly: 0
        });
    })
})