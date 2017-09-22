let values = [1,2,3];
let badValues = ['string', 2, 3];
let cb = n => n * 2;

let testType = (test, values) => {
    let isKosher = true;
    values.forEach(function(element) {
        if (typeof element !== test) {
            isKosher = false;
        }
    }, this);   
    return isKosher;
};


module.exports = {
    callMap: (values, cb) => {
        let returnValue = null;
        (testType('number', values) === true) ? 
            returnValue = Array.prototype.map.call(values, cb) :
            returnValue = null;
        return returnValue;
    },
    bindMap: function(bool) {
        let returnValue = null;

        if (bool) {
            (testType('number', this.values) === true) ?
                returnValue = Array.prototype.map.call(this.values, this.cb) :
                returnValue = null;
        } else {
            (testType('number', this.badValues) === true) ?
                returnValue = Array.prototype.map.call(this.values, this.cb) :
                returnValue = null;
        } 
    
        return returnValue;

    }.bind({values: values, cb: cb, badValues: badValues}),
    applyMap: (values, cb) => {
        let returnValue = null;
        if ((Array.isArray(values)) && testType('number', values)) returnValue = Array.prototype.map.apply(values, cb);
        return returnValue;
    },
    callFilter: () => {},
    bindFilter: () => {},
    applyFilter: () => {},
    callReduce: () => {},
    bindReduce: () => {},
    applyReduce: () => {},
    callConcat: () => {},
    bindConcat: () => {},
    applyConcat: () => {},
    callSplice: () => {},
    bindSplice: () => {},
    applySplice: () => {},
};