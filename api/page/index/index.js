

module.exports = async (req, res, database, render) => {
    const tagList = await database.sql('SELECT * from tag');
    console.log(tagList[0]);
 
    const initialState = {
        key: 'common',
        value: { 
            url: req.path,
            tagList
        }
    };
    
    res.set('Content-Type', 'text/html');
    res.send(render({
        title: 'server side render',
        url: req.path,
        initialState
    }));
}