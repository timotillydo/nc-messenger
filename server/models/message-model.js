const connection = require("../db/connection");

exports.insertMessage = newMsg => {
  return connection("messages")
    .insert(newMsg)
    .returning("*")
    .then(msg => msg);
};
