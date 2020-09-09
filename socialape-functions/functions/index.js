const functions = require("firebase-functions");
const app = require("express")();

const FBAuth = require("./util/fbAuth");

const { getAllScreams, postOneScream } = require("./handlers/screams");
const { signup, login } = require("./handlers/users");

//*Users Routes
app.post("/signup", signup);
app.post("/login", login);

//*Route for loading all the Screams
app.get("/screams", getAllScreams);

//*Route for posting a Scream
app.post("/scream", FBAuth, postOneScream);

exports.api = functions.https.onRequest(app);
