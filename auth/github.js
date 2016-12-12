'use strict';

const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const knex = require('../knex');

require('dotenv').config();

const init = require('./init');
const githubConfig = {
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: process.env.CALLBACK_URL
};

passport.use(new GitHubStrategy(githubConfig,
  (accessToken, refreshToken, profile, done) => {
    knex('users')
      .where('github_id', profile.id)
      .then((user) => {
        if (user.length) {
          done(null, user[0]);
        } else {
          const newUser = {
            github_id: parseInt(profile.id),
            name: profile.displayName || profile.username,
            gh_avatar_url: profile._json.avatar_url || 'https://avatars.io/static/default_128.jpg'
          };

          knex('users')
            .insert(newUser, '*')
            .then((user) => {
              knex('badges')
                .then((badges) => {
                  badges.forEach((badge) => {
                    knex('users_badges')
                      .insert({
                        user_id: parseInt(user[0].github_id),
                        badge_id: parseInt(badge.id)
                      }, '*')
                      .catch((err) => {
                        done(err);
                      });
                  });
                })
                .catch((err) => {
                  done(err);
                });

              done(null, user[0]);

            })
            .catch((err) => {
              done(err);
            });
        }

      });

}));

init();

module.exports = passport;
