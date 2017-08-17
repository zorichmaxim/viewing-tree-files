export const startRoot = {
    0: {
        name: 'root',
        folders: [],
        files: [0]
    }
};
export const startFile = {
    0: {
        name: 'File 0',
        text: 'Your file'
    },
};
export const hasLocalStorage = (storageName: string) => {
    let startState;
    switch (storageName) {
        case 'applicationFolder':
            startState = startRoot;
            break;
        case 'applicationFile':
            startState = startFile;
            break;
    }
    return localStorage[`${storageName}`] !== '[]' ? JSON.parse(localStorage[storageName]) : startState;
};

export const setLocalStorage = (storageName: string, newData) => {
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

