import React from "react";
import {SpreadsheetRow} from "./SpreadsheetRow";

export function SpreadsheetView(props: {
    name: string,
    data: number[][]
    updateData: (data: number[][]) => void
}) {

    const updateCell = (rowIndex: number, colIndex: number, data: number) => {
        const newData = JSON.parse(JSON.stringify(props.data));
        newData[rowIndex][colIndex] = data;
        props.updateData(newData);
    }

    return (
        <div className={'spreadsheet-container'}>
            <div className={'header'}>{props.name}</div>
            <div className={'rows'}>
                {props.data.map((rowData: number[], idx: number) => (
                    <SpreadsheetRow key={idx}
                                    rowIndex={idx}
                                    data={rowData}
                                    updateData={(colIndex, newData) => updateCell(idx, colIndex, newData)}
                    />
                ))}
            </div>
        </div>
    )
}