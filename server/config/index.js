import path from 'path'

export const HOST_PORT = 3001
export const HOST_NAME = 'localhost'
export const PROTOCOL = 'http'
export const BASE_URL = PROTOCOL + '://' + HOST_NAME + ':' + HOST_PORT
export const STATIC_DIR = path.resolve(__dirname, '../../dist')
export const MONGO_DB_URL = 'mongodb://localhost/blog'