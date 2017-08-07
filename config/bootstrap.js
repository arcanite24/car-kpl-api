/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

const q = require('q');
const fs = require('fs');

module.exports.bootstrap = function(cb) {

  /*
  let cars = JSON.parse(fs.readFileSync('cars.json', 'utf8'));
  console.log('autos: ', cars.length);
  let qCars = [];
  cars.forEach((car) => {
    qCars.push(Car.findOrCreate({car: car.car}, car));
  });

  q.all(qCars).then((data) => {
    console.log('Agregados todos los coches a la base de datos', data.length);
    cb();
  }).catch(err => cb(err));
  */

  cb();

};
