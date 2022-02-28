import { NextFunction, Request, Response } from 'express';

 type AuthRequest = Request & {
    user: {
        id: number;
        email: string;
        name: string;
        role: string;
    };
};

export { NextFunction, Request, Response, AuthRequest } 