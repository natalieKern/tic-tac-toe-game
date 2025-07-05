export type CellProps = {
    key?: number;
    x: number;
    y: number;
    value: string;
}

export type BoardState = string [][];

export interface StoreState {
    boardState: BoardState;
    winner: string;
    turn: string;
    invalidInput: boolean;
    setCellValue: (x:number, y:number, value: string) => void;
    setWinner: (player: string) => void;
    setPlayer: (player: string) => void;
    setInvalidInput: (invalid: boolean) => void;
}