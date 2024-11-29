import express from 'express';
import { about, home, projects, skills } from '../controllers/main.controllers.js';
//router
const router = express.Router();


// "/" path for home data
router.get('/',home);


// "/about" path for about data
router.get('/about',about);


// "/projects" path for project data
router.get('/projects',projects);


// "/skills" path for skill data
router.get('/skills',skills);

export default router;