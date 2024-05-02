import express from "express";
const app = express();
import cors from "cors";
import CadastroPessoa from './CadastroPessoa.js';


app.use(express.json());
app.use(cors());

app.post('/cadastrarPessoa', (req, res) => {
    const { nome, idade, cpf } = req.body;
  
    //Criar uma nova instância de CadastroPessoa
    const novaPessoa = new CadastroPessoa(nome, idade, cpf);


    //Enviar resposta ao cliente
    res.status(201).json({
     mensagem: 'Pessoa cadastrada com sucesso',
     pessoa: novaPessoa,
     dadosRecebidos: { nome, idade, cpf}
     });

     //Outra  forma
     // res.status(201).json({ mensagem: 'Pessoa cadastrada com sucesso', pessoa: novaPessoa });
});

app.listen(3000, () => {
    console.log(`Servidor Express rodando na porta 3000`);

});