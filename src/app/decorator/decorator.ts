export const hasLocalStorage = (storageName: string) => {
    return  JSON.parse(localStorage[storageName]);
};

export const setLocalStorage = (storageName: string, newData) => {
    localStorage.removeItem(storageName);
    localStorage[storageName] = JSON.stringify(newData);
};

export function LocalStorage() {
    return function (target: any, key: string) {
        Object.defineProperty(target, key, {
            get: () => hasLocalStorage(key),
            set: newData => setLocalStorage(key, newData),
            enumerable: true,
            configurable: true
        })
    }
}

