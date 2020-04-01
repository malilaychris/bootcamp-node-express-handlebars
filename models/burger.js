const orm = require('../config/orm');

let burger = {
  selectAll: (cb) => {
    orm.selectAll('burgers', (res) => {
      cb(res);
    });
  },
  insertOne: (burger_name, devoured, cb) => {
    orm.insertOne('burgers', burger_name, devoured, (res) => {
      cb(res);
    });
  },
  updateOne: (burger_name, devoured, cb) => {
    orm.updateOne('burgers', burger_name, devoured, (res) => {
      cb(res);
    });
  }
};

module.exports = burger;