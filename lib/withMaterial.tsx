import React from 'react';
import { AppComponentProps } from 'next/app';
import { ThemeProvider, StylesProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';
import initPageContext, { MaterialPageContext } from './initPageContext';

export interface Props {
  [key: string]: any;
}

export interface MaterialAppComponentProps extends AppComponentProps {
  pageContext: MaterialPageContext;
}

export default (App: any) => {
  return class WithMaterial extends React.Component<Props> {
    static displayName = `WithMaterial(${App.displayName})`;
    private pageContext: MaterialPageContext;

    constructor(props: Props) {
      super(props);
      this.pageContext = initPageContext();
    }

    render() {
      const { apolloGetData } = this.props;
      return (
        <ThemeProvider theme={this.pageContext.theme}>
          <StylesProvider disableGeneration={apolloGetData}>
            <CssBaseline />
            <App {...this.props} pageContext={this.pageContext} />
          </StylesProvider>
        </ThemeProvider>
      );
    }
  };
};
