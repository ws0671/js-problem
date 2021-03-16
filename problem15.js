// 15. 정삼각형 출력하기
var result = '';
for(var i = 0 ; i < 5 ; i++){
  for(var k = 4 ; k > i ; k--){
    result += ' ';
  }
  for(var j = 0 ; j <= 2*i; j++){
    result += '*';
  }
  result += '\n';
}
console.log(result);