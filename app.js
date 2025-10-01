const cors = require('cors');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const http = require('http');
require('dotenv').config();
const { connecttoMongoDB } = require("./config/db");

var app = express();

// CORS configuration - Permettre toutes les origines pour le développement
app.use(cors({
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000', 'http://localhost:5173'], // ✅ Ajout de 127.0.0.1
  credentials: true, 
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"], // ✅ Ajout de PATCH
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept", "Origin"] // ✅ Headers supplémentaires
}));

// ✅ Middleware pour gérer les requêtes preflight OPTIONS
app.options('*', cors());

// Import routers
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/userRouter');
var osRouter = require('./routes/osRouter');
var reclamationRouter = require('./routes/reclamationRouter');
var contratRouter = require('./routes/contratRouter');
var paiementRouter = require('./routes/paiementRouter');
var assuranceRouter = require('./routes/assuranceRouter');

// Middlewares
app.use(logger('dev'));
app.use(express.json({ limit: '10mb' })); // ✅ Limite de taille augmentée
app.use(express.urlencoded({ extended: false, limit: '10mb' }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Middleware de débogage pour voir les requêtes entrantes
app.use((req, res, next) => {
  console.log(`📝 ${req.method} ${req.path} - Origin: ${req.get('Origin')}`);
  next();
});

// Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/os', osRouter);
app.use('/reclamations', reclamationRouter);
app.use('/assurances', assuranceRouter);
app.use('/paiements', paiementRouter);
app.use('/contrats', contratRouter);

// ✅ Route de test pour vérifier que le serveur fonctionne
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    port: PORT 
  });
});

// Catch 404
app.use(function (req, res, next) {
  console.log(`❌ 404 - Route non trouvée: ${req.method} ${req.originalUrl}`);
  next(createError(404));
});

// Error handler
app.use(function (err, req, res, next) {
  // ✅ Log détaillé des erreurs
  console.error('❌ Erreur serveur:', {
    message: err.message,
    status: err.status,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    url: req.originalUrl,
    method: req.method
  });

  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  res.status(err.status || 500);
  res.json({ 
    error: err.message,
    status: err.status || 500,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});

// Start server
const PORT = process.env.PORT || 5001;
const server = http.createServer(app);

server.listen(PORT, '0.0.0.0', () => { // ✅ Écoute sur toutes les interfaces
  connecttoMongoDB();
  console.log(`✅ Server is running on http://localhost:${PORT}`);
  console.log(`🔗 Health check: http://localhost:${PORT}/api/health`);
  console.log(`👥 Users endpoint: http://localhost:${PORT}/users`);
  console.log(`🚗 Cars endpoint: http://localhost:${PORT}/cars`); // ✅ Added cars endpoint log
});

// ✅ Gestion des erreurs de serveur
server.on('error', (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  switch (error.code) {
    case 'EACCES':
      console.error(`❌ Port ${PORT} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`❌ Port ${PORT} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
});

// ✅ Gestion propre de l'arrêt du serveur
process.on('SIGTERM', () => {
  console.log('📴 SIGTERM received, shutting down gracefully');
  server.close(() => {
    console.log('✅ Process terminated');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('📴 SIGINT received, shutting down gracefully');
  server.close(() => {
    console.log('✅ Process terminated');
    process.exit(0);
  });
});

module.exports = app;