import express, { Request, Response } from 'express'

const app = express()

app.use('/starter/', express.static('static'))

app.get('/', (_req: Request, res: Response) => {
    res.send({
        message: 'Hello World!'
    })
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
