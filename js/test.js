const obj = {};

const objPro = {
    a: 1
};

Object.setPrototypeOf(obj, objPro);

console.log(obj);

module.exports = function() {
    console.log('test')
}