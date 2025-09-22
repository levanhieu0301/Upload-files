import express from 'express';
import route from "./routes/index.route"

const app = express()
const port = 9000

app.use("/", route)

app.listen(port, () => {
  console.log(`Website running on port ${port}`)
})
