interface PayIterface {
    handle(price:number):void
}

class AliPay implements PayIterface {
    handle(price:number){
        console.log(`支付宝支付${price}`);
        
    }
}


class WePay implements PayIterface {
    handle(price:number){
        console.log(`微信支付${price}`);
        
    }
}

function pay(type:string,price:number){
    let pay:PayIterface
    switch(type){
        case 'alipay':
            pay = new AliPay()
            break;
        case 'wepay':
            pay = new WePay()
    }
    pay.handle(price)
}