const mysql = require('mysql');
const options = {
    host     : 'localhost',
    user     : 'root',
    password : 'chym123',
    database : 'test'
}

module.exports = class Database {
    constructor() {
        this.connection = mysql.createConnection(options);
        this.open();
    }

    open() {
        this.connection.connect();
        this.connection.on('error', (err) => {
            // 如果是连接断开，自动重新连接
            if (err.code === 'PROTOCOL_CONNECTION_LOST') {
                this.connection.connect();
            } else {
                console.error(err.stack || err);
            }
        });
    }

    close() {
        this.connection.release();
    }

    async sql(sqlString) {
        await new Promise((resolve, reject) => {
            this.connection.query(sqlString, (err, res) => {
                if (err) reject(err);
                resolve(res);
            });
        }).then((res) => {
            this.result = res;
        }, (rej) => console.log(rej));
        return this.result;
    }

}

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;

// module.exports = class Database {
//     constructor() {
//         this.open();
//     }

//     open() {
//         new Promise((resolve, reject) => {
//             MongoClient.connect(
//                 'mongodb://127.0.0.1:27017',
//                 { useNewUrlParser: true },
//                 (err, db) => {
//                     if(err) {
//                         reject({ msg: '数据库连接失败', err });
//                         return;
//                     }
//                     const blog = db.db('test');
//                     resolve({ blog, conn: db });
//                 }
//             );
//         }).then((res) => {
//             this.setAttr(res);
//         }, (rej) => console.log(rej.msg, rej.err));
//     }

//     setAttr(obj) {
//         this._conn = obj.conn;
//         this._blog = obj.blog;
//     }

//     getAttr() {
//         return {
//             conn: this._conn,
//             blog: this._blog
//         }
//     }

//     find = (collection, condition) => {
//         return this._blog.collection(collection).find(condition).toArray();
//     }
// }
