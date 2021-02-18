//const admin = require("../db/connection")
var fs = require('fs');
const resolvers = {
    Mutation: {
        async pregunta(root,args,context){
            try {
                var obj = {
                    preguntas:[]
                 };
                fs.readFile('preguntas.json', 'utf8', function readFileCallback(err, data){
                    if (err){
                        console.log(err);
                    } else {
                    obj = JSON.parse(data); //now it an object
                    
                    obj.preguntas.push({
                        pregunta: args["pregunta"], respuestas:{
                            rc:args["rc"],
                            r1:args["r1"],
                            r2:args["r2"],
                        }});
                    var json = JSON.stringify(obj);
   
                   fs.writeFile('preguntas.json', json, 'utf8', function(err) {
                       if (err) throw err;
                       console.log('complete');
                       });
                    console.log(obj)
                }});

            } catch (error) {
                return error;
            }

        }   
    }
}

module.exports = resolvers