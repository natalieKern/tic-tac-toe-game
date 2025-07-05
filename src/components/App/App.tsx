import './App.css'
import {Table} from "../Table/Table.tsx";
import {useStore} from "../../store";
import {Toast} from "../Toast/Toast.tsx";
import {ToastType} from "../../types.ts";

function App() {
    const isInvalid = useStore((state)=> state.invalidInput);
    const winner = useStore((state)=> state.winner);
    const turn = useStore((state)=> state.turn);

    return (<>
        <Table/>
    {winner !== '-1' && <Toast winner={winner} type={ToastType.WINNER}/> }
        {isInvalid && <Toast turn={turn} type={ToastType.ERROR}/> }
    </>)
}

export default App
