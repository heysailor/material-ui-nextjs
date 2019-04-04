import { Theme } from '@material-ui/core/styles';
import { ServerStyleSheets } from '@material-ui/styles';
import theme from '../theme/theme';
// import { SheetsRegistry, GenerateClassName } from 'jss';

export interface MaterialPageContext {
  theme: Theme;
  sheets: ServerStyleSheets;
  // sheetsRegistry: SheetsRegistry;
  // sheetsManager: Map<any, any>;
  // generateClassName: GenerateClassName;
}

function createPageContext() {
  return {
    theme,
    sheets: new ServerStyleSheets()
    // // This is needed in order to deduplicate the injection of CSS in the page.
    // sheetsManager: new Map(),
    // // This is needed in order to inject the critical CSS.
    // sheetsRegistry: new SheetsRegistry(),
    // // The standard class name generator.
    // generateClassName: createGenerateClassName()
  };
}

let pageContext: MaterialPageContext;

export default function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!(process as any).browser) {
    return createPageContext();
  }

  // Reuse context on the client-side.
  if (!pageContext) {
    pageContext = createPageContext();
  }

  return pageContext;
}
