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

export interface IncomingFiles {
    [index: number]: File
}

export interface IncomingFolders {
    [index: number]: Folder
}
