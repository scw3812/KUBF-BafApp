import { atom } from 'recoil';

export interface UserInfo {
  id: number;
  name: string;
  nickname: string;
  isAdmin: boolean;
}

export const userState = atom<UserInfo>({
  key: 'user',
  default: { id: 0, name: '', nickname: '', isAdmin: false },
});
