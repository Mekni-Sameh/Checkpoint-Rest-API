const express = require("express");
const userRoute = express.Router();


userRoute.get("/", (req, res) => {
  res.send("<h1>Welcome  </h1><hr>");
});

userRoute.get("/all", (req, res) => {
  User.find()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

userRoute.post("/newuser", (req, res) => {
  const newuser = new User(req.body);
  newuser
    .save()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

userRoute.put("/update/:id", function (req, res) {
  const personID = req.params.id;
  const update = req.body;
  User.findByIdAndUpdate(personID, update, { new: true })
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

userRoute.delete("/remove/:id", function (req, res) {
  const removedUserID = req.params.id;
  User.findByIdAndRemove(removedUserID)
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});
module.exports = userRoute;