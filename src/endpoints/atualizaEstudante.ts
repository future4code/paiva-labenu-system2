import { Request, Response} from "express";
import { atualizarEstudante } from "../data/estudanteTurma";

export const atualizaEstudante = async(req: Request, res:Response):Promise<any> =>{
try {
    const {id, turma_id} = req.body

    if(!id || !turma_id){
     return res.status(422).send("Parametros Obrigatorios")
    }


    await atualizarEstudante(id, turma_id)
    
   res.status(200).send(`Estudante na turma ${turma_id}`)
} catch (error: any) {
    res.status(500).send({error: error.message || error.sqlMessage})
}
    
}