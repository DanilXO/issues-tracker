export interface Board {
    id: number;
    name: string;
    columns: Column[];
}

export interface Column {
    id: number;
    name: string;
    tickets: Ticket[];
}

export interface Ticket {
    id: number;
    title: string;
    description: string;
}

export interface ActiveBoardState {
    board: Board;
}
