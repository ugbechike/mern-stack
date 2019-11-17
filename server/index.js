import express from 'express';
import logger from './middleware/logger';
import withAuthentication from './middleware/withAuthentication'
import MockedUsers from './mocks/mockUsers';

const app = express();
// middleware for logging the request methods
app.use(withAuthentication)
app.use(logger);
const port = process.env.PORT;

// todo abstract to a route folder
app.get('/v1/users', (req, res) => {
    res.send(MockedUsers);
})

app.get('/v1/users/:id', (req, res) => {
    res.send(MockedUsers[0]);
})
app.post('/v1/users', (req, res) => {
    const {userName, email, role, password} = req.body
    res.status(200).end;
})

app.put('/v1/users/:id', (req, res) => {
    const {id} = req.params
    const {userName, email, role, password} = req.body
    // todo: update code to update a single user data
    res.send(MockedUsers[0]);
})

app.delete('/v1/users/:id', (req, res) => {
    const {id} = req.params
    // todo: update code to delete a single
    res.status(200).end;

})
app.listen(port, () => {
    console.log(`app is running on PORT: ${port}`)
});