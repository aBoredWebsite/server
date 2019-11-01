const User = require("../models/User");
const { OAuth2Client } = require("google-auth-library");
const generateToken = require("../helpers/jwt").generateToken;
const compareHash = require('../helpers/bcrypt').compareHash
const client = new OAuth2Client(process.env.CLIENT_ID);

class UserController {
  static loginOAuth(req, res, next) {
    let { id_token } = req.body;
    let payloadJWT;
    let Email;
    let Name;
    client
      .verifyIdToken({
        idToken: id_token,
        audience: process.env.CLIENT_ID
      })
      .then(tiket => {
        const payload = tiket.getPayload();
        const { email, name } = payload;
        Email = email;
        Name = name;
        return User.findOne({ email });
      })
      .then(userFind => {
        if (userFind) {
          let id = userFind._id;
          payloadJWT = { _id: id };
          let token = generateToken(payloadJWT);
          res.status(200).json(token);
        } else {
          let password = "rahasia";
          User.create({ name: Name, email: Email, password })
          .then(user => {
            let id = user._id;
            // payloadJWT = { email: Email, name: Name, _id: id };
            payloadJWT = { _id: id };
            let token = generateToken(payloadJWT);
            res.status(200).json(token);
          })
        }
      })
      .catch(err => {
        next(err);
      });
  }

  static register(req, res, next) {
    const { name, email, password } = req.body;
    User.findOne({ email })
    .then((user)=>{
      if (user) {
        next({
          status: 400,
          message: `Email already in use`
        });
      } else {
        return User.create({ name, email, password })
      }
    })
    .then(created => {
      let payload = {
        id : created._id
      }
      let token = generateToken(payload)
      res.status(201).json(token);
    })
    .catch(next);
  }

  static login(req, res, next) {
    const { email, password } = req.body;
    User.findOne({ email })
      .then(user => {
        if (user && compareHash(password, user.password)) {
          let payload = {
            id: user._id
          };
          let token = generateToken(payload);
          res.status(200).json( token );
        } else {
          next({
            status: 400,
            message: `Invalid Email/Password`
          });
        }
      })
      .catch(next);
  }
}

module.exports = UserController;

