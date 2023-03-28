const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getVideogames = require('./getVideogames.js');
const getVideogameById = require('./getVideogameById');
const getVideogameByName = require('./getVideogameByName');
const postVideogame = require('./postVideogame');
const getGenres = require('./getGenres');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/videogames/name',getVideogameByName)
router.get('/videogames',getVideogames)
router.get('/videogames/:idVideogame',getVideogameById)
router.post('/videogames',postVideogame)
router.get('/genres',getGenres)
 
module.exports = router;
