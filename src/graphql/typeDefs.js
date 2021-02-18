let typedefs = `
type A{
    nombre: String
}

type R{
        pregunta: String,
        rc: String,
        r1: String,
        r2: String
}

type Query {
    a: [A]
},

type Mutation {
    pregunta(
        pregunta: String,
        rc: String,
        r1: String,
        r2: String,

    ): R
}
`

module.exports = typedefs