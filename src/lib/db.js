let DatabaseModule = {};

DatabaseModule.set = (key, data) => {
    if (typeof (data) === 'object') {
        localStorage.setItem(key, JSON.stringify(data));
    } else {
        localStorage.setItem(key, data);
    }
}

DatabaseModule.get = (key) => {
    try {
        var data = JSON.parse(localStorage.getItem(key));
        if (typeof (data) === 'object') {
            return data;
        } else {
            return localStorage.getItem(key);
        }
    } catch (e) {
        return localStorage.getItem(key);
    }
}

DatabaseModule.remove = (key) => {
    localStorage.removeItem(key);
}

export default DatabaseModule;
