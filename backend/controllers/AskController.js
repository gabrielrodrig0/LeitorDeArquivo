const {main} = require("../common/functions.js");

class AskController {

    static async ask(req,res)
    {
        const {pergunta, pdf} = req.body;

        console.log(pergunta, pdf)
      
         const resposta = await main(pdf, pergunta);
         return res.status(200).json(resposta.message.content);
    }

}


module.exports = AskController;