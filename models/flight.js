import mongoose from "mongoose"

const Schema = mongoose.Schema

const ticketSchema = new Schema({
  seat: { type: String, match: /[A-F][1-9]\d?/ },
  price: { type: Number, min: 0 }
}, {
  timestamps: true
})

const flightSchema = new Schema({
  airline: { 
    type: String,
    enum: ['American', 'Southwest', 'United']
  },
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    default: 'DEN'
  },
  flightNo: { 
    type: Number,
    min: 10,
    max: 9999,
  },
  departs: { 
    type: Date, 
    default: yearFromNow(),
  }, 
  tickets: [ticketSchema]
}, {
  timestamps: true
})

function yearFromNow() {
  const today = new Date()
  today.setFullYear(today.getFullYear()+1)
  return today
}

yearFromNow()

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}