// TODO Implement
import jwt from 'jwt-decode';
import {setAuthorization} from './api';

export function currentUser() {
  return JSON.parse(localStorage.getItem('accessToken'));
}

export function isAuth() {
  try{
     const tokenChecked = localStorage.getItem('accessToken');
      if (tokenChecked) {
        return jwt(tokenChecked);
      }
      return false;
  }
  catch(err){
      return false
  }
};

export function login(token) {
  localStorage.setItem('accessToken', token);
  // toastr.success('TRANSFIN. Admin Panel ', `You've successfully logged in. Welcome!`);
  setAuthorization();
  return true;
}

export function setRemember(user = {}) {
  localStorage.setItem('userRemember', JSON.stringify(user || isAuth() ) );
  return true;
}

export function removeRemember() {
  localStorage.removeItem('userRemember');
  return true;
}

export function logout() {
  localStorage.removeItem('accessToken');
  setAuthorization();
  return true;
}
