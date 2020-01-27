const mysql = require('mysql');

module.exports = function(app) {
    app.get('/posts', (req, res) => {
        console.log("Loading Posts");
        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'drake24_sushicode',
        });
    
        connection.connect((err) => {
            if (err) throw err;
            console.log('Connected!');
        });
    
        connection.query('SELECT * FROM wp_posts LIMIT 1', (err, rows) => {
            if (err) throw err;
            console.log(rows);
        });
    
        connection.end();
        res.send('Test Post');
    });
}

