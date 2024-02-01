const pdfParse = require('pdf-parse');

class FileController {

    static async catchFile(req,res)
    {
        try {
            const pdfBuffer = req.file.buffer;
            const data = await pdfParse(pdfBuffer);
            const textoDoPDF = data.text;
        
            console.log('Conteúdo do PDF:', textoDoPDF);
        
            return res.status(200).json(textoDoPDF);
        
          } catch (error) {
            console.error('Erro ao processar o arquivo:', error);
            return res.status(500).json({ error: 'Erro ao processar o arquivo' });
          }
    }
}


module.exports = FileController;