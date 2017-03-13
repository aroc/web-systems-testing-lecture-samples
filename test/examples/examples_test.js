// 'use strict';
//
// let assert = require('chai').assert;
//
// function getTrueValueAsync(callback) {
//   setTimeout(function(){
//     callback(true);
//   }, 1000);
// }
//
//
// describes('Examples Tests', function() {
//
//   describe('async fucntion', function(){
//
//     it('should be true', function(){
//       getTrueValueAsync(function(value){
//         assert.isFalse(value);
//       });
//     });
//
//   });
//
//   describe('#deepEqual()', function() {
//
//     it('should have the same deep objects', function() {
//       let obj1 = {
//         user: {
//           id: 1,
//           name: 'Eric',
//           project: {
//             name: 'A test project'
//           }
//         }
//       };
//       let obj2 = {
//         user: {
//           id: 1,
//           name: 'Eric',
//           project: {
//             name: 'Something else'
//           }
//         }
//       };
//       assert.deepEqual(obj1, obj2);
//     });
//   });
//
// });
