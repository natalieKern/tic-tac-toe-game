import {Cell} from '../Cell/Cell';
import './Table.css';

export const Table = () => {
    return (
        <div className="table">
            {Array.from({length: 9}).map((_, index) => (
                <Cell key={index} x={index % 3} y={Math.floor(index / 3)} value={''}/>))}
        </div>
    );
}