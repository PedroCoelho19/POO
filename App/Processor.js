class Processor {
  static Process(data) {
    var linha = data.split("\r\n");
    var rows = [];

    linha.forEach((row) => {
      var arr = row.split(",");
      rows.push(arr);
    });
    return rows;
  }
}

 module.exports = Processor;
