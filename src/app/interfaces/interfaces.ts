interface File {
    name: string,
    text: string
}

interface Folder {
    name: string,
    folders: Array<number>,
    files: Array<number>
}

export interface IncomingFiles {
    [index: number]: File
}

export interface IncomingFolders {
    [index: number]: Folder
}
