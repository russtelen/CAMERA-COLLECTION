//=============================
// REQUIRE
//=============================
const { connectDb } = require("../models/db");
const passport = require("passport");
const mongoose = require("mongoose");
const Camera = require("../models/Cameras");
const Collection = require("../models/Collections");
const User = require("../models/Users");

//=============================
// CONFIG
//=============================
// Connect to db
connectDb();

//=============================
// Seed DB
//=============================
const seedDb = async () => {
  // Delete Everything
  await Camera.deleteMany({});
  await Collection.deleteMany({});
  await User.deleteMany({});

  // Create new users
  //-------------------
  const user1 = await new User({
    email: "russ@gmail.com",
    username: "russ",
  });
  const user2 = await new User({
    email: "gabi@gmail.com",
    username: "gabi",
  });

  await User.register(user1, "password");
  await User.register(user2, "password");
  //-------------------

  // Create New Categories
  //-------------------
  const tlr = await new Collection({
    title: "Twin Lens Reflex",
    user: user1._id,
  });

  const rangefinder = await new Collection({
    title: "Rangefinder",
    user: user1._id,
  });

  await tlr.save();
  await rangefinder.save();
  //-------------------

  // Create New Cameras
  //-------------------
  const mamiyac330 = await new Camera({
    title: "Mamiya C330",
    imageUrl: "https://www.35mmc.com/wp-content/uploads/2020/05/FMC9846.jpg",
    year: 1969,
    filmType: "120",
    _collection: tlr._id,
    description:
      "The C330 was released in 1969 as part of the Mamiya C series of interchangeable lens medium format TLR cameras. It is an improved version of the Mamiya C33.",
    user: user1._id,
  });

  const yashicaD = await new Camera({
    title: "Yashica D",
    imageUrl: "http://farm5.staticflickr.com/4154/4995420848_3524e0db57.jpg",
    year: 1972,
    filmType: "120",
    _collection: tlr._id,
    description:
      "A wonderful twin lens reflex system featuring a Yashikor 80mm f/3.5 lens set.  The Yashica-D has shutter speeds from 1 second to 1/500th, an aperture range of f/3.5 to f/22, a film advance lock, and upgraded ergonomic control of both shutter speeds and aperture movements.",
    user: user1._id,
  });

  const canonP = await new Camera({
    title: "Canon P",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/5/5c/Canon_p01.jpg",
    year: 1959,
    filmType: "35mm",
    _collection: rangefinder._id,
    description:
      "The Canon P (P for Populaire) was a rangefinder camera produced by Canon Inc., compatible with the Leica M39 screw mount (LTM). It was introduced in March 1959 and was marketed as a low-cost sister to the Canon VI-L. A black version was also introduced, which today is quite rare. The Canon P is the predecessor to the Canon 7 rangefinder.",
    user: user1._id,
  });

  await mamiyac330.save();
  await yashicaD.save();
  await canonP.save();

  tlr.cameras.push(mamiyac330);
  tlr.cameras.push(yashicaD);
  rangefinder.cameras.push(canonP);

  await tlr.save();
  await rangefinder.save();
  //-------------------
};

(async () => {
  await seedDb();
  mongoose.connection.close();
})();
