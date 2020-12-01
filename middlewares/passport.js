const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const LocalStrategy = require("passport-local").Strategy;
const GooglePlusTokenStrategy = require("passport-google-plus-token");
const FacebookTokenStrategy = require("passport-facebook-token");
const GithubStrategy = require("passport-github2").Strategy;
const { ExtractJwt } = require("passport-jwt");
const { JWT_SECRET, auth } = require("../configs");

const User = require("../models/User");

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

// Passport Jwt
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken("Authorization"),
      secretOrKey: JWT_SECRET,
    },
    async (payload, done) => {
      try {
        const user = await User.findById(payload.sub);

        if (!user) return done(null, false);

        done(null, user);
      } catch (error) {
        done(error, false);
      }
    }
  )
);

// Passport local
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });

        if (!user) return done(null, false);

        const isCorrectPassword = await user.isValidPassword(password);

        if (!isCorrectPassword) return done(null, false);

        done(null, user);
      } catch (error) {
        done(error, false);
      }
    }
  )
);

// Passport Google
// passport.use(
//   new GooglePlusTokenStrategy(
//     {
//       clientID: auth.google.CLIENT_ID,
//       clientSecret: auth.google.CLIENT_SECRET,
//     },
//     async (accessToken, refreshToken, profile, done) => {
//       try {
//         // console.log('accessToken ', accessToken)
//         // console.log('refreshToken ', refreshToken)
//         console.log('profile ', profile)
//         // check whether this current user exists in our database
//         const user = await User.findOne({
//           authGoogleID: profile.id,
//           authType: "google",
//         });

//         if (user) return done(null, user);

//         // If new account
//         const newUser = new User({
//           authType: "google",
//           authGoogleID: profile.id,
//           username: profile.displayName,
//           email: profile.emails[0].value,
//           firstName: profile.name.givenName,
//           lastName: profile.name.familyName,
//           image: profile.photos[0].value,
//         });

//         await newUser.save();

//         done(null, newUser);
//       } catch (error) {
//         console.log("error ", error);
//         done(error, false);
//       }
//     }
//   )
// );

// Passport Facebook
// passport.use(
//   new FacebookTokenStrategy(
//     {
//       clientID: auth.facebook.CLIENT_ID,
//       clientSecret: auth.facebook.CLIENT_SECRET,
//     },
//     async (accessToken, refreshToken, profile, done) => {
//       try {
//         // check whether this current user exists in our database
//         const user = await User.findOne({
//           authFacebookID: profile.id,
//           authType: "google",
//         });

//         if (user) return done(null, user);

//         // If new account
//         const newUser = new User({
//           authType: "facebook",
//           authFacebookID: profile.id,
//           username: profile.displayName,
//           email: profile.emails[0].value,
//           firstName: profile.name.givenName,
//           lastName: profile.name.familyName,
//           image: profile.photos[0].value,
//         });

//         await newUser.save();

//         done(null, newUser);
//       } catch (error) {
//         console.log("error ", error);
//         done(error, false);
//       }
//     }
//   )
// );



// Passport Github
// passport.use(
//   new GithubStrategy(
//     {
//       clientID: auth.github.CLIENT_ID,
//       clientSecret: auth.github.CLIENT_SECRET,
//       callbackURL: "http://localhost:8000/users/auth/github/callback",
//     },
//     async function (req, accessToken, refreshToken, profile, done) {
//       console.log("profile ", profile);
//       try {
//         // check whether this current user exists in our database
//         const user = await User.findOne({
//           authGithubID: profile.id,
//           authType: "github",
//         });

//         if (user) return done(null, user);

//         // If new account
//         const newUser = new User({

//           authType: "github",
//           authGithubID: profile.id,
//           username: profile.username,
//           firstName: profile.firstName ? profile.firstName : "",
//           lastName: profile.lastName ? profile.lastName : "",
//           image: profile.photos[0].value,
//         });

//         await newUser.save();

//         done(null, newUser);
//       } catch (error) {
//         console.log("error ", error);
//         done(error, false);
//       }
//     }
//   )
// );
