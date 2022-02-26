import {incrementList,decrementList,removeItemFromList} from '../../Helpers/Lists'
const { createContext, useReducer, useContext } = require("react");

const UserCardcontext= createContext() 
const UserCardcontextDispatcher= createContext() 

const initialCart=[]
const reducer = (state,action)=>{
  switch (action.type) {
    case 'ADD_PRODUCT':
      if(!state.find(item=>item._id===action.payload._id)){
        return [...state,{...action.payload,cardCount:1}]
      }
      else{
        
        return incrementList(state,'_id',action.payload._id,'cardCount')
      }
    case 'DECREMENT_COUNT':
      if(action.payload.cardCount>1){
        return decrementList(state,'_id',action.payload._id,'cardCount')
      }
      else{
        return removeItemFromList(state,'_id',action.payload._id)
      }
    case 'INCREMENT_COUNT':
        return incrementList(state,'_id',action.payload._id,'cardCount')
    default:
      return state
  }
}
function UserCartProvider({ children }) {
    const [state,dispatch] = useReducer(reducer,initialCart);
    
    return (
      <UserCardcontext.Provider value={state}>
        <UserCardcontextDispatcher.Provider 
          value={dispatch} >
          {children}
        </UserCardcontextDispatcher.Provider>
      </UserCardcontext.Provider>
    );
  }

  const useContexts = (userContext)=>{
    const context = useContext(userContext)
    if(context===undefined){
      throw new Error('place user card provider on the App Context')
    }
    else{
      return context
    }
  }
  export default UserCartProvider;

  export const useUserCard=()=>useContexts(UserCardcontext)
  export const useUserCardDispatcher = ()=>{
    return useContexts(UserCardcontextDispatcher)
  }