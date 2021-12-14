{
    class Axios {
        protected static ins:Axios | null = null
        protected constructor() {
            console.log('构造函数');

        }
        static get():Axios{
            if(Axios.ins == null) {
                console.log('NEW');
                
                Axios.ins =new Axios()
            }
            
            
            return Axios.ins
        }
    }

    
    const ins = Axios.get()
    const ins1 = Axios.get()
    const ins2 = Axios.get()
    
    // console.log(ins);
    // console.log(ins1);
    // console.log(ins2);
    
    
}