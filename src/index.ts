import {app} from "./app"
import { adicionarTurma } from "./endpoints/adicionarTurma";
import { adicionarEstudante } from "./endpoints/adicionarEstudante"
import {  adicionarDocente } from "./endpoints/adicionarDocente";
import { atualizaEstudante } from "./endpoints/atualizaEstudante";
import { turmaDocente } from "./endpoints/atualizaDocente";
import { idadeEstudante } from "./endpoints/idadeEstudante";



app.post("/criarTurma", adicionarTurma);

app.post("/criarEstudante", adicionarEstudante)

app.post("/criarDocente", adicionarDocente)

app.put("/putEstudante", atualizaEstudante)

app.put("/putDocente", turmaDocente )

app.get('/estudante/:id', idadeEstudante)