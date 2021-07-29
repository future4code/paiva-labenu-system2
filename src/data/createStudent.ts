import { connection } from "../connection"

export const createStudent = async (
    id: number, 
    name: string, 
    email: string, 
    birth_date: string, 
    hobbies: string
    ): Promise<void> => {
        await connection.insert({
            id: id, 
            name: name, 
            email: email, 
            birth_date: birth_date, 
            hobbies: hobbies,
        }
            
        ).into("student_labenu")
     }