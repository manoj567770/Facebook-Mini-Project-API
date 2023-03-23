const mongoose = require("mongoose");

const uri =
  "mongodb+srv://manoj567770:Mk8294009429@facebook-mini-project.fldu93w.mongodb.net/Facebook-Mini-Project?retryWrites=true&w=majority";
const connectDb = () => {
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDb;
