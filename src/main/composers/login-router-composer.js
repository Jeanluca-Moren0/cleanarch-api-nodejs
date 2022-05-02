const LoginRouter = require('../../presentation/routers/login-router')
const AuthUseCase = require('../../domain/usecases/auth-usecase')
const EmailValidator = require('../../utils/helpers/email-validator')
const LoadUserByEmailRepository = require('../../infra/repositories/load-user-by-email-repository')
const UpdateAccessTokenRepository = require('../../infra/repositories/update-access-token-repository')
const Encrypter = require('../../presentation/helpers/encrypter')
const TokenGenerator = require('../../presentation/helpers/token-generator')

const encrypter = new Encrypter()
const tokenGenerator = new TokenGenerator(process.env.tokenSecret)
const updateAccessTokenRepository = new UpdateAccessTokenRepository()
const loadUserByEmailRepository = new LoadUserByEmailRepository()
const authUseCase = new AuthUseCase({
  loadUserByEmailRepository,
  updateAccessTokenRepository,
  encrypter,
  tokenGenerator
})

const emailValidator = new EmailValidator()
const loginRouter = new LoginRouter({ authUseCase, emailValidator })

module.exports = loginRouter
