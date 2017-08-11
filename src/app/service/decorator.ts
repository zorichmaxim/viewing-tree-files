const startRoot = {
    0: {
        name: 'root',
        folders: [],
        files: [0]
    }
};
const startFile = {
    0: {
        name: 'File 0',
        text: 'Your file'
    },
};
const hasLocalStorage = (storageName: string) => {
    let startState;
    switch (storageName) {
        case 'ApplicationFolder':
            startState = startRoot;
            break;
        case 'ApplicationFile':
            startState = startFile;
            break;
    }
    return localStorage[`${storageName}`] !== '[]' ? JSON.parse(localStorage[storageName]) : startState;
};

const setLocalStorage = (storageName: string, newData) => {
    localStorage.removeItem(`${storageName}`);
    localStorage[storageName] = JSON.stringify(newData);
};

export function LocalStorage() {
    return function (target: any, key: string) {
        Object.defineProperty(target, key, {
            get: () => hasLocalStorage(key),
            set: newData => setLocalStorage(key, newData)
        })
    }
}

