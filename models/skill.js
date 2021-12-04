const skills = [
    {id: 100, lang: 'HTML', done: true},
    {id: 200, lang: 'CSS', done: true},
    {id: 300, lang: 'JavaScript', done: false}
]

module.exports = {
    getAll,
    getOne 
}

function getAll() {
    return skills
}

function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}
