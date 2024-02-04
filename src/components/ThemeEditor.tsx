import React from "react";
import {ThemeContext} from "./ReactSimpleSpreadsheet";
import {ThemeDefinition, ThemeDefinitionProps} from "../useTheme";

export function ThemeEditor(props: {
    updateThemeState: (themeState: Partial<ThemeDefinition>) => void
}) {

    const theme = React.useContext(ThemeContext);

    const handleChange = (target: string, prop: string, val: string) => {
        props.updateThemeState({
            ...theme,
            [target]: {
                ...(theme as any)?.[target],
                [prop]: val
            } as ThemeDefinitionProps
        });
    }

    return (
        <div className={'theme-editor'}>
            <label>
                Even Rows Color:
                <input value={theme?.evenRows.color}
                       onChange={evt => handleChange('evenRows', 'color', evt.target.value)}/>
            </label>
            <label>
                Even Rows Background Color:
                <input value={theme?.evenRows.backgroundColor}
                       onChange={evt => handleChange('evenRows', 'backgroundColor', evt.target.value)}/>
            </label>
            <label>
                Odd Rows Color:
                <input value={theme?.oddRows.color}
                       onChange={evt => handleChange('oddRows', 'color', evt.target.value)}/>
            </label>
            <label>
                Odd Rows Background Color:
                <input value={theme?.oddRows.backgroundColor}
                       onChange={evt => handleChange('oddRows', 'backgroundColor', evt.target.value)}/>
            </label>
            <label>
                Even Cell Values Color:
                <input value={theme?.evenCellValues.color}
                       onChange={evt => handleChange('evenCellValues', 'color', evt.target.value)}/>
            </label>
            <label>
                Even Cell Values Background Color:
                <input value={theme?.evenCellValues.backgroundColor}
                       onChange={evt => handleChange('evenCellValues', 'backgroundColor', evt.target.value)}/>
            </label>
            <label>
                Odd Cell Values Color:
                <input value={theme?.oddCellValues.color}
                       onChange={evt => handleChange('oddCellValues', 'color', evt.target.value)}/>
            </label>
            <label>
                Odd Cell Values Background Color:
                <input value={theme?.oddCellValues.backgroundColor}
                       onChange={evt => handleChange('oddCellValues', 'backgroundColor', evt.target.value)}/>
            </label>
        </div>
    )
}