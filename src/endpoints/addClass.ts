import {Request, Response} from "express";
import { createClass } from '../data/createClass';



export const addClass = async (req:Request, res:Response) => {
    try {
        await createClass(
            req.body.id,
            req.body.name,
            req.body.start_date,
            req.body.end_date
            
            );        
        

        res.status(200).send("Classe criada com sucesso!")
    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message);

    }
}