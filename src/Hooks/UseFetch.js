import { useLang } from "../Providers/LangProvider/LangProvider";

export const UseFetch=async(url,method,headers,inBody,lang)=>{
    // const lang = useLang()
    let baseUrl = process.env.REACT_APP_BASE_URL ;
    const fetchUrl = baseUrl+'/api/'+url
    const fetchHeaders={
        ...headers,
        "Content-type": "application/json",
        "lang":lang
    }
    try {
        const data = await fetch(fetchUrl,{
            headers:fetchHeaders,
            method,
            body:method!=='get'?JSON.stringify(inBody):null
        })
        return await data.json()
        
    } catch (error) {
        console.log(error)
    }
}
