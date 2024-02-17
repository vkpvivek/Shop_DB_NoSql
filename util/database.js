const mongodb= require('mongodb');
const MongoClient=mongodb.MongoClient;


const mongoConnect =(callback) => {
    MongoClient.connect(
        'mongodb+srv://vkpvivek:zxcvbnm123@cluster0.9zeb8i5.mongodb.net/'  //..update..Url
    )
    .then(client =>{
        console.log('Connected!');
        callback(client);
    })
    .catch(err =>{
        console.log(err);
    });
};

module.exports = mongoConnect;

