import { connection } from "../connection"

export const createTeacher = async (
    id: number, 
    name: string, 
    email: string, 
    birth_date: string, 
    
    ): Promise<void> => {
        await connection.raw(`
        INSERT INTO teacher_labenu 
        (id, name, email, birth_date, class_id)
        VALUES ('${id}', '${name}', '${email}', '${birth_date}', '1')
        `
                
        );
     }