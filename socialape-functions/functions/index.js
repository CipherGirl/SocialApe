const functions = require("firebase-functions");
const app = require("express")();

const FBAuth = require("./util/fbAuth");

const { getAllScreams, postOneScream } = require("./handlers/screams");
const {
  signup,
  login,
  uploadImage,
  addUserDetails,
  getAuthenticatedUser,
} = require("./handlers/users");

//* Users Routes
app.post("/signup", signup);
app.post("/login", login);
app.post("/user/image", FBAuth, uploadImage);
app.post("/user", FBAuth, addUserDetails);
app.get("/user", FBAuth, getAuthenticatedUser);

//* Scream Routes
app.get("/screams", getAllScreams);
app.post("/scream", FBAuth, postOneScream);
app.get
//TODO: 1. Delete Scream, 2. Like a Scream, 3. Unlike a Scream, 4. Comment on Scream

exports.api = functions.https.onRequest(app);
