class DataMiner {
  // Template method
  mine(path) {
    const file = this.openFile(path);
    const rawData = this.extractData(file);
    const data = this.parseData(rawData);
    const analysis =this.analyzeData(data);
    this.sendReport(analysis);
    this.closeFile(file);
  }

  // Steps
  openFile(path) {}
  extractData(file) {}
  parseData(rawData) {}

  // Steps with default implementation
  analyzeData(data) {}
  sendReport(analysis) {}
  
  closeFile(file) {}
}

class PDFDataMiner extends DataMiner {
  // PDF related overrides
  openFile(path) {}
  extractData(file) {}
  parseData(rawData) {}
  closeFile(file) {}
}