const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const strictEquals = require('../TDDStrictequal')

describe('TDDStrictEqual', () => {
  describe('strictEquals', () => {
    it('Returns true if two values are INEQUAL in TYPE and VALUE', () => {
      //create test data
      const valNumOne = 3
      const valNumTwo = 'b'

      //call the function using the test data
      const endresult = strictEquals(valNumOne, valNumTwo)

      //make assertions about what should be true
      expect(endresult).to.not.equal(true)
    })
    it('Returns true if two values are EQUAL in VALUE but INEQUAL in TYPE', () => {
      const valNumOne = 3
      const valNumTwo = '3'

      const endresult = strictEquals(valNumOne, valNumTwo)

      expect(endresult).to.not.equal(true)
    })
    it('Returns true if two values are EQUAL in TYPE but INEQUAL in VALUE', () => {
      const valNumOne = 3
      const valNumTwo = 4

      const endresult = strictEquals(valNumOne, valNumTwo)

      expect(endresult).to.not.equal(true)
    })
    it('Returns true if two values are EQUAL in both TYPE and VALUE', () => {
      const valNumOne = 3
      const valNumTwo = 3

      const endresult = strictEquals(valNumOne, valNumTwo)

      expect(endresult).to.not.equal(false)

    })
  })
})