import './Toast.css';
import {ToastType} from "../../types.ts";

type ToastProps = {
    turn?: string;
    winner?: string;
    type: ToastType;
}

export const Toast = ({turn, winner, type}: ToastProps) => {
    return <header
        className={type}>{type === ToastType.WINNER ? `the winner is ${winner}` : `Invalid input, it is ${turn} turn`}</header>
};
