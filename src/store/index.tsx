import {create} from 'zustand';
import type {StoreState} from "./types.tsx";
import {checkWinner} from "../utils.ts";

export const useStore = create<StoreState>((set) => ({
    boardState: Array.from({length: 3}, () => Array(3).fill('')),
    winner: '-1',
    turn: 'X',
    invalidInput: false,
    setCellValue: (x, y, value: string) => set((state) => {
        if (value !== state.turn) {
            state.setInvalidInput(true);
            return {};
        } else if (state.invalidInput) {
            state.setInvalidInput(false);
        }
        const newBoardState = state.boardState?.map((row, i) =>
            row.map((cell, j) => (i === x && j === y ? value : cell)));
        const currTurn = state.turn === 'X' ? 'O' : 'X';
        const isWinner = checkWinner(newBoardState, x, y, value) ? value : '-1';
        return {boardState: newBoardState, turn: currTurn, winner: isWinner};
    }),
    setWinner: (player: string) => set(() => {
        return {winner: player};
    }),
    setPlayer: (player: string) => set(() => {
        return {turn: player};
    }),
    setInvalidInput: (invalid: boolean) => set(() => {
        return {invalidInput: invalid};
    })
}));


