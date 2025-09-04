var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const http = require('http');
require('dotenv').config();
const { connecttoMongoDB } = require("./config/db");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/userRouter');
var osRouter = require('./routes/osRouter');
var reclamationRoutes = require('./routes/reclamationRouter');
var contratRouter = require('./routes/contratRouter');
var paiementRouter = require('./routes/paiementRouter');
var assuranceRouter = require('./routes/assurenceRouter');

// 👉 Ajoute tes nouveaux routers
var assuranceRouter = require('./routes/assurenceRouter');
var contratRouter = require('./routes/contratRouter');
var paiementRouter = require('./routes/paiementRouter');
var reclamationRouter = require('./routes/reclamationRouter');

var app = express();

// Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes principales
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/os', osRouter);
app.use('/reclamations', reclamationRoutes);
app.use('/assurences', assuranceRouter);
app.use('/paiements', paiementRouter);
app.use('/contrats', contratRouter);


// 👉 Ajoute ici tes API REST
app.use('/api/assurances', assuranceRouter);
app.use('/api/contrats', contratRouter);
app.use('/api/paiements', paiementRouter);
app.use('/api/reclamations', reclamationRouter);

// Catch 404
app.use(function (req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.json({ error: err.message });
});

// Démarrage serveur + connexion DB
const server = http.createServer(app);
server.listen(process.env.PORT || 5000, () => {
  connecttoMongoDB();
  console.log(`✅ Server is running on port ${process.env.PORT || 5000}`);
});

module.exports = app;
