export type estudante = {
    id: string
    nome: string
    email: string
    data_nasc: string
    turma_id: string
}

export type docente = {
    id: string
    nome: string
    email: string
    data_nasc: string
    turma_id: string
}

export type turma = {
    id: string,
    nome: string
    data_inicio: string
    data_final: string
    modulo: string
    tipo: TIPO_TURMA
}

export type especialidade = {
    id: string,
    especialidade: ESPECIALIDADE
}

export type passatempo = {
    id: string
    passatempo: string
}


export enum TIPO_TURMA {
    INTEGRAL = "integral",
    NOTURNA = "noturna"
}

export enum ESPECIALIDADE {
    REACT = 'React',
    REDUX = "Redux",
    CSS = "CSS",
    TESTES = "Testes",
    TYPESCRIPT = "Typescript",
    POO = "POO",
    BACKEND = "Backend"
}