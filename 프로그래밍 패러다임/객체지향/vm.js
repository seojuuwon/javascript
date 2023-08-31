class 자판기{
    // 객체를 생성하고 초기 데이터(변수)를 지정
    constructor(water, coke, juice, lang){
        this.money = 0
        this.menu = 0
        this.water = water
        this.coke = coke
        this.juice = juice
        this.lang = lang    // 자판기가 언어를 가지고 있을 수 있게 넣어줌
    }
    inputMoney(){
        this.money = parseInt(prompt(this.lang.msg1))   // 자판기 객체 안에 있는 lang 객체의 첫번째 메세지를 넣겟다
    }
    inputMenu(){
        this.menu = parseInt(prompt(this.lang.msg2))    // lang 객체의 두번째 메세지를 넣겟다
    }
    exportProduct(){
        if(this.menu == 1){
            this.water -= 1 // 물 수량 감소
            this.money -= 700 // 물 금액만큼 돈 감소
            alert(this.lang.msg3)
        }else if(this.menu == 2){
            this.coke -= 1 // 콜라 수량 감소
            this.money -= 1500 // 콜라 금액만큼 돈 감소
            alert(this.lang.msg4)
        }else if(this.menu == 3){
            this.juice -= 1 // 주스 수량 감소
            this.money -= 2000 // 주스 금액만큼 돈 감소
            alert(this.lang.msg5)
        }
    }
    changeMoney(){
        let won1000 = parseInt(this.money / 1000)
        let won500 = parseInt(this.money % 1000 / 500)
        let won100 = parseInt(this.money % 1000 % 500 / 100)
        alert(this.lang.changeMsg(won1000, won500, won100))      // 언어 객체 안에 있는 함수를 불러옴
    }
}