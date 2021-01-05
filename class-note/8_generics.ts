// # 일반적인 함수
// function logText(text) {
//   console.log(text);
//   return text;  
// }

// logText(10);  // number 10
// logText('hi');  // string hi
// logText(true);  // boolean true
// 타입을 지정하지 않았기 때문에 타입을 구분하지 않고 받음




// # 제네릭 사용시
// function genericLogText<T>(text: T): T {
//   console.log(text);
//   return text;
// }
// // 함수를 호출하는 시점에서 타입을 넘겨줌으로써 사용
// genericLogText<string>('하이');





// # 타입별 함수를 각각 정의하는 방법
// function logText(text: string) {
//   console.log(text);
//   // text.split('').reverse().join('');
//   return text;  
// }

// // number type을 받기 위한 새로운 함수
// function logNumber(num: number) {
//   console.log(num);
//   return num;  
// }
// 단순히 위의 코드에서 타입만 다를 뿐인 코드를 중복해서 생성해나가는 것은 
// 유지보수 측면에서 좋지 않음

// logText('a');
// // logText(10);
// logNumber(10);





// # union Type을 통한 선언 방법
// function logText(text: string | number) {
//   console.log(text);
//   return text;  
// }

// // Union Type을 통해 둘 다 받게 함
// // 문제점
// // 1. 하지만 함수 내에서 string과 number 공통인 method, property에 대해서만 자동완성이 가능해짐. 
// // 2. ↓

// logText('a');
// const b = logText('b');
// // b.split('') // Error! b변수는 'b'를 받았지만 완벽히 string으로 추론되지 않고
// // string | number 타입이기 때문에 split을 사용하지 못함

// logText(10);




// # 제네릭 사용
// 어떤 타입을 받을지, 받은 타입을 인자의 타입으로도 쓰고, 리턴할 때도 쓰겠다
function logText<T>(text: T): T {
  console.log(text);
  return text;  
}
const strLog = logText<string>('abc');
strLog.split(''); // string의 split 메소드 사용 가능

logText<boolean>(true);

