const {Router} = require("express");
const router = Router();
const fileController = require("../controllers/FileController.js");
const askController = require("../controllers/AskController.js");
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router
.post("/ask", askController.ask)
.post("/fileCatch", upload.single('arquivo'),fileController.catchFile)


module.exports = router;