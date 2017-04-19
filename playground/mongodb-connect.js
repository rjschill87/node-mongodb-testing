// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log("Error connecting to DB: ", err);
    }

    console.log("Connected to MongoDB Successfully");

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log("Unable to insert record", err);
    //     }
    //
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        name: 'Michael Moon',
        age: 75,
        location: 'Cedar Rapids, IA'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert record', err);
        }

        console.log(result.ops[0]._id.getTimestamp());
    });

    db.close();
});
