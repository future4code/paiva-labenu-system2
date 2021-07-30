import { connection } from "../connection"

export const createClass = async (
    id: number, 
    name: string, 
    start_date: string, 
    end_date: string
    ): Promise<void> => {
        await connection.raw(`
        INSERT INTO class_labenu 
        (id, name, start_date, end_date)
        VALUES ('${id}', '${name}', '${start_date}', '${end_date}')
        `
                
        )
     }