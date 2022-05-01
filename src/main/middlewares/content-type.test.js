const request = require('supertest')


describe('Content-type Middleware', () => {
  let app
  beforeEach(() => {
    jest.resetModules()
    app = require('../config/app')
  })

  test('should return json content type as default', async () => {
    app.get('/test_content_type', (req, res) => {
      res.send('')
      
    })

    await request(app)
      .get('/test_content_type')
      .expect('content-type', /json/)
    
  })

  test('should return xml content type if requested', async () => {
    app.get('/test_content_type', (req, res) => {
      res.type('text/html')
      res.send('')
      
    })
    
    await request(app)
      .get('/test_content_type')
      .expect('content-type', /html/)
    
  })
})
