import { put, get, post } from '../utils/request';

export function login(params) {
  return post('login', params);
}

export function logout(params) {
  return get('logout', params);
}

export function changePw(data) {
  return put('user/pwd', data);
}

//getDetailInfo

export function getDetailInfo(id) {
  return get(`hospital/user/${id}`);
}
//获取中心端logo和名字.
export function getLogo() {
  return post('logo/platform');
}
