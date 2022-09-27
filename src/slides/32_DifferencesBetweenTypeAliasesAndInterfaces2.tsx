import { Slide, CodePane } from "spectacle";

const DifferencesBetweenTypeAliasesAndInterfaces2 = () => (
  <Slide backgroundColor="white">
    <CodePane language="typescript">
      {`
    interface Animal {
      name: string
    }
    
    interface Bear extends Animal {
      honey: boolean
    }
    
    const bear = getBear() 
    bear.name
    bear.honey

    type Animal = {
      name: string
    }
    
    type Bear = Animal & { 
      honey: boolean 
    }
    
    const bear = getBear();
    bear.name;
    bear.honey;      
    `}
    </CodePane>
  </Slide>
);

export default DifferencesBetweenTypeAliasesAndInterfaces2;
