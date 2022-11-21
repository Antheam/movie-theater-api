const {Router} = require("express")

const userRouter = Router()
const User = require("../models/User")

userRouter.get("/", async (req, res) => {
        const users = await User.findAll()
    
    res.sendStatus(200)
    res.send(users)
})

userRouter.get('/:id', async (request, result) => {

    const user = await User.findOne
    res.sendStatus(200)
    res.send(user)
   
})

userRouter.post("/", async (req, res) =>{
    try{
        const user = await User.create(req.body)
    }catch (error){
        res.status(500).send(error)
    }
})

module.exports = userRouter