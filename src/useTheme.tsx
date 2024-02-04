import React from "react";

export interface ThemeDefinitionProps {
    color: string;
    backgroundColor: string
}

export interface ThemeDefinition {
    evenRows?: ThemeDefinitionProps;
    oddRows?: ThemeDefinitionProps;
    evenCellValues?: ThemeDefinitionProps;
    oddCellValues?: ThemeDefinitionProps;
}

export function createThemeContext() {
    return React.createContext<ThemeDefinition>({})
}