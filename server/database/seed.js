const Sequelize = require('sequelize');
// const db = require('./schema.sql');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('gallery', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

const Photos = sequelize.define('photo', {
  // attributes
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  url: {
    type: Sequelize.STRING,
    allowNull: false,
  }
}, {
  // options
});

sequelize
  .authenticate()
  .then(() => {
      Photos.sync({ force: true }).then(() => {
          return Photos.create({
              id: 1,
              url: 'http://sampleURL',
          })
      })
      console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  

//  Photos.findAll().then(photos => {
//     console.log("All photos:", JSON.stringify(photos, null));
//   });

//   sequelize.query("SELECT * FROM `photos`", { type: sequelize.QueryTypes.SELECT})
//   .then(photos => {
//     console.log(photos);
//   })


// Photos.create({  
//     id: 1,
//     url: 'http://sampleURL',
//   })
//   .then(photo => {
//     console.log(`New photo ${photo.url}, with id ${photo.id} has been created.`);
//   });

//   // Note: using `force: true` will drop the table if it already exists
// User.sync({ force: true }).then(() => {
//     // Now the `users` table in the database corresponds to the model definition
//     return User.create({
//       firstName: 'John',
//       lastName: 'Hancock'
//     });
//   });

module.exports = {
  Photos
}