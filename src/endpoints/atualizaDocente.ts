import { Request, Response} from "express";
import { atualizaDocente } from "../data/docenteTurma";


export const turmaDocente = async(req: Request, res:Response):Promise<any> =>{
try {
    const {id, turma_id} = req.body

    if(!id || !turma_id){
     return res.status(422).send("Parametros Obrigatorios")
    }


    await atualizaDocente(id, turma_id)
    
   res.status(200).send(`Docente na turma ${turma_id}`)
} catch (error: any) {
    res.status(500).send({error: error.message || error.sqlMessage})
}
    
}