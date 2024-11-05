const express = require("express");
const cors = require("cors");

const app = express();

const port = 3001;

app.use(express.json());

app.use(cors());

app.get("/converter/:tipo/:valor", (req, res) => {
    const tipo = (req.params.tipo);
    const valor = (req.params.valor);
    let valorConvertido = null;

    if(tipo == 'BD'){
        valorConvertido = binarioDecimal(valor);
    }
    else if(tipo == 'BO'){
        valorConvertido = binarioOctal(valor);
    }
    else if(tipo == 'BH'){
        valorConvertido = binarioHexadecimal(valor);
    }

    if (valorConvertido){
        res.json({valorConvertido});
        console.log(valorConvertido)
    }
    else {
        res.status(404).json({ message: "Erro na conversão dos valores." });
    }
});

function binarioDecimal(valor) {
    return parseInt(valor, 2);
}

function binarioOctal(valor) {
    return binarioDecimal(valor).toString(8); 
}

function binarioHexadecimal(valor) {
    return binarioDecimal(valor).toString(16).toUpperCase(); 
}
 
app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
});