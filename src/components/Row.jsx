export default function Row(
    {
        id,
        onRemove,
        value,
        onChange,
        sign,
        disabled,
        onToggle }
) {



    return (

        <div className={`row ${disabled ? "row-disabled" : ""}`}>
                
            <select //segno
                className="select"
                value={sign}
                onChange={(e) => onChange(id, "sign", e.target.value)}
                disabled={disabled}
            >
                <option value="+">+</option>
                <option value="-">-</option>
            </select>


            <input //cifra
                className="input"
                type="number" value={value}
                onChange={(e) => onChange(id, "value", e.target.value)}
                disabled={disabled}
                placeholder="Insert a number"
            />
                
            <div className="row-actions"//pulsanti
            >
                <button onClick={() => onRemove(id)}
                > remove
                </button>


                <button onClick={() => onToggle(id)}
                > {disabled ? "enable" : "disable"}
                </button>
            </div>
        </div>
    )

}