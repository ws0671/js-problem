// 11. 삼각형 출력하기 - pattern 1
var result = '';
for(var line = 1 ; line < 6 ; line++){
  for(var star = 1 ; star <= line ; star++){
    result += '*';
  }
  result += '\n';
}
console.log(result);