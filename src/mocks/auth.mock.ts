/* eslint-disable @typescript-eslint/no-explicit-any */
import { AuthPayload, IAuthDocument } from '@auth/interfaces/auth.interface';
import { Response } from 'express';

export const authMockRequest = (sessionData: IJWT, body: IAuthMock, currentUser?: AuthPayload | null, params?: any) => ({
  session: sessionData,
  body,
  params,
  currentUser
});

export const authMockResponse = (): Response => {
  const res: Response = {} as Response;
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

export interface IJWT {
  jwt?: string;
}

export interface IAuthMock {
  _id?: string;
  username?: string;
  email?: string;
  uId?: string;
  password?: string;
  avatarColor?: string;
  avatarImage?: string;
  createdAt?: Date | string;
  currentPassword?: string;
  newPassword?: string;
  confirmPassword?: string;
  quote?: string;
  work?: string;
  school?: string;
  location?: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
  youtube?: string;
  messages?: boolean;
  reactions?: boolean;
  comments?: boolean;
  follows?: boolean;
}

export const authUserPayload: AuthPayload = {
  userId: '60263f14648fed5246e322d9',
  uId: '1621613119252066',
  username: 'Manny',
  email: 'manny@me.com',
  avatarColor: '#9c27b0',
  iat: 12345
};

export const authMock = {
  _id: '60263f14648fed5246e322d3',
  uId: '1621613119252066',
  username: 'Manny',
  email: 'manny@me.com',
  avatarColor: '#9c27b0',
  createdAt: '2022-08-31T07:42:24.451Z',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  save: () => {},
  comparePassword: () => false
} as unknown as IAuthDocument;

export const signUpMockData = {
  _id: '63f6767d47de70bf28369db9',
  uId: '987575075323',
  username: 'Pidithf',
  email: 'g2d3i@elmal.com',
  password: 'prssuor',
  avatarColor: 'red',
  blocked: [],
  blockedBy: [],
  postsCount: 0,
  profilePicture: 'https: //res.cloudinary.com/djj8m2cvg/image/upload/v1677096573/63f6767d47de70bf28369db9',
  followersCount: 0,
  followingCount: 0,
  notifications: { messages: true,  reactions: true,  comments: true,  follows: true},
  work: '',
  location: '',
  school: '',
  quote: '',
  bgImageId: '',
  bgImageVersion: '',
};
