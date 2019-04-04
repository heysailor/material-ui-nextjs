import React from 'react';
import { AppComponentProps } from 'next/app';
import { ThemeProvider, StylesProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import initPageContext, { MaterialPageContext } from './initPageContext';

// withMaterial wraps <App> in the Material UI Theme and Styles providers.

// noStylesGeneration prop is optional - but handy if using eg apollo's getDataFromTree, where it can be passed in app props.
// Setting to true speeds up processing as sheets are not made.
export interface Props {
  noStylesGeneration?: boolean;
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
      const { noStylesGeneration } = this.props;
      return (
        <ThemeProvider theme={this.pageContext.theme}>
          <StylesProvider disableGeneration={noStylesGeneration}>
            <CssBaseline />
            <App {...this.props} pageContext={this.pageContext} />
          </StylesProvider>
        </ThemeProvider>
      );
    }
  };
};
