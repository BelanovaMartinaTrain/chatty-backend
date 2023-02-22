import { Request, Response } from 'express';
//import * as cloudinaryUploads from '@global/helpers/cloudinary-upload';
import { authMockRequest, authMockResponse } from '@root/mocks/auth.mock';
import { SignUp } from '../signup';
import { CustomError } from '@global/helpers/error-handler';

jest.mock('@service/queues/base.queue');
jest.mock('@service/redis/user.cache');
jest.mock('@service/queues/user.queue');
jest.mock('@service/queues/auth.queue');
jest.mock('@global/helpers/cloudinary-upload');

describe('SignUp', () => {

  it('should throw an error if username is not available', () => {
    const req: Request  = authMockRequest({}, {
      username: '',
      email: 'manny@test.com',
      password: 'jdjjfjv',
      avatarColor: 'red',
      avatarImage: 'image'
    }) as Request;
    const res: Response = authMockResponse();

    SignUp.prototype.create(req, res).catch((error: CustomError) => {
      console.log(error);
    });
  });
});
