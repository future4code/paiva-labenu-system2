import { Request, Response } from "express"
import { atualizaDocente } from "../data/docenteTurma"
import { atualizarEstudante } from "../data/estudanteTurma"

export const turmaDocente = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id, turma_id } = req.body

        if (!id || !turma_id) {
            return res.status(422).send({ message: "Os parametros sao obrigatorios." })
        }

        await atualizaDocente(id, turma_id)
        res.status(201).send({ message: `Docente na turma ${turma_id}` })
    } catch (error: any) {
        res.send({ error: error.message || error.sqlMessage })
    }
}