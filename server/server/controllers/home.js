
async function home(req,res){
    // console.log(req.user)
    res.status(200).send(req.user.role)
}

module.exports=home