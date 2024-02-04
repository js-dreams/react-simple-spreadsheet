import React from "react";

export function SpreadsheetsList(props: {
    list: string[],
    selectedSheets: string[],
    toggleSelection: (sheetName: string) => void
}) {

    return (
        <div className={'spreadsheets-list'}>
            <div className={'header'}>Spreadsheets:</div>
            {props.list.map(spreadsheetName => {
                const classes = 'spreadsheet-list-item ' + (props.selectedSheets.includes(spreadsheetName) ? 'selected' : '');
                return (
                    <div key={spreadsheetName}
                         className={classes}
                         onClick={() => props.toggleSelection(spreadsheetName)}>{spreadsheetName}</div>
                )
            })}
        </div>
    )
}