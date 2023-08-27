import React, {createContext, useState} from 'react';
import {IUser, IAuthContext, IPropsAuthContext} from '../types/auth';

export const StoreContext = createContext<Partial<IAuthContext>>({});

const StoreContextComponent: React.FC<IPropsAuthContext> = props => {
  const [userData, setUserData] = useState<IUser>({});

  function updateUserData(values: IUser) {
    setUserData(prevState => {
      return {
        ...prevState,
        ...values,
      };
    });
  }

  return (
    <StoreContext.Provider value={{userData, updateUserData}}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextComponent;
