const data = require('../data/users.json');

function getUsers() {
    return data.items;
}

function get(id) {
    return data.items.find(item => item.id == id);
}

function search(q) {
    return data.items.filter(item => 
        new RegExp(q).test(item.firstName) ||
        new RegExp(q).test(item.lastName) ||
        new RegExp(q).test(item.lastName));
}

module.exports = {
    getUsers, get, search
}