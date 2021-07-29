import { createStudent } from '../data/createStudent';
import { app } from './../app';
import {Request, Response} from "express";



export const addStudent = async (req:Request, res:Response) => {
    try {
        await createStudent(
            req.body.id,
            req.body.name,
            req.body.email,
            req.body.birth_date,
            req.body.hobbies

            );        
        

        res.status(200).send("Estudante criado com sucesso!")
    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message);

    }
}
