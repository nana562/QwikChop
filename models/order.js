const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

  const clientOrderSchema = new mongoose.Schema({
    firstname: {
        type: String,
        minlength: [2,'Firstname too short' ],
        required: [true, 'Firstname required'],
    },
    surname: {
        type: String,
        minlength: [2,'Surname too short' ],
        required: [true, 'Surname required'],
    },
    phone: {
        type: String,
        required:[false],
    },
    location: {
        type: String,
        minlength: [3,'location too short' ],
        required: [true, 'Location Required '],
    },
    address: {
        type: String,
        minlength: [3,'address too short' ],
        required: [true, 'Address Required '],
    },
    meal: {
        type: String,
        minlength: [3],
        required: [true, 'Meal Required'],
    },
    price: {
        type: Number,
        reuired: [true],
    }
})

clientOrderSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('ClientOrder', clientOrderSchema)