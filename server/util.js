
exports.cleanCache = function (modulePath) {
    const module = require.cache[modulePath];
    // remove reference in module.parent
    if (module && module.parent) {
        module.parent.children.splice(module.parent.children.indexOf(module), 1);
    }
    require.cache[modulePath] = null;
};
