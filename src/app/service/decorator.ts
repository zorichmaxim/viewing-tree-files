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
export const forStartPoint = (storageName, newData) => {
    localStorage[`${storageName}`] = JSON.stringify(newData);
};
export const hasLocalStorage = (storageName: string) => {
    let startState;
    switch (storageName) {
        case 'ApplicationFolder':
            startState = startRoot;
            break;
        case 'ApplicationFile':
            startState = startFile;
            break;
    }
    return localStorage[`${storageName}`] !== undefined  ? JSON.parse(localStorage[storageName]) : forStartPoint(storageName, startState);
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

