// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';


//  export const Snippet = (props:any) => {
   
 
//   return (
//     <SyntaxHighlighter language="javascript" style={docco}>
//       {props.currentData}
//     </SyntaxHighlighter>
//   );
// };

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const Snippet = (props:any) => {
  
  return (
 
    <SyntaxHighlighter language="javascript" style={dark} wrapLines={true}>
    {props.currentData}
    </SyntaxHighlighter>
    
  );
};