const express = require("express")
const app = express()
const userRouter = require("./routes/user")
const db = require("./db/db")

app.use(express.json())
app.use("/user", userRouter)

app.listen(3000, async () =>{
    await db.sync()
    console.log("Listening on port 3000")
})


