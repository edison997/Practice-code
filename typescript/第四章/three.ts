let dq: string | undefined |null = '皇后'
dq = undefined
dq = null

let body =document.querySelector('body')!
let div = document.querySelector('.zs')!
console.log(div.innerHTML);


let alink = document.querySelector('#ww') as HTMLLinkElement
alink.href = (alink.innerHTML)


class One {
    el:HTMLDivElement
    constructor(el:HTMLDivElement){
        this.el = el
    }
    html(){
        return this.el.innerHTML
    }
}
let el = document.querySelector('#last') as HTMLDivElement
let obj = new One(el)

console.log(obj.html());



const btn = document.querySelector('#btn') as HTMLButtonElement
btn.addEventListener('click',(e:Event)=>{
    // e.preventDefault()
    const body = document.querySelector('body')!
    body.insertAdjacentHTML('beforeend',"<h1>3333</h1>")
})
