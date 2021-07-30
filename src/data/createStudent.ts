import { connection } from "../connection"

export const createStudent = async (
  
    name: string,
    email: string,
    birth_date: Date,
  
): Promise<void> => {
    await connection('student_labenu').insert({
        id: 1,
        name,
        email,
        birth_date,
        class_id: '1'
     
    })
}