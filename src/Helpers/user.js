const clearLocalStorage = ()=> localStorage.clear()
const user = localStorage.getItem('user')
const token = localStorage.getItem('token')

export const isLogin=()=>{
    return !!(user&&token)    
}