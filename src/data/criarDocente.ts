import { connection } from "../connection"
import { docente } from "../types"

export const criarDocente = async(novoDocente:docente):Promise<any> => {
    await connection("docente")
    .insert(novoDocente)
}