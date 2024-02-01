const express = require("express");
const multer = require('multer');
const pdfParse = require('pdf-parse');
const cors = require("cors");
const app = express();
const {main} = require("./common/functions.js")

app.use(cors());
app.use(express.json());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/ask', async (req, res)=>{
  const {pergunta, pdf} = req.body;

  console.log(pergunta, pdf)

   const resposta = await main(pdf, pergunta);
   return res.status(200).json(resposta.message.content);

})

app.post('/fileCatch', upload.single('arquivo'), async (req, res) => {
  try {
    const pdfBuffer = req.file.buffer;
    const data = await pdfParse(pdfBuffer);
    const textoDoPDF = data.text;

    console.log('Conteúdo do PDF:', textoDoPDF);

    return res.json(textoDoPDF);

  } catch (error) {
    console.error('Erro ao processar o arquivo:', error);
    return res.status(500).json({ error: 'Erro ao processar o arquivo' });
  }
});

app.listen(3000, () => {
  console.log("Servidor aberto na porta 3000");
});
