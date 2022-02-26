export const incrementList=(list,key,value,property)=>{
    const dubList = [...list]
    const findedIndex = dubList.findIndex(item=>item[key]==value)
    dubList[findedIndex][property]++
    return dubList
}
export const decrementList=(list,key,value,property)=>{
    const dubList = [...list]
    const findedIndex = dubList.findIndex(item=>item[key]===value)
    dubList[findedIndex][property]--
    return dubList
}

export const removeItemFromList=(list,key,value)=>{
    const dubList = [...list]
    const FiltedList = dubList.filter(item=>item[key]!==value)
    return FiltedList
}