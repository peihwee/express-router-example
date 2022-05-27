module.exports.getMessage = function(req, res, next)
{
    res.send("Routed to Message GET");
}

module.exports.postMessage = function(req, res, next)
{
    res.send("Routed to Message POST");
}

module.exports.deleteMessage = function(req, res, next)
{
    res.send("Routed to Message DELETE");
}

module.exports.patchMessage = function(req, res, next)
{
    res.send("Routed to Message PATCH");
}