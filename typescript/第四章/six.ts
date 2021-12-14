class CollectionNumber<T> {
    data:T[] = []

    public push(...num:T[]){
        this.data.push(...num)
    }

    public shift():T {
        return this.data.shift()
    }
}

let collectOne = new CollectionNumber<Number>()
collectOne.push(1,2,3,4,5)
console.log(collectOne.shift());

let collectTwo = new CollectionNumber<string>()
collectTwo.push("1","@","#")
console.log(collectTwo.data);


type UserType = {name:string,age:number}

const u1:UserType = {name:'zs',age:10}
let collectThree = new CollectionNumber<UserType>()
collectThree.push(u1)
console.log(collectThree.data);




