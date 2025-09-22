import { useState } from "react"
import Row from "./Row"
import "./Calculator.css";

export default function Calculator() {
    const [rows, setRows] = useState([{
        id: 1, value: "", sign: "+", enabled: true
    }])

    function addRow() {
        setRows(rows => [...rows, { id: Date.now(), value: "", sign: "+", enabled: true }])

    }
    function handleChange(id, field, value) {
        //cambia segno e campo testo 

        setRows(rows => rows.map((row) => row.id === id ? { ...row, [field]: value } : row))

    }


    const removeRow = (id) => {
        setRows(rows => rows.filter((row) => row.id !== id))


    }

    const handleToggle = (id) => {
        setRows(rows => rows.map((row) => row.id === id ? { ...row, enabled: !row.enabled } : row))

    }

    const result = rows.reduce((acc, row) => {
        if (!row.enabled) return acc;
        return row.sign === "+" ? acc + Number(row.value) : acc - Number(row.value);
    }, 0)
    return (
        <>
            <div className="calculator">
                <div className="actions">
                    <button onClick={addRow}>Add row</button>
                </div>
                <div className="rows">
                    {rows.map((row) =>
                        <Row
                            key={row.id}
                            id={row.id}
                            onRemove={removeRow}
                            value={row.value}
                            onChange={handleChange}
                            sign={row.sign}
                            disabled={!row.enabled}
                            onToggle={handleToggle}
                        />)
                    }
                </div>
                <h4> Result: {result} </h4>
            </div>
        </>
    )

}