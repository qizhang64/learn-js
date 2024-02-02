// Define a JavaScript function called logMsg() that can be used to log an error message for any object that contains the property errMsg. 


const logger = {
    logMsg: function() {
        if (this.errMsg) {
            console.log(`Error Message from: ${this.errMsg}`);
        }
    }
}


const logObj1 = {
    errMsg: "Error 1"
}

const logObj2 = {
    errMsg: "Error 2"
}


logger.logMsg.call(logObj1);
logger.logMsg.call(logObj2);