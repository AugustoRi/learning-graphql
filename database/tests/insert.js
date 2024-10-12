const db = require('../config/db')

const newProfile = {
    name: 'Intern',
    permissions: '["NONE"]'
}

db.insert(newProfile).into('profiles')
    .then(res => console.log(res))
    .catch(err => console.log(err.sqlMessage))
    .finally(() => db.destroy())