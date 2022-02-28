import { JWT_SECRET } from '../../../../config/constants';
import jwt from 'jsonwebtoken';
import { AuthRequest, NextFunction, Response } from '../types/express';


function authMiddleware(
    request: AuthRequest,
    response: Response,
    next: NextFunction
) {
    if (request.headers.authorization) {
        const [type, token] = request.headers.authorization.split(' ');
        if (type === 'Bearer') {
            try {
                const decoded = jwt.verify(token, JWT_SECRET);
                request.user = decoded;
                return next();
            } catch (error) {
                return response.status(401).json({
                    error: true,
                    message: 'Token inválido'
                });
            }
        }
    }

    return response.status(401).json({
        error: true,
        message: 'Usuário não autenticado'
    });
}
export default authMiddleware;
