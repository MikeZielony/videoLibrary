const sqlite3 = require('sqlite3').verbose();

exports.mainPage = (req, res) => {
    res.render('mainPage');
};

exports.confirm = (req, res) => {
    res.render('confirm');
};

exports.search = (req, res) => {
    res.render('search');

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
    res.render('edit');
};

exports.shit = (req, res) => {
    res.render('shit');
};

exports.delete = (req, res) => {
    res.render('delete');
};

