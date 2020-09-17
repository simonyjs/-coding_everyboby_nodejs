function a() {
  console.log("A");
}

// 익명함수 처리 즉 이름이 없는 함수는 변수에 할당한다
var a = function () {
  console.log("A");
};

function slowfunc(callback) {
  callback();
}

slowfunc(a);
