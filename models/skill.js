const skills = [
    {id: 100, lang: 'HTML', done: true},
    {id: 200, lang: 'CSS', done: true},
    {id: 300, lang: 'JavaScript', done: false}
]

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne, 
    update
}

function getAll() {
    return skills
}

function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}

function create(s) {
    s.id = Date.now() % 1000000
    s.done = false
    skills.push(s)
}

function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id))
    skills.splice(idx, 1)
}

function update(updateData, id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id))
    skills[idx].lang = updateData.lang
}