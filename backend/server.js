const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/sport-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const UserSchema = new mongoose.Schema({
  name: String,
  steps: Number
})

const User = mongoose.model('User', UserSchema)

app.get('/leaderboard', async (req, res) => {
  const users = await User.find().sort({ steps: -1 }).limit(10)
  res.json(users)
})

app.post('/update-steps', async (req, res) => {
  const { name, steps } = req.body
  await User.findOneAndUpdate({ name }, { steps }, { upsert: true })
  res.json({ success: true })
})

app.listen(3000, () => console.log('Server running on port 3000'))
