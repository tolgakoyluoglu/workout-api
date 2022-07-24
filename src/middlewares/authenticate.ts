import { NextFunction, Request, Response } from 'express'
import session from '../config/session'
import { internalServerError, UNAUTHORIZED } from '../helpers/responses'

async function authenticate(req: Request, res: Response, next: NextFunction) {
  try {
    const { token } = req.cookies
    if (token) req.me = await session.get(token)
    if (!req.me) return res.status(UNAUTHORIZED.code).json(UNAUTHORIZED)

    next()
  } catch (error) {
    internalServerError(req, res, error)
  }
}

export default authenticate
