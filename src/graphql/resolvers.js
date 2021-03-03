//const admin = require("../db/connection")
var fs = require('fs');
const { valueFromAST } = require('graphql');
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
                            tema: args["tema"],
                            dificultad: args["dificultad"],
                            pregunta: args["pregunta"], respuestas:{
                            rc:{
                                r: args["rc"],
                                d: args["drc"]
                            },
                            r1:{
                                r: args["r1"],
                                d: args["dr1"]
                            },
                            r2:{
                                r: args["r2"],
                                d: args["dr2"]
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
                            tema:args["tema"],
                            dificultad:args["dificultad"],
                            pregunta: args["pregunta"], respuestas:{
                            rc:{
                                r: args["rc"],
                                d: args["drc"]
                            },
                            r1:{
                                r: args["r1"],
                                d: args["dr1"]
                            },
                            r2:{
                                r: args["r2"],
                                d: args["dr2"]
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
        },
        
        async vf(root,args,context){
            var obj = {
                preguntas:[]
             };

            fs.readFile('VerdadFalso.json', 'utf8', function readFileCallback(err, data){
                console.log("activo");
                if (err){
                console.log(err);
                    
                } else {
                try {
                    obj = JSON.parse(data); //now it an object
                        obj.preguntas.push({
                        tema: args["tema"],
                        dificultad: args["dificultad"],
                        pregunta: args["pregunta"],
                        rc:args["rc"],
                        descripcion: args["descripcion"]
                    });
                    var json = JSON.stringify(obj);

                    fs.writeFile('VerdadFalso.json', json, 'utf8', function(err) {
                        if (err) throw err;
                        console.log('complete');
                    });
                    console.log(obj)
                    return "hecho"; 
                } catch (error) {
                    obj = JSON.parse(data); //now it an object
                        obj.preguntas.push({
                        tema: args["tema"],
                        dificultad: args["dificultad"],
                        pregunta: args["pregunta"],
                        rc:args["rc"],
                        descripcion: args["descripcion"]
                    });
                    var json = JSON.stringify(obj);

                    fs.writeFile('VerdadFalso.json.json', json, 'utf8', function(err) {
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
