'use strict';


function ErrorHandler(error, reason, severity){
  this.timestamp = new Date();
  this.message = error.message;
  this.file = error.file;
  this.position = error.column;
  this.stack = error.stack;
  if (reason) {
    this.reason = reason;
  } else {
    this.reason = 'No additional reason given';
  }
  if (severity) {
    this.severity = severity;
  } else {
    this.severity = 0;
  }
  this.errorLogging()
}

ErrorHandler.loggingSetting = 'full'; //cutoff for logging, by default full

ErrorHandler.prototype.errorLogging = function() {
  let error = this;
  if (ErrorHandler.loggingSetting && ErrorHandler.loggingSetting === 'full') {
    console.error(
      `We hit an "${error.message}" error in file ${error.file}. The developer made this note: ${error.reason}.
        Stack trace: ${error.stack}, in ${error.position}
      `);
  } else if (ErrorHandler.loggingSetting && ErrorHandler.loggingSetting === 'simple') {
    console.error(`
        We hit an "${error.message}" error in file ${error.file}. The developer made this note: ${error.reason}.
      `);
  } else {
    console.error(`Error in file ${error.file}. The developer made this note: ${error.reason}`);
  }
};

module.exports = ErrorHandler;
