import React from "react";
import {SpreadsheetRow} from "./SpreadsheetRow";
import {SpreadsheetHeaderRow} from "./SpreadsheetHeaderRow";

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

    const numberOfColumns = props.data[0] ? props.data[0].length : 0;

    return (
        <div className={'spreadsheet-container'}>
            <div className={'header'}>{props.name}</div>
            <div className={'header-row'}>

            </div>
            <div className={'rows'}>
                <SpreadsheetHeaderRow numberOfColumns={numberOfColumns} />
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