export function _setKey(key,value){
	localStorage.setItem(key, value);
}

export function _getKey(key){
	let value = localStorage.getItem(key);
	return value;
}

export function _removeKey(key){
	localStorage.removeItem(key);
}

export function _clearStorage(){
	localStorage.clear();
}