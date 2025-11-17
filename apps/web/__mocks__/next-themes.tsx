import * as React from 'react';

export const ThemeProvider = ({ children }: any) => React.createElement(React.Fragment, null, children);
export const ThemeContext = React.createContext({ theme: 'light', setTheme: () => {} });
export const useTheme = () => React.useContext(ThemeContext);
export default {
  ThemeProvider,
  useTheme,
};
