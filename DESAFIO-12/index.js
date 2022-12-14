const express = require('express');
const { create } = require('express-handlebars');
const router = require('./router/sessionRouter');
const session = require('express-session');

// ----------------------Iniciando connect-mongo------------------------------//
const MongoStore=require('connect-mongo')
const advancedOptions={useNewUrlParser:true, useUnifiedTopology:true}
//----------------------------------------------------------------------------//



// Iniciando Express
const app = express();
const PORT = process.env.PORT||8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




// ----------------------Configurando connect-mongo---------------------------//
app.use(session({
    store: MongoStore.create({
      mongoUrl:'mongodb+srv://CandelariaVocos:93PameyKiarayZira93@cluster0.vvkocz0.mongodb.net/test' ,
      mongoOptions: advancedOptions,
      ttl:600,
      collectionName:'sessions'
  }),
  secret:'secret',
  resave: false,
  saveUninitialized: false
  }))
//----------------------------------------------------------------------------//

app.use('/', router);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//------------------------------handlebars-----------------------------------//
const hbs = create();

//Handlebars como motor de plantilla
app.engine('handlebars', hbs.engine);

//Motor de plantillas que vamos a usar 
app.set('view engine', 'handlebars');

//Directorio donde estan nuestra plantillas 
app.set('views', './views');

//----------------------------------------------------------------------------//
