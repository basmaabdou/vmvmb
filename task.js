import express from 'express';
import { engine } from 'express-handlebars';
import studentsrouts from './routs/students.js';
const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use('/students', studentsrouts);
app.listen(4000);