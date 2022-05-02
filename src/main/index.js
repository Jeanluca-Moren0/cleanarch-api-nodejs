const app = require('./config/app')
require('dotenv').config()

app.listen(process.env.PORT, () => console.log(`Server Running on http://localhost:${process.env.PORT} ⚡`))
