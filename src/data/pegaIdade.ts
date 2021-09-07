import { connection } from "../connection"

export const pegaIdade = async(id:string):Promise<any> => {
    const result = await connection.raw(`
        SELECT nome, ROUND (DATEDIFF("2021-09-07", data_nasc) /365) AS idade
        FROM estudante
        WHERE id = ${id}
    `)
    return result[0][0]
}