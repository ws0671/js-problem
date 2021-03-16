// 10. 두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하시오.

for(var x = 1 ; x <= 6; x++){
  for(var y = 1 ; y <=6 ; y++){
    if(x+y===6){
      console.log(x,y);
    }
  }
}