import { Request, Response} from "express";
import { pegaIdade } from "../data/pegaIdade";

export const idadeEstudante = async(req:Request, res: Response):Promise<any> =>{
    try {
        const id = req.params.id

        const result = await pegaIdade(id)

        if(result.length === 0){
            res.status(404).send("Insira um id válido")
        }

        res.status(200).send(result)

    } catch (error:any) {
        res.send({error: error.message || error.sqlMessage})
    }
}