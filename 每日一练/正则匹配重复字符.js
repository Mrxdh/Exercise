var reg = /([a-zA-Z0-9])\1+(?=\1{3})/g;//TODO:完成正则
var ret = "abbbbbeeee12222222223".replace(reg, "");
console.log(ret);  // abbbeeee12223
