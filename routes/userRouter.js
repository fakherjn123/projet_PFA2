var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')
const uploadfile = require('../middlewares/uploadFile')
const {requireAuthUser} = require("../middlewares/authMiddlewares")

// 🚀 SOLUTION ALGORITHMIQUE : Ajouter la route manquante
// Route principale que ton frontend React attend
router.get('/', userController.getAllUsers) // ← NOUVELLE ROUTE AJOUTÉE !

// Routes existantes conservées
router.get('/getAllUsers', userController.getAllUsers)
router.get('/getUserByAge/:age', requireAuthUser, userController.getUserByAge )
router.get('/searchUsersByUsername',requireAuthUser,userController.searchUsersByName )
router.get('/getUserByAgeBetweenXAndY',requireAuthUser,userController.getUserByAgeBetweenXAndY )
router.get('/getUserById/:id',requireAuthUser,userController.getUserById )
router.post('/addClient',userController.addClient )
router.post('/login',userController.login )
router.post('/logout',requireAuthUser,userController.logout )
router.post('/addClientWithFile',uploadfile.single("image_User"),userController.addClientWithFile )
router.post('/addProf',requireAuthUser,userController.addProf )
router.delete('/DeleteUserById/:id',requireAuthUser,userController.DeleteUserById )

// 🔧 SOLUTION ALTERNATIVE : Routes de compatibilité
// Si tu veux garder tes routes existantes ET ajouter la compatibilité

// Route de test simple (sans contrôleur)
router.get('/test', (req, res) => {
  res.json({
    success: true,
    message: "Route /users/test fonctionne !",
    availableRoutes: [
      'GET /users/',
      'GET /users/getAllUsers', 
      'GET /users/getUserById/:id',
      'POST /users/addClient',
      'POST /users/login'
    ],
    timestamp: new Date().toISOString()
  });
});

// 🎯 SOLUTION DE DÉBOGAGE : Route pour voir toutes les routes
router.get('/debug/routes', (req, res) => {
  const routes = [];
  
  // Parcourir toutes les routes du router
  router.stack.forEach((layer) => {
    if (layer.route) {
      const path = layer.route.path;
      const methods = Object.keys(layer.route.methods).map(m => m.toUpperCase());
      routes.push({ path, methods });
    }
  });
  
  res.json({
    message: "Routes disponibles dans userRouter",
    baseUrl: "/users",
    routes: routes,
    totalRoutes: routes.length,
    timestamp: new Date().toISOString()
  });
});

module.exports = router;