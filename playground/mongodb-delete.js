// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log("Error connecting to DB: ", err);
    }

    console.log("Connected to MongoDB Successfully");

    // deleteMany
    // db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result.result['ok']);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    // db.close();

    db.collection('Users').deleteMany({name: 'Megan Moon'}).then((result) => {
        console.log(result.result['ok']);
    });

    db.collection('Users').findOneAndDelete({_id: new ObjectID("58f7af262df8151adc759a01")}).then((result) => {
        console.log(result);
    });
});
