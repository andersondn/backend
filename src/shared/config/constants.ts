import 'dotenv/config'

export const APP_PORT = process.env.PORT  || 4000
export const NODE_ENV = process.env.NODE_ENV || 'development';
export const JWT_SECRET = process.env.JWT_SECRET || 'da39a3ee5e6b4b0d3255bfef95601890afd80709';