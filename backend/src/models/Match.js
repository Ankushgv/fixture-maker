import mongoose from "mongoose";

const MatchSchema = new mongoose.Schema({
  players: [String],
  totalPoints: {type: Number, requierd: true},
  courtNumber: {type: Number, required: true},
  createdAt: {type: Date, default: Date.now}
})

export default mongoose.model('Match', MatchSchema)