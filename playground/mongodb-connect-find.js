// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log("Error connecting to DB: ", err);
    }

    console.log("Connected to MongoDB Successfully");

    // db.collection('Todos').find({
    //     _id: new ObjectID('58f795d7d8249811b5c0367c')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch Todos', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log('Todos: ', count);
    // }, (err) => {
    //     console.log('Unable to fetch Todos', err);
    // });

    var userName = 'Rob Schillinger';

    db.collection('Users').find({name: userName}).toArray().then((docs) => {
        console.log('User found.');
        console.log('---');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Error fetching user', err);
    });

    // db.close();
});
