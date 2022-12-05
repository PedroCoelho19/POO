const fs = require("fs");

fs.readFile("./user.json", {encoding: "utf8"}, (erro, dados) => {
    if (erro) {
        console.log("Um erro aconteceu!");
    }else{
        var conteudo = JSON.parse(dados)

        conteudo.user = "Pedro Coelho"
        conteudo.user_id = 3
        conteudo.user_name = "Pedro Coelho"

        fs.writeFile("./user.json", JSON.stringify(conteudo), (erro) => {
            if (erro) {
                console.log("Um erro ao salvar!");
            }
        })

        console.log(conteudo)
    }
})