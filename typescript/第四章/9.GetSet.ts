{
    class User {
        private _name:string
        constructor(name:string){
            this._name= name            
        }
        public get name():string{
            return this._name
        }
        public set name(name:string){
            this._name = name
        }
    }

    const u1 = new User('zs')
    console.log(u1);

    class Arr {
        private _list:any[] = []
        // constructor(lists:any[]){
        //     this._list= lists            
        // }
        public get lists():any[]{
            return this._list.map((item)=>{
                item.title = item.title.slice(0,2)
                return item
            })
        }
        public set lists(val:any[]){
            this._list = val
        }
    }

    const a = new Arr()
    console.log(a);
    
    a.lists = [{title:'zs'},{title:"ww000"}]
    console.log(a.lists);
    
}