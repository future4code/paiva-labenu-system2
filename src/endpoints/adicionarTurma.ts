import { Request, Response} from "express";
import {criarTurma } from '../data/criarTurma';
import { turma } from "../types";
import {TIPO_TURMA} from "../types"



export const adicionarTurma = async(
    req: Request, 
    res: Response
    ):Promise<any> => {
        try {
            let {id, 
                nome, 
                data_inicio, 
                data_final,
                modulo, 
                tipo
                } = req.body

           if(!id || !nome || ! data_inicio || !data_final || !modulo || !tipo){
             return  res.status(422).send("Preencha todos os campos")
           }
           if(Number(modulo) <0 || Number(modulo)>7){
             return  res.status(422).send("Módulo inválido")
           }
           
         
           if(tipo !== TIPO_TURMA.INTEGRAL && tipo !== TIPO_TURMA.NOTURNA){
              return res.status(422).send("A turma tem que ser integral ou noturna")
           }
           
           if (tipo === TIPO_TURMA.NOTURNA){
            nome = nome + "-na-night"
           }
        
           const novaTurma: turma = {id, nome, data_inicio, data_final, modulo, tipo}

           await criarTurma(novaTurma)
           res.status(201).send({message: `Turma criada id = ${id}`})
           
        } catch (error:any) {
           
            res.send({error: error.message || error.sqlMessage})
        }
    }

// export const addClass = async (req:Request, res:Response) => {
//     try {
//         await createClass(
//             req.body.id,
//             req.body.name,
//             req.body.start_date,
//             req.body.end_date
            
//             );        
        

//         res.status(200).send("Classe criada com sucesso!")
//     } catch (error) {
//         res.status(400).send(error.sqlMessage || error.message);

//     }
// }