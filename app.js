require('dotenv').config();
require('express-async-errors');
const express = require('express');

const connectDB = require('./db/connect');
const productsRouter = require('./routes/productRoutes');
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>File Upload Starter</h1>');
});

app.use('/api/v1/products', productsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
