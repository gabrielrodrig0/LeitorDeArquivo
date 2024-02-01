const OpenAI = require("openai");
const openai = new OpenAI();

class functions {

    static async main(texto, pergunta) {
        const completion = await openai.chat.completions.create({
          messages: [{ role: "user", content: `${pergunta} \n ${texto}` }],
          model: "gpt-3.5-turbo-16k",
        });
      
        return completion.choices[0];
      } 
}

module.exports = functions