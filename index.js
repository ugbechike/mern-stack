import express from 'express';
import MockedUsers from './mocks/mockUsers'

const app = express();
const port = process.env.PORT;

// todo abstract to a route folder
app.get('/v1/users', (req, res) => {
    res.send(MockedUsers);
})

app.listen(port, () => {
    console.log(`app is running on PORT: ${port}`)
});