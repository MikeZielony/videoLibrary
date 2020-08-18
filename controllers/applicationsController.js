exports.store = (req, res) => {

    res.render('confirm');


    console.log('hahs');

    const sqlite3 = require('sqlite3').verbose();

// open database in memory
    let db = new sqlite3.Database('Database/videoLibrary.db', sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Connected to the in-memory SQlite database.');
    });

    const title = req.body.title;
    const description = req.body.description;
    const tag = req.body.tag;
    const uploadedBy = req.body.uploadedBy;
    const email = req.body.email;
    const url = req.body.url;

    sql = `INSERT INTO UserStory (title, description, tag, uploaded, email, url)
            VALUES (?, ?, ?, ?, ?, ?);`;
    db.run(sql, [title,  description, tag, uploadedBy, email, url], function (err, rows, fields) {
    });

    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        rows.forEach((row) => {

        });
    });

// close the database connection
    db.close((err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Disconnected from the in-memory SQlite database.');
    });
    module.exports = db;
}

exports.delete = (req, res) => {
    res.render('confirm');

    const sqlite3 = require('sqlite3').verbose();

// open a database connection
    let db = new sqlite3.Database('Database/SuperSprinter3000.db', sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Connected to the in-memory SQlite database.');
    });

    const id = req.body.id;

    let data = [id];
    let sql = `DELETE FROM UserStory      
            WHERE id = ?`;

    db.run(sql, data, function (err) {
        if (err) {
            return console.error(err.message);
        }
        console.log(`Row(s) updated: ${this.changes}`);

    });

// close the database connection
    db.close();

    console.log('Disconnected from the in-memory SQlite database.');

    module.exports = db;
}

exports.update = (req, res) => {
    res.render('confirm');

    const sqlite3 = require('sqlite3').verbose();

// open a database connection
    let db = new sqlite3.Database('Database/SuperSprinter3000.db', sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Connected to the in-memory SQlite database.');
    });

    const id = req.body.id;
    const title = req.body.title;
    const story = req.body.story;
    const criteria = req.body.criteria;
    const businessvalue = req.body.businessvalue;
    const estimation = req.body.estimation;
    const status = req.body.status;



    let data = [title, story, criteria, businessvalue, estimation, status, id];
    let sql = `UPDATE UserStory
            SET title = ?,
            story = ?,
            criteria = ?,
            businessvalue = ?, 
            estimation = ?, 
            status = ?
            
            WHERE id = ?`;

    db.run(sql, data, function (err) {
        if (err) {
            return console.error(err.message);
        }
        console.log(`Row(s) updated: ${this.changes}`);

    });

// close the database connection
    db.close();

    console.log('Disconnected from the in-memory SQlite database.');};

