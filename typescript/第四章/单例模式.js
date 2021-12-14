{
    var Axios_1 = /** @class */ (function () {
        function Axios() {
            console.log('构造函数');
        }
        Axios.get = function () {
            if (Axios.ins == null) {
                console.log('NEW');
                Axios.ins = new Axios();
            }
            return Axios.ins;
        };
        Axios.ins = null;
        return Axios;
    }());
    var ins = Axios_1.get();
    var ins1 = Axios_1.get();
    var ins2 = Axios_1.get();
    // console.log(ins);
    // console.log(ins1);
    // console.log(ins2);
}
