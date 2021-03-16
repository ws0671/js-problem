// 12. 삼각형 출력하기 - pattern 2
var result = '';
for(var i = 0 ; i < 5 ; i++){
  for(var j = 0 ; j < i ; j++){
    result += ' ';
  }
  for(var k = 5 ; k > i ; k--){
    result += '*';
  }
  result += '\n';
}
console.log(result);