const yelp = require('node-yelp-api');
const NpmYelp = require('yelp');
const merge = require('merge');
const mongoose = require('mongoose');
const User = require('./user');
const ObjectId = mongoose.Schema.Types.ObjectId;

const yelp2 = new NpmYelp({
  consumer_key: process.env.YELP_CONSUMER_KEY,
  consumer_secret: process.env.YELP_CONSUMER_SECRET,
  token: process.env.YELP_TOKEN,
  token_secret: process.env.YELP_TOKEN_SECRET,
});

const options = {
  consumer_key: process.env.YELP_CONSUMER_KEY,
  consumer_secret: process.env.YELP_CONSUMER_SECRET,
  token: process.env.YELP_TOKEN,
  token_secret: process.env.YELP_TOKEN_SECRET,
};

const yelpSchema = new mongoose.Schema({
  yelpId: { type: String },
  term: { type: String },
  location: { type: String },
  fans: [{ type: ObjectId, ref: 'User' }],
});

yelpSchema.statics.search = (input, cb) => {
  const parameters = {
    term: input.term,
    location: input.location,
  };
  yelp.search(merge(options, parameters), (err, data) => {
    if (err) return cb(err);
    console.log(JSON.parse(data.body, null, 2))
    return cb(null, JSON.parse(data.body, null, 2));
  });
};

yelpSchema.statics.getBusinessDetails = (yelpId, cb) => {
  yelp2.business(yelpId, (err, data) => {
    if (err) return cb(err);
    return cb(null, data);
  });
};

yelpSchema.statics.nextPage = (input, cb) => {
  const parameters = {
    term: input.term,
    offset: input.offset || 1,
    location: input.location,
  };
  yelp.search(merge(options, parameters), (err, data) => {
    if (err) return cb(err);
    return cb(null, JSON.parse(data.body, null, 2));
  });
};

yelpSchema.statics.updateFavorites = (favorite, UserId, cb) => {
  Yelp.findById(favorite, (err1, dbYelp) => {
    User.findById(UserId, (err2, dbUser) => {
      if (err1 || err2) return cb(err1 || err2);
      dbYelp.fans.forEach((fan) => {
        if (dbUser._id.toString() === fan.toString()) {
          dbYelp.fans.splice(dbYelp.fans.indexOf(dbUser._id));
          dbUser.Favorites.find((favObj, index) => {
            if (favObj.yelpId === dbYelp.yelpId) {
              return dbUser.Favorites.splice(index, 1);
            } return console.error('Did not successfully remove favorite from dbUser.');
          });

          dbUser.save((err3, savedUser) => {
            dbYelp.save((err4, savedYelp) => {
              if (err3 || err4) return cb(err3 || err4);
              return cb(null, { savedUser, savedYelp });
            });
          });
        } else {
          return cb({ Error: 'Did not find a database match.' });
        }
      });
    });
  });
};

yelpSchema.statics.addFavorite = (reqObj, userId, cb) => {
  if (!reqObj.location || !userId) {
    return cb({ Error: 'Required inputs are not present.' });
  }
  return Yelp.find({ yelpId: reqObj.id }, (err1, dbYelp) => {
    User.findById(userId, (err2, dbUser) => {
      if (err1 || err2) return cb(err1 || err2);
      if (dbYelp.length !== 0) {
        dbYelp[0].fans.push(userId);
        dbUser.Favorites.push(dbYelp[0]._id);
        dbYelp[0].save((err3, savedYelp) => {
          dbUser.save((err4, savedUser) => {
            if (err3 || err4) return cb(err3 || err4);
            return cb(null, { savedUser, savedYelp });
          });
        });
      } else {
        const newYelp = new Yelp({
          yelpId: reqObj.yelpId,
          term: reqObj.term || '',
          location: reqObj.location,
        });
        Yelp.create(newYelp, (err, savedYelp) => {
          if (err) return cb(err);
          const newFavorite = {
            _id: savedYelp._id,
            yelpId: savedYelp.yelpId,
          };
          savedYelp.fans.push(dbUser._id);
          dbUser.Favorites.push(newFavorite);
          savedYelp.save((err5, savedYelp2) => {
            dbUser.save((err6, savedUser) => {
              if (err5 || err6) return cb(err5 || err6);
              return cb(null, { savedYelp2, savedUser });
            });
          });
        });
      }
    });
  });
};

const Yelp = mongoose.model('Yelp', yelpSchema);
module.exports = Yelp;
