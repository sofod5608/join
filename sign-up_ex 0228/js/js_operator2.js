'use strict';
{
    // 3항 연산자 ? : // 조건 2개
    let num1=10;
    
    // num1이 10보다 크면 1 아니면 0
    const rs1 = num1>10 ? 1 : 0
    console.log(`rs1 -> ${rs1}`)
    
    
    // num1이 10보다 크면 1 아니면 0
    if(num1>10){
        console.log(1);
    }else{
        console.log(0);
    }
    
    
    let num2=10;
    // 삼항 연산자
    const rs2 = num2===10 ? 1 : 0;
    console.log(`rs2 -> ${rs2}`)
    // if~else 사용
    if(num2===10){
        console.log(1);
    }else{
        console.log(0);
    }
}

console.clear();

/*
증감연산 ++ , —    // → 반복문과 같이 많이 사용

i++   // 선처리 후증가       1증가

++i   // 선증가 후처리       

i—    // 선처리 후감소        1감소

—i    // 선감소 후처리
*/

let i=10;

console.log(i++); // 10
console.log(i); // 11
console.log(++i); // 12
console.log(i); // 12

console.log(i--); // 12
console.log(i); // 11
console.log(--i); // 10
console.log(i); // 10

console.clear();


// for문

// for(초기화; 조건식; 증감식){

//     // 조건식이 true일 떄만 실행
//     // 실행문, 명령문, 처리문, 구현부

// }

// 0부터 9까지 콘솔에 출력

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)
// console.log("====================")
//1~100
// for(let i=0;i<100;i++){
//     console.log(i+1)
// }

const boxImgs=document.querySelectorAll('.imgBox>img')

// 이미지 반복
for(let i=0;i<5;i++){
   boxImgs[i].setAttribute('src',`img/${i}.jpg`);
}

// boxImgs[0].setAttribute('src','img/0.jpg')
// boxImgs[1].setAttribute('src','img/1.jpg')
// boxImgs[2].setAttribute('src','img/2.jpg')
// boxImgs[3].setAttribute('src','img/3.jpg')
// boxImgs[4].setAttribute('src','img/4.jpg')

for(let i=0;i<5;i++){
    // 콘솔에 url(img/0.jpg) no-repeat 50%/cover
    console.log(`url(img/${i}.jpg) no-repeat 50%/cover`);
}