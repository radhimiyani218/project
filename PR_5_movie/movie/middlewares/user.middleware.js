const middleware = (req, res, next) => {
    const { title, description, releaseDate, category, actors, image, ratings, comments, addedBy } = req.body;
    if (title && description && releaseDate && category && actors && image && ratings && comments && addedBy) {
        next();
    }
    else {
        res.status(400).send("All fields are required.");
    }
};

const middlewares = (req,res,next)=>{
    const {username,password}=req.body
    if(username && password){
        next()
    }
    else{
        res.send({error:"All fields are required"})
    }
}
module.exports = {middleware,middlewares};