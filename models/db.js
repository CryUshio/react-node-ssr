import mongodb from 'mongodb';
const MongoClient = mongodb.MongoClient;
const db = (callback) => MongoClient.connect('mongodb://127.0.0.1:27017/blog_skryu_com', { useNewUrlParser: true }, callback);

export default db;