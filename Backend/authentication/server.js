const app = require('./src/app');
require('dotenv').config();
const connectDB = require('./src/DB/db');
connectDB();


app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});