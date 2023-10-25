const user=require("../models/user.schema")
const movies=require("../models/movie.schema")

const Home = (req, res) => {
    res.send("Welcome to the movie API")
}

const signup = async (req, res) => {
    try {
        let data = await user.findOne({ email: req.body.email })
        if (data) {
            return res.send("alread exits")
        }
        else {
            data = await user.create(req.body)
            return res.status(201).send(data);
        }
    }
    catch (error) {
        return res.send(error.message)
    }
}
const login = async (req, res) => {
    try {
        const data = await user.findOne({ username: req.body.username })
        if (!data) {
            return  res.status(401).send({error:"Invalid username or password"})
        }
        if (data.password != req.body.password) {
            return res.status(401).send({ error: "Invalid username or password" })
        }
        return res.send({message : 'Logged in successfully'})
    }
    catch (error) {
        return res.send(error.message)
    }
}

const deleted = async (req, res) => {
    const { id } = req.params
    let data = await user.findByIdAndDelete(id)
    res.send({'message': 'User deleted successfully'})
}

// movie

const creat = async(req,res)=>{
    let data = await movies.create(req.body)
    res.status(201).send(data)
}

const updated = async(req,res)=>{
    let {id} = req.params
    let data = await movies.findByIdAndUpdate(id,req.body)
     data=await movies.findById(id)
   res.status(200).send(data)
}

const dele = async (req, res) => {
    let { id } = req.params;
    let data = await movies.findByIdAndDelete(id);
    res.send({ "message": "Movie deleted" });
};
const rating = async (req, res) => {
    let { id } = req.params;
    if (id) {
        let data = await movies.findById(id)
        data.ratings.push({ value: req.body.rating });
        await data.save();
        res.send(data)
    }
    else {
        res.send({ error: "movie not found" })
    }
}
const comment = async (req, res) => {
    let { id } = req.params;
    if (id) {
        let data = await movies.findById(id);
        data.comments.push(req.body)
        await data.save();
        res.send(data)
    }
    else {
        res.send({ error: "movie not found" })
    }
}
const filter = async(req,res)=>{
    let data  = await movies.find(req.query)
    res.send(data)
}


module.exports = { Home, signup, deleted, login ,creat,dele,updated,filter,rating,comment}