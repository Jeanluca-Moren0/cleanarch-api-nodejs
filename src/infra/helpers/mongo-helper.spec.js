const MongoHelper = require('./mongo-helper')
describe('MongoHelper', () => {
  test('should reconnect when getDb() if invoked and client conenction throws', async () => {
    const sut = MongoHelper
    await sut.connect(global.__MONGO_URI__)
    expect(sut.db).toBeTruthy()
    await sut.disconnect()
    expect(sut.db).toBeFalsy()
    await sut.getDb()
    expect(sut.db).toBeTruthy()
  })
})
