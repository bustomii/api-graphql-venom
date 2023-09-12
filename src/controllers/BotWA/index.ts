import { venomRun } from '../../venom'

export const BotController = async (
  req: any,
  res: { send: (arg0: string) => void },
) => {
  const qrCode = await venomRun(req.body.wa)
  res.send(
    JSON.stringify({
      wa: req.body.wa,
      message: true,
    }),
  )
}
