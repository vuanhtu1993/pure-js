function createStore(name, defaultValue) {
    const store = JSON.parse(localStorage.getItem(name)) ?? defaultValue
    return {
        get: function() {
            return store
        },
        set: function(data) {
            localStorage.setItem(name, JSON.stringify(data));
        }
    }
}