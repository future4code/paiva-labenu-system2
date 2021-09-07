import { connection } from "../connection"

export const atualizaDocente = async(id: string, turma_id:string):Promise<any> =>{
    await connection('docente')
    .update({turma_id})
    .where({id})
}