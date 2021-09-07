import {Request, Response} from "express";
import {  criarDocente } from '../data/criarDocente';

export const adicionarDocente = async(req:Request, res:Response):Promise<any> =>{
    try {
        const {id,nome,email, data_nasc, turma_id} = req.body

        if(!id || !nome || !email || !data_nasc  || !turma_id){
          return  res.status(422).send({error: "Os parametros são obrigatórios"})
        }

        const novoDocente = {id, nome, email, data_nasc, turma_id}

        await criarDocente(novoDocente)

        res.status(201).send({message: "Docente criado!"})
    } catch (error: any) {
        res.send({error: error.message || error.sqlMessage})
    }
}

// export const addTeachers = async (req:Request, res:Response) => {
//     try {
//         await createTeacher(
//             req.body.id,
//             req.body.name,
//             req.body.email,
//             req.body.birth_date,
        

//             );        
        

//         res.status(200).send("Professor criado com sucesso!")
//     } catch (error) {
//         res.status(400).send(error.sqlMessage || error.message);

//     }
// }