import express from 'express';
import bodyParser from 'body-parser';
import logger from './middleware/logger';
import withAuthentication from './middleware/withAuthentication';
import userRoute from './routes/users';
import productRoute from './routes/products'
import { db } from './db/db';

const app = express();
// middleware for logging the request methods
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(withAuthentication)
app.use(logger);
const port = process.env.PORT;

userRoute(app)
productRoute(app)

app.listen(port, () => {
    console.log(`app is running on PORT: ${port}`)
});