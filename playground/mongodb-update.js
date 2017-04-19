// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log("Error connecting to DB: ", err);
    }

    console.log("Connected to MongoDB Successfully");

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('58f7b3653e638921e6a6723d')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').update({
        _id: new ObjectID('58f7968932977911cbd94441')
    }, {
        $set: {
            name: 'Rob Schillinger'
        },
        $inc: {
            age: -1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    // db.close();
});
