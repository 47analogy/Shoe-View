const mongoose = require('mongoose')

const UserSchema = mongoose.Schema(
  {
    id: mongoose.Schema.Types.ObjectId,
    username: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      unique: true
    }
  },
  {
    timestamps: true
  }
)
// TODO: Hash passwords
module.exports = mongoose.model('User', UserSchema)
