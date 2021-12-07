const ski = require('../models/skill')

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
}
function index(req, res) {
    res.render('skills/index', {
        skills: ski.getAll(),
        time: req.time
    })
}

function show(req, res) {
    res.render('skills/show', {
        skills: ski.getOne(req.params.id)
    })
}

function newSkill(req, res) {
    res.render('skills/new')
}

function create(req, res) {
    console.log(req.body)
    ski.create(req.body);
    res.redirect('/skills')
} 

function deleteSkill(req, res) {
    ski.deleteOne(req.params.id)
    res.redirect('/skills')
}

function edit(req, res) {
    res.render(`skills/edit`, {
        skill: ski.getOne(req.params.id)
    })
}

function update(req, res) {
    ski.update(req.body, req.params.id)
    res.redirect(`/skills`)
}