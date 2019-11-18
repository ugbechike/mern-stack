import { UserModel } from '../models/user';

export default (app) => {
// todo abstract to a route folder
app.get('/v1/users', async (req, res) => {
    const users = await UserModel.find() || [];
    res.send(users);
})

// GET USERS
app.get('/v1/users/:id', async (req, res) => {
    const {id} = req.params
try {
    if(!req.isAdmin){
        return res.status(403).end();
    }
    const userById = await UserModel.findById(id)
    if (userById){
        res.send(userById);

    }else {
        res.status(404).end()
    }
} catch (err) {

    console.log(err);
    res.status(404).end();
}

});


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
}