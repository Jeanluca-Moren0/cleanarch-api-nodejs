const bcrypt = require('bcrypt')
class Encrypter {
  async compare (value, hash) {
    const isValid = await bcrypt.compare(value, hash)
    return isValid
  }
}

const makeSut = () => {
  return new Encrypter()
}
describe('Encrypter', () => {
  test('should return true if bcrpyt returns true ', async () => {
    const sut = makeSut()
    const isValid = await sut.compare('any_value', 'hashed_value')
    expect(isValid).toBe(true)
  })

  test('should return false if bcrpyt returns false ', async () => {
    const sut = makeSut()
    bcrypt.isValid = false
    const isValid = await sut.compare('any_password', 'hashed_value')
    expect(isValid).toBe(false)
  })

  test('should call bcrpyt with correct values', async () => {
    const sut = makeSut()

    await sut.compare('any_password', 'hashed_value')
    expect(bcrypt.value).toBe('any_value')
    expect(bcrypt.hash).toBe('hashed_value')
  })
})
