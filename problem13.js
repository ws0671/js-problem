// 13. 삼각형 출력하기 - pattern 3
var result = '';
for(var i = 0 ; i < 5 ; i++){
  for(var j = 5 ; j > i ; j--){
    result += '*';
  }
  result += '\n';
}
console.log(result);