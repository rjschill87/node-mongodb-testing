var mongoose = require('mongoose');
var schema = mongoose.schema;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
    mongoose
};
