const ski = require('../models/skill')

module.exports = {
    index,
    show
}
function index(req, res) {
    res.render('skills/index', {
        skills: ski.getAll()
    })
}

function show(req, res) {
    res.render('skills/show', {
        skills: ski.getOne(req.params.id)
    })
}