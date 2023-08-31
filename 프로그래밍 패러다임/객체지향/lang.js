class 한국어{
    constructor(){
        this.msg1 = '돈을 넣어주세요!'
        this.msg2 = '무엇을 드시겠습니까? [1]물-700원 [2]콜라-1500원 [3]주스-2000원'
        this.msg3 = "물이 나왔습니다!!"
        this.msg4 = "콜라가 나왔습니다!!"
        this.msg5 = "주스가 나왔습니다!!"
    }
    changeMsg(won1000, won500, won100){     // 이 메세지는 변수랑 같이 있어서 함수로 만들어줌
        return `1000원 ${won1000}개 500원 ${won500}개 100원 ${won100}개`
    }
}

class 영어{
    constructor(){
        this.msg1 = 'Please put the money in!'
        this.msg2 = 'Choice menu? [1]water-700won [2]coke-1500won [3]juice-2000won'
        this.msg3 = "here your water!!!"
        this.msg4 = "here your coke!!!"
        this.msg5 = "here your juice!!!"
    }
    changeMsg(won1000, won500, won100){     // 이 메세지는 변수랑 같이 있어서 함수로 만들어줌
        return `1000won ${won1000}, 500won ${won500}, 100won ${won100}개`
    }
}