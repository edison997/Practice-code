import UserStore from "./UserStore";

const store = {
   UserStore
     

}
setInterval(() => {
         store.UserStore.getNow()
     }, 1000)

     console.log(store.UserStore.time)

export default store