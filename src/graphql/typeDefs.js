let typedefs = `
type Query {
    a: String
}

type Mutation {
    pregunta(
        pregunta: String,
        rc: String,
        Drc: String,
        r1: String,
        Dr1: String,
        r2: String,
        Dr2: String,
    ): String
}
`

module.exports = typedefs