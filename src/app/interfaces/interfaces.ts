interface File {
    name: string,
    text: string,
    checked: boolean
}

interface Folder {
    name: string,
    folders: Array<number>,
    files: Array<number>,
    checked: boolean
}

export interface IIncomingFiles {
    [index: number]: File
}

export interface IIncomingFolders {
    [index: number]: Folder
}
