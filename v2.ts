import express from 'express'
let router = express.Router()

const parseIt = (incoming: string) => {
    const pattern = /(\S*?)0000(\S*?)000(.*)/
    const matches = incoming.match(pattern)
    let result = {}
    if (matches) {
        result  = {
            firstName: matches[1],
            lastName: matches[2],
            clientId: matches[3].slice(0,3) + '-' + matches[3].slice(3)
        }
    } else {
        result = {
            firstName: "---",
            lastName: "---",
            clientId: "---"
        }
    }
    return result
}

router.post('/parse', (req: express.Request, res: express.Response) => {
    res.json(
        { statusCode: 200,
          data: parseIt(req.body.data)
        }
    )
})

module.exports = router