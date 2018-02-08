import React from 'react';
import axios from 'axios';

import BASEURL from '../config';

//function for get api call
export function _getCall(url, query){
	var headers = {
		'Content-Type': 'application/json',
		'Authorization': ''
	}
	return  axios.get(BASEURL + url, {params: query, headers: headers})
			.then(response => response)
			.catch(error => '')
}

//function for post api call
export function _postCall(url, data){
	var headers = {
		'Content-Type': 'application/json',
		'Authorization': ''
	}
	return  axios.get(BASEURL + url, data, headers)
			.then(response => response)
			.catch(error => '')
}

export function _putCall(){

}

export function _deleteCall(){
	
}

