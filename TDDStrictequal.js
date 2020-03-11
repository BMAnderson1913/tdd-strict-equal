const strictEquals = (valNumOne, valNumTwo) => {
  return typeof valNumOne == typeof valNumTwo && valNumOne == valNumTwo
}

module.exports = strictEquals // 