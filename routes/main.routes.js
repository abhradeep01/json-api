import express from 'express';
import { about, home, projects, skills } from '../controllers/main.controllers.js';
//router
const router = express.Router();


// "/" path content data
router.get('/',home);


// "/about" path data
router.get('/about',about);


// "/projects" path data
router.get('/projects',projects);


// "/skills" path data
router.get('/skills',skills);

export default router;