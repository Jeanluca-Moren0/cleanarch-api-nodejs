class Encrypter {
  async compare(password, hashed_password){
    return true
  }
}
describe('Encrypter', () => {
  test('should return true if bcrpyt returns true ', async () => {
    const sut = new Encrypter()
    const isValid = await sut.compare('any_password', 'hashed_password')
    expect(isValid).toBe(true)
  });
});
