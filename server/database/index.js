const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3000,
    user: 'root',
    password: '',
    database: 'gallery',
});

connection.connect(function(err) {
    if (err) {
        console.log(err);
        return;
    }
     
    console.log('Connected');
});

// connection.query('SELECT * FROM photos', (err, gallery) => {
//     if (err) {
//         console.log(err);
//     }
    
//     console.log(gallery);

//     gallery.forEach((photo) => {
//         console.log(`${photo.url} and ${photo.id}`);
//       })
//   });

module.exports = connection;