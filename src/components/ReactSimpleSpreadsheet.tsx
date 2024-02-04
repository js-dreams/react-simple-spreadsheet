import '../rss.scss';
import React from "react";
import {SpreadsheetsList} from "./SpreadsheetsList";
import {SpreadsheetView} from "./SpreadsheetView";
import {createThemeContext, ThemeDefinition} from "../useTheme";
import {ThemeEditor} from "./ThemeEditor";

export const ThemeContext = createThemeContext();

export function ReactSimpleSpreadsheet() {

    const [themeState, setThemeState] = React.useState({
        evenRows: {
            color: '',
            backgroundColor: ''
        },
        oddRows: {
            color: '',
            backgroundColor: ''
        },
        evenCellValues: {
            color: '',
            backgroundColor: ''
        },
        oddCellValues: {
            color: '',
            backgroundColor: ''
        },
    })
    const [mainState, setMainState] = React.useState({});
    const [themeEditorOpened, setThemeEditorOpened] = React.useState(false);
    const [selectedSheets, setSelectedSheets] = React.useState([]);

    React.useEffect(() => {
        const URL = 'https://clinch-public-documents.s3.amazonaws.com/clinch-recruitment/spreadsheet.json';

        fetch(URL, {
            method: 'get'
        }).then(async (response) => {
            const data = await response.json();
            setMainState(JSON.parse(data));
        })
    }, [])


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

    const onThemeButtonClick = () => {
        setThemeEditorOpened(!themeEditorOpened);
    }

    return (
        <ThemeContext.Provider value={themeState}>
            <div className={'rss-main-container'}>
                <div className={'right-panel'}>
                    <SpreadsheetsList list={Object.keys(mainState)}
                                      selectedSheets={selectedSheets}
                                      toggleSelection={onToggleSelection}
                    />
                    <button className={'change-theme-button ' + (themeEditorOpened ? 'editing-theme' : '')}
                            onClick={() => onThemeButtonClick()}>Change Theme</button>
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
            {themeEditorOpened ? <ThemeEditor updateThemeState={state => setThemeState(state as ThemeDefinition)}/> : null}
        </ThemeContext.Provider>
    )
}