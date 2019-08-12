module.exports = {
    store(req, res){
        console.log(req.body.user);
        return res.json({ok:true});
    }
}