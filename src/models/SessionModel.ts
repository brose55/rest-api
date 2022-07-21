import mongoose from "mongoose"

// basic created session schema
const sessionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  valid: {
    type: Boolean,
    default: true,
  },
  userAgent: {
    type: String
  }
}, {
  timestamps: true
})

// our actual Session Model
const SessionModel = mongoose.model("Session", sessionSchema)

export default SessionModel