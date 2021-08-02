import {Request, Response} from "express";
import { createTeacher } from './../data/createTeacher';


export const addTeachers = async (req:Request, res:Response) => {
    try {
        const {id, name, email, birth_date} = req.body
        await createTeacher(
            id,
            name,
            email,
            birth_date,
        

            );        
        

        res.status(200).send("Professor criado com sucesso!")
    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message);

    }
}