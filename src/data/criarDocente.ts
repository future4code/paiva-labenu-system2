import { connection } from "../connection"
import { docente } from "../types"
//teachers_labenu 

export const criarDocente = async(novoDocente:docente):Promise<any> =>{
    await connection('docente')
    .insert(novoDocente)
}
// export const createTeacher = async (
//     id: number, 
//     name: string, 
//     email: string, 
//     birth_date: string, 
    
//     ): Promise<void> => {
//         await connection.raw(`
//         INSERT INTO teachers_labenu 
//         (id, name, email, birth_date)
//         VALUES ('${id}', '${name}', '${email}', '${birth_date}')
//         `
                
//         )
//      }