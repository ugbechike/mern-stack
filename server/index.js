import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import logger from './middleware/logger';
import withAuthentication from './middleware/withAuthentication';
import userRoute from './routes/users';
import productRoute from './routes/products';
import userAuth from './routes/auth';
import proccess from 'process'
import { db } from './db/db';

const corsOption = {
    origin: 'http://localhost:3300', // move to .env file
    optionsSuccessStatus: 200
}
const app = express();
// middleware for logging the request methods
app.use(cors(proccess.env === 'Production' ? corsOption : undefined))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(withAuthentication)
app.use(logger);
const port = process.env.PORT;

userRoute(app)
productRoute(app)
userAuth(app)

app.listen(port, () => {
    console.log(`app is running on PORT: ${port}`)
});




