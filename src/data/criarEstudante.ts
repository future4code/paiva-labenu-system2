import { connection } from "../connection"
import { estudante } from "../types"
//student_labenu 

const criarEstudante = async(novoEstudante: estudante):Promise<any>=>{
    await connection ('estudante')
    .insert(novoEstudante)
}
export default criarEstudante

// export const createStudent = async (
//     id: number, 
//     name: string, 
//     email: string, 
//     birth_date: string, 
//     hobbies: string
//     ): Promise<void> => {
//         await connection.raw(`
//         INSERT INTO student_labenu 
//         (id, name, email, birth_date, hobbies)
//         VALUES ('${id}', '${name}', '${email}', '${birth_date}', '${hobbies}')
//         `
                
//         )
//      }