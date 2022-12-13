const Reader = require("./Reader");
const Writer = require("./Writer");
const Processor = require("./Processor");
const Table = require("./Table");
const HtmlParser = require("./HtlmParse");
const PDFWriter = require("./PDFWriter");

let leitor = new Reader();
let escrito = new Writer();

 
async function main() {
  const dados = await leitor.Read("./user.csv");
  const processo = Processor.Process(dados);
  const usuarios = new Table(processo);

  var html = await HtmlParser.Parse(usuarios)
  
  
  escrito.Write(Date.now() + ".html",html);
  PDFWriter.WriterPDF(Date.now() + ".PDF",html);
}


main();