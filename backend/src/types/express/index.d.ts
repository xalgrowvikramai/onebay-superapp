import { User } from '../../models/userModel';

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

export {};
