import {app} from "./app"
import { adicionarDocente } from "./endpoints/adicionarDocente";
import { adicionarEstudante } from "./endpoints/adicionarEstudante";
import { adicionarTurma } from "./endpoints/adicionarTurma";
import { turmaDocente } from "./endpoints/atualizaDocente";
import { atualizaEstudante } from "./endpoints/atualizaEstudante";
import { idadeEstudante } from "./endpoints/idadeEstudante";



app.post("/criarTurma", adicionarTurma);
app.post("/criarEstudante", adicionarEstudante);
app.post("/criarDocente", adicionarDocente);

app.put("/putEstudante", atualizaEstudante)
app.put("putDocente", turmaDocente)

app.get("/estudante/:id", idadeEstudante)