import { Slide, CodePane } from "spectacle";

const DifferencesBetweenTypeAliasesAndInterfaces3 = () => (
  <Slide backgroundColor="white">
    <CodePane language="typescript">
    {`
    interface Window {
      title: string
    }
    
    interface Window {
      ts: TypeScriptAPI
    }
    
    const src = 'const a = "Hello World"';
    window.ts.transpileModule(src, {});

    type Window = {
      title: string
    }
    
    type Window = {
      ts: TypeScriptAPI
    }
    
     // Error: Duplicate identifier 'Window'.    
    `}
    </CodePane>
  </Slide>
);

export default DifferencesBetweenTypeAliasesAndInterfaces3;
