const mongoose = require('mongoose');
const { Schema } = mongoose;
const url = 'mongodb://localhost:27017';

// mongoose.connect(url)
//     .then(() => console.log('MongoDB connection successful'))
//     .catch(err => console.error('MongoDB connection error:', err));


const userSchema = new Schema({
    name: { type: String, required: true },
    // age: { type: Number, required: true },
    // email: { type: String, required: true, unique: true }
});

const Mydata = mongoose.model('Mydata', userSchema);


Mydata.create({
    name: 'Jane Doe',

});

module.exports = {
    Mydata
}
// 现在User模型将会限制只有name, age, 和email字段，并且它们都是必需的。
