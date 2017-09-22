let errorSeverity = {
    EvalError: 1,
    RangeError: 1,
    ReferenceError: 2,
    SyntaxError: 1,
    TypeError: 1,
    URIError: 2,
};

module.exports = {
    lightError: (err) => {
        return {
            timestamp: new Date(),
            message: err.message,
            file: err.file,
            position: err.column,
            name: err.name,
            severity: errorSeverity[err.name],
        };
    },
    heavyError: (err) => {
        return {
            devMessage: 'You really goofed this time',
            timestamp: new Date(),
            message: err.message,
            file: err.file,
            position: err.column,
            name: err.name,
            severity: errorSeverity[err.name],
        };
    },
};