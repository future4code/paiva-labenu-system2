import {app} from "./app"
import { createTables } from "./data/migrations";
import { addClass } from "./endpoints/addClass";
import { addStudent } from "./endpoints/addStudent"
import { addTeachers } from "./endpoints/addTeachers";


app.post('/createTable', createTables);

app.post("/createStudent", addStudent);


app.post("/createTeacher", addTeachers);

app.post("/createClass", addClass);