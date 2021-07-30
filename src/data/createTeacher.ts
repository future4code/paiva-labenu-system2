import { connection } from "../connection"

export const createTeacher = async (
    id: number, 
    name: string, 
    email: string, 
    birth_date: string, 
    
    ): Promise<void> => {
        await connection.raw(`
        INSERT INTO teachers_labenu 
        (id, name, email, birth_date)
        VALUES ('${id}', '${name}', '${email}', '${birth_date}')
        `
                
        )
     }