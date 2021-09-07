import {Request, Response} from "express";
import { criarDocente } from '../data/criarDocente';


export const adicionarDocente = async (req: Request, res: Response):Promise<any> => {
    try {
        const {id, nome, email, data_nasc, turma_id} = req.body

        if(!id || !nome || !email || !data_nasc || !turma_id){
            return res.status(422).send({error: "Os parametros são obrigatorios"})
        }

        const novoDocente = {id, nome, email, data_nasc, turma_id}

        await criarDocente(novoDocente)

        res.status(201).send({message: "Docente criado!"})
    } catch (error:any) {
        res.send({error: error.message || error.sqlMessage})
    }
}