import permissions from '../store/permissions.json'

export function getPermissions() {
    return permissions.permissions.reduce(function(result, item) {
        result[item] = item
        return result
    }, {})
}