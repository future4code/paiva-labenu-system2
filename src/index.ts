import {app} from "./app"
import { addStudent } from "./endpoints/addStudent"

app.post("/createStudent", addStudent);