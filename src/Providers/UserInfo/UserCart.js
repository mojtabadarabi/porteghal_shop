const { createContext } = require("react");

const UserCartContext= createContext() 
const UserCartContextSetState= createContext() 

const initialCart={
    
}
function UserCartProvider({ children }) {
    const [userInfo, setUserInfo] = React.useState(initialCart);
    
    return (
      <UserInfoContext.Provider value={userInfo}>
        <UserInfoContextSetState.Provider 
          value={setUserInfo} >
          {children}
        </UserInfoContextSetState.Provider>
      </UserInfoContext.Provider>
    );
  }