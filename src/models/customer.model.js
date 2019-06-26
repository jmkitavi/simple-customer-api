let mongoose = require('mongoose')

// mLab configs
// const server = ''
// const database = ''
const user = ''
const password = ''

mongoose.connect(`mongodb+srv://${user}:${password}@rest-api-fcbvv.gcp.mongodb.net/test?retryWrites=true&w=majority`)

let CustomerSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
})

module.exports = mongoose.model('Customer', CustomerSchema)
