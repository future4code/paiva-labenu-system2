import { connection } from "../connection"

export const atualizarEstudante = async(id: string, turma_id:string):Promise<any> =>{
    await connection('estudante')
    .update({turma_id})
    .where({id})
}