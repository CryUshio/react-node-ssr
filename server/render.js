// import { StaticRouter } from 'react-router-dom';
// import { renderToString } from "react-dom/server";
// import App from '../app/page/App';

export default (props) => {
    // const context = {};
    // const content = renderToString(
    //     <StaticRouter context={ context } location={ props.url }>
    //         <App></App>
    //     </StaticRouter>
    // );
 
    const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <script>window.__APP_INITIAL_STATE__ = ${props.initialState}</script>
            <title>${props.title}</title>
        <body>
            <div id="app">${props.content}</div>
        </html>
    `;
 
    return html;
}