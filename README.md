# Material UI v4 with NextJS

An example of how to set up server rendering with Material UI and NextJS.

Currently, the only public example I could find uses the old Material UI v3 API.

The new ServerStyleSheets API hides most of machinery and is a lot simpler to use.

Of note, initPageContext recreates a new page context for every server-side request so data isn't shared.
