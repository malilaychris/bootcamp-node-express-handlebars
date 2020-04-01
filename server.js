const routes = require('./controllers/burger_controller');

const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
let PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log('App listening on PORT ' + PORT);
});

app.engine('handlebars', expbhs( { defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use('/public', express.static('/public'));
app.use(routes);