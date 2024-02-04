import React from "react";
import {SpreadsheetCell} from "./SpreadsheetCell";
import {isNumberObject} from "util/types";

export function SpreadsheetHeaderRow(props: {
    numberOfColumns: number
}) {

    const columnData = Array.from(new Array(props.numberOfColumns + 1)).map((v: any, idx: number) => {
        return idx === props.numberOfColumns ? 'SUM' : String.fromCharCode('A'.charCodeAt(0) + idx);
    });

    return (
        <div className={'row header-row'}>
            {columnData.map((value: string, idx: number) => (
                <div key={idx} className={'cell'}>{value}</div>
            ))}
        </div>
    )
}