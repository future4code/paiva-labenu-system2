import { connection } from "../connection"

export const createClass = async (
    name: string, 
    start_date: string, 
    end_date: string,
    module: number
    ): Promise<void> => {
        await connection ('class_labenu').insert ({
            id: 1,
            name,
            start_date,
            end_date,
            module
        })
        
        
    
     }