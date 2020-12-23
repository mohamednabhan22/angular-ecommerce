module.exports = (req, res, next) => {
    if (req.decoded.isAdmin) next();
    else res.json({error:"not admin"});
};
