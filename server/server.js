const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const User = require('./models/User'); // Ensure you have a User model defined

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://<username>:<password>@<cluster-url>/<dbname>?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

app.post('/register', async (req, res) => {
  const { username, email, mobile, password } = req.body;

  try {
    const userExists = await User.findOne({ username });
    if (userExists) {
      return res.status(409).json({ username: 'Username already exists. Please choose a different username.' });
    }

    const emailExists = await User.findOne({ email });
    if (emailExists) {
      return res.status(409).json({ email: 'Email already exists. Please choose a different email.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, mobile, password: hashedPassword });

    await newUser.save();
    res.status(201).json({ message: 'User successfully registered' });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ server: 'Registration failed' });
  }
});

// Ensure your User model is defined properly in models/User.js
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
