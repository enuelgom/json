//const admin = require("../db/connection")
var fs = require('fs');
const resolvers = {
    Mutation: {
        async pregunta(root,args,context){
            
                var obj = {
                    preguntas:[]
                 };
                fs.readFile('preguntas.json', 'utf8', function readFileCallback(err, data){
                    console.log("activo");
                    if (err){
                    console.log(err);
                        
                    } else {
                    try {
                        obj = JSON.parse(data); //now it an object
                            obj.preguntas.push({
                        pregunta: args["pregunta"], respuestas:{
                            rc:{
                                r: args["rc"],
                                d: args["Drc"]
                            },
                            r1:{
                                r: args["r1"],
                                d: args["Dr1"]
                            },
                            r2:{
                                r: args["r2"],
                                d: args["Dr2"]
                            }
                        }});
                        var json = JSON.stringify(obj);
   
                        fs.writeFile('preguntas.json', json, 'utf8', function(err) {
                            if (err) throw err;
                            console.log('complete');
                        });
                        console.log(obj)
                        return "hecho"; 
                    } catch (error) {
                        obj.preguntas.push({
                        pregunta: args["pregunta"], respuestas:{
                            rc:{
                                r: args["rc"],
                                d: args["Drc"]
                            },
                            r1:{
                                r: args["r1"],
                                d: args["Dr1"]
                            },
                            r2:{
                                r: args["r2"],
                                d: args["Dr2"]
                            }
                        }});
                        var json = JSON.stringify(obj);
   
                        fs.writeFile('preguntas.json', json, 'utf8', function(err) {
                            if (err) throw err;
                            console.log('complete');
                        });
                        console.log(obj)
                    }    
                    return "hecho";
                }});
        }   
    }
}

module.exports = resolvers