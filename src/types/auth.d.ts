import React from 'react';

export interface IUser {
  email?: string;
  firstname?: string;
  date?: string;
  time_of_week?: string;
}

export interface IAuthContext {
  userData: IUser;
  updateUserData: (values: IUser) => void;
}

export interface IPropsAuthContext {
  children: React.ReactNode;
}
