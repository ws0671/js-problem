// 16. 역정삼각형 출력하기
var result = '';
for(var i = 0 ; i < 5 ; i++){
  for(var k = 0 ; k < i ; k++){
    result += ' ';
  }
  for(var j = 9; j > 2*i; j--){
    result += '*';
  }
  result += '\n';
}
console.log(result);