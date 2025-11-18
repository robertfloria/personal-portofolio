import * as React from 'react';

export const ThemeProvider = ({ children }: { children?: React.ReactNode }) =>
  React.createElement(React.Fragment, null, children);
export const ThemeContext = React.createContext({ theme: 'light', setTheme: () => {} });
export const useTheme = () => React.useContext(ThemeContext);
const nextThemesMock = {
  ThemeProvider,
  useTheme,
};
export default nextThemesMock;
