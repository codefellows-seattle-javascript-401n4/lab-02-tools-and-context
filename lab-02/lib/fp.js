let values = [1,2,3];
let values2 = [4,5,6];
let badValues = ['string', 2, 3];
let cb = n => n * 2;


let testType = (test, val) => {
    let isKosher = true;
    if (val[1]) {
        val.forEach(function(element) {
            if (typeof element !== test) {
                isKosher = false;
            }
        }, this);
    } else {
        if (typeof val !== test) isKosher = false;
    }  
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
    callFilter: (values, cb) => {
        let returnValue = null;
        (testType('number', values)) ? 
            returnValue = Array.prototype.filter.call(values, cb) :
            returnValue = null;
        return returnValue;
    },
    bindFilter: function(bool, cb) {
        let returnValue = null;
        
        if (bool) {
            (testType('number', this.values) === true) ?
                returnValue = Array.prototype.map.call(this.values, cb) :
                returnValue = null;
        } else {
            (testType('number', this.badValues) === true) ?
                returnValue = Array.prototype.map.call(this.values, cb) :
                returnValue = null;
        } 
            
        return returnValue;
    }.bind({values: values, badValues: badValues}),
    applyFilter: (values, cb) => {
        let returnValue = null;
        if ((Array.isArray(values)) && testType('number', values)) returnValue = Array.prototype.filter.apply(values, cb);
        return returnValue;        
    },
    callReduce: (values, cb) => {
        let returnValue = null;
        ((Array.isArray(values)) && testType('number', values)) ? returnValue = 
            Array.prototype.reduce.call(values, cb) : 
            returnValue = null;

        return returnValue;
    },
    bindReduce: function(bool, cb){
        let returnValue = null;
        
        if (bool) {
            (testType('number', this.values) === true) ?
                returnValue = Array.prototype.reduce.call(this.values, cb) :
                returnValue = null;
        } else {
            (testType('number', this.badValues) === true) ?
                returnValue = Array.prototype.reduce.call(this.values, cb) :
                returnValue = null;
        } 
            
        return returnValue;
    }.bind({values: values, badValues: badValues}),
    applyReduce: (values, cb) => {
        let returnValue = null;
        if ((Array.isArray(values)) && testType('number', values)) returnValue = Array.prototype.reduce.apply(values, cb);
        return returnValue;

    },
    callConcat: (values1, values2) => {
        let returnValue = null;
        ((Array.isArray(values1)) && (Array.isArray(values2))) ? returnValue = Array.prototype.concat.call(values1, values2) : 
            returnValue = null;
        return returnValue;
    },
    bindConcat: function(bool){
        let returnValue = null;

        if (bool) {
            ((Array.isArray(this.values)) && (Array.isArray(this.values2) && testType('number', this.values) && testType('number', this.values2))) ? returnValue = Array.prototype.concat.apply(this.values, this.values2) : 
                returnValue = null;
        } else {
            ((Array.isArray(this.values)) && (Array.isArray(this.badValues) && testType('number', this.values) && testType('number', this.badValues))) ? returnValue = Array.prototype.concat.apply(this.values, this.values2) : 
                returnValue = null;
        }

        return returnValue;
    }.bind({values: values, badValues: badValues, values2: values2}),
    applyConcat: (values1, values2) => {
        let returnValue = null;
        ((Array.isArray(values1)) && (Array.isArray(values2))) ? returnValue = Array.prototype.concat.apply(values1, values2) : 
            returnValue = null;
        return returnValue;
    },
    callSplice: (values, index, pos) => {
        let returnValue = null;
        (Array.isArray(values)) ?
            returnValue = Array.prototype.splice.call(values, index, pos): 
            returnValue = null;
        return returnValue;
    },
    bindSplice: function(index, pos){
        let returnValue = null;


        ((testType('number', index)) && (testType('number', pos))) ? 
            returnValue = Array.prototype.splice.call(this.values, index, pos) : 
            returnValue = null;

        return returnValue;
    }.bind({values: values}),
    applySplice: (values, index, pos) => {
        let returnValue = null;
        (Array.isArray(values)) ?
            returnValue = Array.prototype.splice.apply(values, index, pos): 
            returnValue = null;
        return returnValue;
    },
};