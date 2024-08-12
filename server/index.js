const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config()

const app = express();
const port = process.env.PORT;

// Replace with your MongoDB URI

app.use(cors());
mongoose.connect(process.env.MONGO_URL, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.use(bodyParser.json());
app.use('/api/login', require('./routers/login'))
app.use('/api/register', require('./routers/register'))
app.use('/api/casuality', require('./routers/casuality'))
app.use('/api/users', require('./routers/user'))

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
