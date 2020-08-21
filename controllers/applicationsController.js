exports.store = (req, res) => {
    res.render('confirm');
    console.log('hahs');

    const sqlite3 = require('sqlite3').verbose();

// open database in memory
    let db = new sqlite3.Database('dataBase/movies', sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Connected to the in-memory SQlite database.');
    });

    const title = req.body.title;
    const description = req.body.description;
    const tag = req.body.tag;
    const uploaded = req.body.uploaded;
    const email = req.body.email;
    const url = req.body.url;

    let sql = `INSERT INTO movies (title, description, tag, uploaded, email, url)
            VALUES (?, ?, ?, ?, ?, ?);`;
    db.run(sql, [title, description, tag, uploaded, email, url], function (err, rows, fields) {
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


    //const sqlite3 = require('sqlite3').verbose();

// open a database connection
    let db = new sqlite3.Database('dataBase/movies', sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Connected to the in-memory SQlite database.');
    });

    const id = req.body.id;

    let data = [id];
    let sql = `DELETE FROM movies      
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

exports.edit = (req, res) => {
    res.render('confirm');

    const sqlite3 = require('sqlite3').verbose();

// open a database connection
    let db = new sqlite3.Database('dataBase/movies', sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Connected to the in-memory SQlite database.');
    });

    const id = req.body.id;
    const title = req.body.title;
    const description = req.body.description;
    const tag = req.body.tag;
    const uploaded = req.body.uploaded;
    const email = req.body.email;
    const url = req.body.url;

    let data = [title, description, tag, uploaded, email, url, id];
    let sql = `UPDATE movies
            SET title = ?,
            description = ?,
            tag = ?,
            uploaded = ?, 
            email = ?, 
            url = ?
            
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
};

exports.decision = (req, res) => {

    const decision = req.body.choice;
    const id = req.body.id;

    if(decision === 'edit') {
        res.render('edit')
    }else{

        const sqlite3 = require('sqlite3').verbose();

        let db = new sqlite3.Database('dataBase/movies', sqlite3.OPEN_READWRITE, (err) => {
            if (err) {
                return console.error(err.message);
            }
            console.log('Connected to the in-memory SQlite database.');
            res.render('confirm');
        });

        let data = [id];
        let sql = `DELETE FROM movies      
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
    }
};

exports.searchByTag = (req, res) => {
    const tag = req.body.tag;

    res.render('viewResult');
}

exports.viewResult = (req, res) => {
    const sqlite3 = require('sqlite3').verbose();
    const  tag = req.body.tag;
console.log(tag);
    // open the database

    let db = new sqlite3.Database('dataBase/movies', sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Connected to the in-memory SQlite database.');
    });



    let data = [tag];
    let sql = `SELECT * FROM movies      
            WHERE tag = ?`;

    db.all(sql, (err, row) => {
        if (err) {
            throw err;
        }
console.log(row);
        res.render('viewResult',{"row" : row});

    });

    // close the database connection
    db.close();
    console.log('disconnected from the in-memory SQlite database.');
};



