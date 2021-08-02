import { createStudent } from '../data/createStudent';
import { app } from './../app';
import {Request, Response} from "express";



export const addStudent = async (req:Request, res:Response) => {
    try {
        const {name, email, birth_date} = req.body
        await createStudent(
            name,
            email,
            birth_date,
        );        
        

        res.status(200).send("Estudante criado com sucesso!")
    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message);

    }
}
