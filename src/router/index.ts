import { BotController } from '../controllers/BotWA'
import { Home } from '../controllers/Home'

const express = require('express')
const router = express.Router()

// router.get('/', Home)
router.post('/bot', BotController)
router.use(
  (
    req: { subdomains: string[]; subdomain: any },
    res: any,
    next: () => void,
  ) => {
    if (!req.subdomains.length || req.subdomains.slice(-1)[0] === 'www')
      return next()
    var subdomain = req.subdomains.slice(-1)[0]
    req.subdomain = subdomain
    next()
  },
)

router.get(
  '/',
  (
    req: { subdomain: any },
    res: {
      send(arg0: string): unknown
      render: (arg0: string) => void
    },
  ) => {
    console.log(req.subdomain, 'req')
    if (!req.subdomain) {
      res.send(
        JSON.stringify({
          message: true,
        }),
      )
    } else {
      res.send(
        JSON.stringify({
          message: false,
        }),
      )
    }
  },
)

export default router
