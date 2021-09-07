import criarEstudante from '../data/criarEstudante';
import { app } from '../app';
import {Request, Response} from "express";

export const adicionarEstudante = async (req:Request, res: Response):Promise<any> => {
    try {
        const {id,nome, email, data_nasc, turma_id} = req.body
        
        if(!id || !nome || !email || !data_nasc || !turma_id ){
         return   res.status(422).send({error: "preencha todos os campos!"})
        }

        const novoEstudante = {id, nome, email, data_nasc, turma_id}
        
        await criarEstudante(novoEstudante)
        
        res.status(201).send({message:`Estudante criado id: ${id}`})
    } catch (error: any) {
        res.send({error: error.message || error.sqlMessage})
    }
}

// export const addStudent = async (req:Request, res:Response) => {
//     try {
//         await createStudent(
//             req.body.id,
//             req.body.name,
//             req.body.email,
//             req.body.birth_date,
//             req.body.hobbies

//             );        
        

//         res.status(200).send("Estudante criado com sucesso!")
//     } catch (error) {
//         res.status(400).send(error.sqlMessage || error.message);

//     }
// }
