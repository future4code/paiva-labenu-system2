import {app} from "./app"
import { addClass } from "./endpoints/addClass";
import { addStudent } from "./endpoints/addStudent"
import { addTeachers } from "./endpoints/addTeachers";


app.post("/createStudent", addStudent);


app.post("/createTeacher", addTeachers);

app.post("/createClass", addClass);