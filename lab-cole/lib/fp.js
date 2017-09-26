'use script';

const fp = module.exports = {};


//Map functions with Call, Bind, and Apply
function mapCall(array, cb) {
    return Array.prototype.map.call(array, cb);
};

    //TODO: syntax from MDN doesn't make sense...?
function mapBind(array, cb) {
    return Array.prototype.map.call(this.array, this.cb);
}.bind(thisArray[array[cb]]);

function mapApply(array, cb) {
    return cb ? Array.prototype.map.apply(array, cb) : null;
};


//Filter functions with Call, Bind, and Apply
function filterCall(array, cb) {
    return Array.prototype.filter.call(array, cb);
};

    //TODO: syntax from MDN doesn't make sense...?
function filterBind(array, cb) {
    return Array.prototype.filter.call(this.array, this.cb);
}.bind(thisArray[array[cb]]);

function filterApply(array, cb) {
    return cb ? Array.prototype.filter.apply(array, cb) : null;
};


//Reduce functions with Call, Bind, and Apply
function reduceCall(array, cb) {
    return Array.prototype.reduce.call(array, cb);
};

    //TODO: syntax from MDN doesn't make sense...?
function reduce(array, cb) {
    return Array.prototype.reduce.call(this.array, this.cb);
}.bind(thisArray[array[cb]]);

function reduceApply(array, cb) {
    return cb ? Array.prototype.reduce.apply(array, cb) : null;    
};


//Concat functions with Call, Bind, and Apply
function concatCall(array, cb) {
    return Array.prototype.cancat.call(array, cb);
};

    //TODO: syntax from MDN doesn't make sense...?
function concatBind(array, cb) {
    return Array.prototype.concat.call(this.array, this.cb);
}.bind(thisArray[array[cb]]);

function concatApply(array, cb) {
    return cb ? Array.prototype.concat.apply(array, cb) : null;
};


//Splice functions with Call, Bind, and Apply
function spliceCall(array, cb) {
    return Array.prototype.splice.call(array, cb);
};

    //TODO: syntax from MDN doesn't make sense...?
function spliceBind(array, cb) {
    return Array.prototype.splice.call(this.array, this.cb);
}.bind(thisArray[array[cb]]);

function spliceApply(array, cb) {
    return cb ? Array.prototype.splice.apply(array, cb) : null;
};