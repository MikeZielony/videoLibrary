const sqlite3 = require('sqlite3').verbose();

exports.mainPage = (req, res) => {
    res.render('mainPage');
};

exports.confirm = (req, res) => {
    res.render('confirm');
};

exports.search = (req, res) => {

    // open the database

       let db = new sqlite3.Database('dataBase/movies', sqlite3.OPEN_READWRITE, (err) => {
          if (err) {
          return console.error(err.message);
          }
          console.log('Connected to the in-memory SQlite database.');
       });

       let sql = `SELECT *
                   FROM movies`;

        db.all(sql, (err, row) => {
        if (err) {
        throw err;
        }

       res.render('search',{"row" : row});
    });

    // close the database connection
    db.close();
        console.log('disconnected from the in-memory SQlite database.');

};

exports.edit = (req, res) => {
    const  id = require('/controllers/applicationsController');

    // open the database

    let db = new sqlite3.Database('dataBase/movies', sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Connected to the in-memory SQlite database.');
    });



    let data = [id];
    let sql = `SELECT * FROM movies      
            WHERE id = ?`;

    db.run(sql, data, function (err) {
        if (err) {
            return console.error(err.message);
        }
        console.log(`Row(s) updated: ${this.changes}`);

    });

    // close the database connection
    db.close();
    console.log('disconnected from the in-memory SQlite database.');

   // res.render('edit');
};

exports.iframe = (req, res) => {
    // open the database

    let db = new sqlite3.Database('dataBase/movies', sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Connected to the in-memory SQlite database.');
    });

    let sql = `SELECT * FROM movies
                ORDER BY random() ASC
                    LIMIT 5;`;

    db.all(sql, (err, row) => {
        if (err) {
            throw err;
        }

        res.render('iframe',{"row" : row});

    });

    // close the database connection
    db.close();
    console.log('disconnected from the in-memory SQlite database.');
};

exports.shit = (req, res) => {
    res.render('shit');
};

exports.delete = (req, res) => {
    res.render('delete');
};

exports.searchByTag = (req, res) => {
    res.render('searchByTag');
};