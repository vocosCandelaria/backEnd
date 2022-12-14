import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as GithubStrategy } from 'passport-github2';
import { UserDao } from '../Dao/index.js';

const init = () => {

    passport.serializeUser ((user, done) => { //Recibe la respuesta que se le pasó al último
        done (null, user.id); // devuelve con el callback, el id.
    })

    passport.deserializeUser (async (id, done) => {
        const user = await UserDao.getById (id); // Con el Id del usuario que inicia sesion, busca al usuario y lo incluye en el objeto request
        
        done (null, user);
    })

    passport.use (
        "login", 
        new LocalStrategy (
            {
                usernameField: 'email',
                passwordField: 'password',
                passReqToCallback: true
            }, 
            async (req, email, password, done) => {
                try {
                    if (!email || !password) return done (null, false);
                    
                    const user = await UserDao.getOne({email: email})
                    // validar contraseña con bcrypt
                    if(!user || user.password !== password) return done (null, false)

                    const userResponse = {
                        id: user._id,
                        email: user.email,
                        cart: user.cart
                    }; // No se le pasar el usuario completo porque se le pasaría la contraseña

                    done (null, userResponse)

                } catch (error) {
                    console.log (error);
                    done(error);
                }
            }
        )
    );

    passport.use(
        "github",
        new GithubStrategy(
        {
          clientID: "Iv1.d5b60204196e7973",
          clientSecret: "a0b563b4946fbb1013f703aec7f4985f83928828",
          callbackURL: "http://localhost:8080/api/auth/github",
          scope: ["user:email"],
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
              const githubEmail = profile.emails?.[0].value;
    
              if (!githubEmail) return done(null, false);
    
              const user = await UserDao.getOne({ email: githubEmail });
    
              if (user) {
                const userResponse = {
                  id: user._id,
                  email: user.email,
                  cart: user.cart,
                };
    
                return done(null, userResponse);
              }
    
              const newUser = {
                email: githubEmail,
                name: profile._json.name,
                lastname: "-",
                // no guardar contraseña
              };
    
              const createdUser = await UserDao.save(newUser);
    
              const userResponse = {
                id: createdUser._id,
                email: createdUser.email,
                cart: createdUser.cart,
              };
    
              done(null, userResponse);
            } catch (error) {
              console.log(error);
              done(error);
            }
          }
        )
      );

}

export const PassportAuth = { 
    init,
}