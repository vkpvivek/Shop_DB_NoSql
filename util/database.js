const mongodb= require('mongodb');
const MongoClient=mongodb.MongoClient;

let _db;

const mongoConnect =(callback) => {
    MongoClient.connect(
        'mongodb+srv://vkpvivek:zxcvbnm123@cluster0.9zeb8i5.mongodb.net/'  //..update..Url
    )
    .then(client =>{
        console.log('Connected!');
        _db=client.db('Shop')
        callback(client);
    })
    .catch(err =>{
        console.log(err);
    });
};

const getDb=()=>{
    if (_db){
        return _db;
    }
    throw 'No database found!';
}

exports.mongoConnect = mongoConnect;
exports.getDb= getDb;

// module.exports = mongoConnect;

