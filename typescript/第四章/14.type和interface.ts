type sex = 'girl' | 'boy'
type isAdmin = boolean

type User = {
    name: string,
    age: number
    show(): string
    sex: sex
    isAdmin: isAdmin
    [key: string]: any
}

const sd: User = { name: 'zs', age: 11, show: () => 'zs', isAdmin: false, sex: 'girl', fly: 9999 }



{
    // 这个重复是可以合并的
    interface num {
        name: string
    }

    interface num {
        age: number
    }

    class Per implements num {
        name: string = 'zs'
        age: number = 42
        // constructor(age: number, name: string) {
        //     this.name = name
        //     this.age = age
        // }
    }


    // 不能重复的声明
    // type bool = {
    //     name:string
    // }

    // type bool = {
    //     age:number
    // }


    type bool1 = {
        name:string
    }

    type bool = {
        age:number
    }

    type allbool = bool & bool1
    // type allbool = bool | bool1  /*使用其中一个就行了*/

    const hd:allbool = {name:'zs',age:10}




// 两种混合使用

    interface user {
        name:string
    }

    type user2 = {
        age:number
    }


    type person = user & user2

    class p implements person {
        name = 'zs'
        age= 11
    }

    const hh:person = {
        name:'zs',
        age:12
    }

}