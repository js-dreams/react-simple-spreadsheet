import React from "react";
import {SpreadsheetCell} from "./SpreadsheetCell";

export function SpreadsheetRow(props: {
    rowIndex: number
    data: number[],
    updateData: (colIndex: number, data: number) => void
}) {

    const handleValueChange = (colIndex: number, newVal: number) => {
        props.updateData(colIndex, newVal);
    }

    return (
        <div className={'row'}>
            {props.data.map((value: number, idx: number) => (
                <SpreadsheetCell key={idx}
                                 colIndex={idx}
                                 data={value}
                                 onValueChange={(newVal) => handleValueChange(idx, newVal)}
                />
            ))}
        </div>
    )
}