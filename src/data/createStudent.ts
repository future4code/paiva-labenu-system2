import { connection } from "../connection"

export const createStudent = async (
    id: number, 
    name: string, 
    email: string, 
    birth_date: string, 
    hobbies: string
    ): Promise<void> => {
        await connection.raw(`
        INSERT INTO student_labenu 
        (id, name, email, birth_date, hobbies)
        VALUES ('${id}', '${name}', '${email}', '${birth_date}', '${hobbies}')
        `
                
        )
     }