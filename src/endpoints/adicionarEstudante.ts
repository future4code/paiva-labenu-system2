import { criarEstudante } from '../data/criarEstudante';
import { app } from '../app';
import {Request, Response} from "express";

export const adicionarEstudante = async (req: Request, res: Response): Promise<any> => {
    try {
        const {id, nome, email, data_nasc, turma_id} = req.body

        if(!id || !nome || !email || !data_nasc || !turma_id){
            return res.status(422).send({error: "preencha todos os campos!"})
        }
        const novoEstudante = {id, nome, email, data_nasc, turma_id}
        await criarEstudante(novoEstudante)
        res.status(201).send({message: `Estudante criado id: ${id}`})
    } catch (error: any) {
        res.send({error: error.message || error. sqlMessage})
    }
}