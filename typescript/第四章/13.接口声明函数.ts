{
    interface Pay {
        (price:number):boolean
    }

    const WePay:Pay = (price:number) => true

    {
        // interface playEndInterface {
        //     end():void
        // }
        // // 这里继承了上面的接口，就相当于是也具有了上面接口的约束，所以下面的类也需要有这个方法
        // interface AnimationInterface extends playEndInterface{
        //     name: string
        //     move(): void
        // }
    
        interface playEndInterface {
            end(): void
        }
    
        //同名接口会合并
        interface AnimationInterface {
            name: string
            move(): void
        }

        interface AnimationInterface {
            end(): void
        }


        class Pain implements AnimationInterface{
            name: string;
            move(): void {
                throw new Error("Method not implemented.");
            }
            end(): void {
                throw new Error("Method not implemented.");
            }

            constructor(name:string){
                this.name = name
            }
            
        }


        let p = new Pain('zs')
        console.log(p);
        
    
    
    }
}