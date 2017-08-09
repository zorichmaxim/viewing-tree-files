export interface State {
    data: Array<Object>;
}

export interface FileState {
    title: string;
    state: string;
    text: string;
}

export interface FolderState {
    title: string;
    state: string;
    data: Array<Object>;
}
