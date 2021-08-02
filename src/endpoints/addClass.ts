import {Request, Response} from "express";
import { createClass } from '../data/createClass';



export const addClass = async (req:Request, res:Response): Promise<void> => {
    try {

        const {name, start_date, end_date, module} = req.body
        await createClass(
            name,
            start_date,
            end_date,
            module
            );        
        

        res.status(200).send("Classe criada com sucesso!")
    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message);

    }
}