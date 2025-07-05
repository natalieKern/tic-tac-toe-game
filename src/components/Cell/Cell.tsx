import React from "react";
import './Cell.css';
import type {CellProps} from '../../types';
import {useStore} from '../../store';

export const Cell = ({x = 0, y = 0}: CellProps) => {
    const setCellValue = useStore((state) => state.setCellValue);
    const turn = useStore((state) => state.turn);

    const currentValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === turn) {
            return e.target.value;
        } else {

            return '';
        }
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCellValue(x, y, e.target.value);
        e.target.value = currentValue(e);
    }

    return <input className="cell" onChange={onChange}/>;
}