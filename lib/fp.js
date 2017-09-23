'use strict';

let fp = module.exports = {}

fp.map = {}
fp.filter = {}
fp.reduce = {}
fp.concat = {}
fp.splice = {}

function array_call(method, isArray){
	return function(array, callback){
		let params = callback;
		let exec;

		if (isArray){
			exec = Array.prototype[method].call(array, ...params);
		}
		else {
			exec = Array.prototype[method].call(array, params);
		}
		return exec;
	}
}

fp.map.call = array_call('map', false);
fp.filter.call = array_call('filter', false);
fp.reduce.call = array_call('reduce', false);
fp.concat.call = array_call('concat', false);
fp.splice.call = array_call('splice', true);

function array_apply(method, isArray){
	return function(array, callback){
		let params;

		if (isArray){
			params = callback;
		}
		else {
			params = [callback];
		}
		return Array.prototype[method].apply(array, params);
	}
}

fp.map.apply = array_call('map', false);
fp.filter.apply = array_call('filter', false);
fp.reduce.apply = array_call('reduce', false);
fp.concat.apply = array_call('concat', false);
fp.splice.apply = array_call('splice', true);

function array_bind(method, isArray){
	return function(array, callback){
		let params = callback;
		let exec;

		if (isArray){
			exec = Array.prototype[method].bind(array, ...params);
		}
		else {
			exec = Array.prototype[method].bind(array, params);
		}
		return exec;
	}
}

fp.map.bind = array_call('map', false);
fp.filter.bind = array_call('filter', false);
fp.reduce.bind = array_call('reduce', false);
fp.concat.bind = array_call('concat', false);
fp.splice.bind = array_call('splice', true);


