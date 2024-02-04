import React from "react";

export function SpreadsheetCell(props: {
    data: number,
    colIndex: number,
    onValueChange: (newVal: number) => void
}) {

    return (
        <div className={'cell'}>
            {props.data}
            <input onChange={(evt) => props.onValueChange(+evt.target.value)} value={props.data} />
        </div>
    )
}