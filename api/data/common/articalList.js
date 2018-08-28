const { connectDB, find } = require('../db');
module.exports = (req, res) => {
    const data = [
        {
            title: '123',
            createTime: '2018-08-24 22:08:34',
            updateTime: '2018-08-24 22:08:34'
        }
    ];
    res.end(JSON.stringify(data));
    return;
}