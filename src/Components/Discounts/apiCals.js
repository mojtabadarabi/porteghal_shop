export const fetchAllProduct =async()=>{
    return fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .catch(err=>[
        alert(err)
    ])
}