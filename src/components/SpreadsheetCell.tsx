import React from "react";
import {ThemeContext} from "./ReactSimpleSpreadsheet";

export function SpreadsheetCell(props: {
    data: number | string,
    colIndex: number,
    oddRow: boolean,
    onValueChange: (newVal: number) => void
}) {

    const theme = React.useContext(ThemeContext);

    const relevantRowStyle = props.oddRow ? theme?.oddRows : theme?.evenRows;

    const relevantCellStyle = (+props.data % 2) ? theme?.oddCellValues : theme?.evenCellValues;

    const style = {
        backgroundColor: relevantCellStyle?.backgroundColor || relevantRowStyle?.backgroundColor,
        color: relevantCellStyle?.color || relevantRowStyle?.color
    }

    return (
        <div className={'cell'}>
            <input style={style} onChange={(evt) => props.onValueChange(+evt.target.value)} value={props.data} />
        </div>
    )
}