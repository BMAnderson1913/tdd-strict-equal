const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const strictequals = require('../TDDStrictequal')

describe('TDDStrictEqual', () => {
  describe('strictequals', () => {
    it('Returns true if two values are INEQUAL in TYPE and VALUE', () => {
      const valNumOne = 3
      const valNumTwo = 'b'

      const endresult = strictEquals(valNumOne, valNumTwo)

      expect(endresult).to.equal(false)
    })
    it('Returns true if two values are EQUAL in VALUE but INEQUAL in TYPE', () => {
      const valNumOne = 3
      const valNumTwo = '3'

      const endresult = strictEquals(valNumOne, valNumTwo)

      expect(endresult).to.equal(false)
    })
    it('Returns true if two values are EQUAL in TYPE but INEQUAL in VALUE', () => {
      const valNumOne = 3
      const valNumTwo = 4

      const endresult = strictEquals(valNumOne, valNumTwo)

      expect(endresult).to.equal(false)
    })
    it('Returns true if two values are EQUAL in both TYPE and VALUE', () => {
      const valNumOne = 3
      const valNumTwo = 3

      const endresult = strictEquals(valNumOne, valNumTwo)

      expect(endresult).to.equal(true)

    })
  })
})