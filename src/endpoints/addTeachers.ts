import {Request, Response} from "express";
import { createTeacher } from './../data/createTeacher';


export const addTeachers = async (req:Request, res:Response) => {
    try {
        await createTeacher(
            req.body.id,
            req.body.name,
            req.body.email,
            req.body.birth_date,
        

            );        
        

        res.status(200).send("Professor criado com sucesso!")
    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message);

    }
}