module.exports = async (req, res, database, render) => {
    const tagList = await database.sql('SELECT * from tag');
    const data = {
        result: 1,
        tagList
    };

    res.set('Content-Type', 'text/html');
    res.end(JSON.stringify(data));
}