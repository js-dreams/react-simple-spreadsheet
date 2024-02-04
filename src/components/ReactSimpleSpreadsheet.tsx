import '../rss.scss';
import React from "react";
import {SpreadsheetsList} from "./SpreadsheetsList";
import {SpreadsheetView} from "./SpreadsheetView";

const initialStateExample = {
    "Sheet 1": [[1,2,3],[4,5,6],[7,8,9]],
    "Sheet 2": [[1,2],[10,5]],
    "Sheet 3": [[1],[5],[10],[20],[30]],
}

export function ReactSimpleSpreadsheet() {

    const [mainState, setMainState] = React.useState(initialStateExample);
    const [selectedSheets, setSelectedSheets] = React.useState([]);

    const onToggleSelection = (sheetName: string) => {
        const newSelectedState = [...selectedSheets];
        if (selectedSheets.includes(sheetName as never)) {
            newSelectedState.splice(newSelectedState.indexOf(sheetName as never), 1);
        }
        else {
            newSelectedState.push(sheetName as never);
        }
        setSelectedSheets(newSelectedState);
    }

    const getDataBySheetName = (sheetName: string): number[][] => {
        return (mainState as any)[sheetName];
    }

    const updateSpreadsheetData = (sheetName: string, data: number[][]) => {
        setMainState({
            ...mainState,
            [sheetName]: data
        })
    }

    return (
        <div className={'rss-main-container'}>
            <div className={'right-panel'}>
                <SpreadsheetsList list={Object.keys(mainState)}
                                  selectedSheets={selectedSheets}
                                  toggleSelection={onToggleSelection}
                />
                <button className={'change-theme-button'}>Change Theme</button>
            </div>
            <div className={'spreadsheets-views'}>
                {selectedSheets.map(sheetName => (
                    <SpreadsheetView key={sheetName}
                                     name={sheetName}
                                     data={getDataBySheetName(sheetName)}
                                     updateData={newData => updateSpreadsheetData(sheetName, newData)}
                    />
                ))}
                {!selectedSheets.length ?
                    <div className={'empty-selection-msg'}>No spreadsheet selected</div> : null}
            </div>
        </div>
    )
}