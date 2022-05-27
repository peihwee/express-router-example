module.exports.getUser = function(req, res, next)
{
    res.send("Routed to User GET");
}

module.exports.postUser = function(req, res, next)
{
    res.send("Routed to User POST");
}

module.exports.deleteUser = function(req, res, next)
{
    res.send("Routed to User DELETE");
}

module.exports.patchUser = function(req, res, next)
{
    res.send("Routed to User PATCH");
}

module.exports.getSingleUser = function(req, res, next)
{
    res.send("Routed to Single User GET: userId is "+req.params.userId);
}

module.exports.getSingleUserSpecificInventory = function(req, res, next)
{
    res.send("Routed to Single User GET: userId is "+req.params.userId+" and inventoryId is "+req.params.inventoryId);
}