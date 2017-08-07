/**
 * CarController
 *
 * @description :: Server-side logic for managing Cars
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  search(req, res) {
    let query = req.param('s');
    Car.find({car: {'contains': query}}).then((data) => {
      return res.json(data);
    }).catch((err) => {
      console.log(err);
      return res.json(500, {msg: err});
    });
  }

};
