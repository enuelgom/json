let typedefs = `
type Query {
    a: String
}

type Mutation {
    pregunta(
        tema: String,
        pregunta: String,
        rc: String,
        drc: String,
        r1: String,
        dr1: String,
        r2: String,
        dr2: String,
        dificultad: String
    ): String

    vf(
        tema: String,
        pregunta: String,
        rc: String,
        dificultad: String
        descripcion: String
    ): String
}
`

module.exports = typedefs