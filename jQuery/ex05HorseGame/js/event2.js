console.log('js Enter!')
let move = 0; // 움직임 (전역변수)

// STEP 1. moveLeft라는 함수를 선언한다.
const moveLeft = () => {
    console.log('move left', move)

    if(move < 1200){
        move += 50
        $('#horse').css('right', move+'px')
    }
}
//       1-1) id가 horse인 말을 가져와서 
//       1-2) moveLeft함수를 호출할때마다 그 말을 왼쪽으로 50px씩 이동 
//       1-3) 말이 배경을 벗어나지 않도록 할 것 



// STEP 2. moveRight라는 함수를 선언한다.
const moveRight = () => {
    console.log('move right', move)
    if(move > 0){
        move -= 50
        $('#horse').css('right', move+'px')

    }
}
//       2-1) id가 horse인 말을 가져와서
//       2-2) moveRight 함수를 호출할때마다 그말을 오른쪽으로 50px씩 이동 
//       2-3) 말이 배경을 벗어나지 않도록 할 것 

// STEP 3. 'LEFT'라는 버튼을 클릭할 때 마다, moveLeft 함수를 호출 
$('.left').on('click', moveLeft)

// STEP 4. 'RIGHT'라는 버튼을 클릭할 때마다, moveRight 함수를 호출
$('.right').on('click', moveRight)

// HINT!! 
// a. btn left 하나의 클래스 이름이 아니라, btn이라는 클래스와 left라는 클래스에
//       모두 속해있다는 뜻 
// b. 왼쪽으로 이동하든, 오른쪽으로 이동하든 결국 선은 하나로 이어져있다.
// c. jQuery로 사용! 

const jump = () => {
    console.log('jump function');

    // animate는 수치화된 css만 움직일 수 있음. 빨간색에서 파란색으로 이동 이런건 안 됨
    $('#horse')
    .animate({bottom : '400px'}, 500)
    .animate({bottom : '200px'}, 500)
}

// key이벤트는 어느지점에서 키보드를 눌러도 인지할 수 있게 body태그로 
$('body').on('keydown', (e)=>{
    console.log('keydown event', e.key);
    if(e.key == 'ArrowLeft'){
        moveLeft()
    } else if(e.key == 'ArrowRight'){
        moveRight()
    } else if(e.key == ' '){
        jump()
    }
})