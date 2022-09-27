import { Slide, Text, CodePane } from "spectacle";

const TypeAliasesExample = () => (
  <Slide backgroundColor="white">
    <Text fontSize="30px">
      A type alias is exactly that - a name for any type. The syntax for a type
      alias is:
    </Text>
    <CodePane language="typescript">
      {`
    type Point = {
      x: number;
      y: number;
    };
      
    // Exactly the same as the earlier example
    function printCoord(pt: Point) {
      console.log("The coordinate's x value is " + pt.x);
      console.log("The coordinate's y value is " + pt.y);
    }
      
    printCoord({ x: 100, y: 100 });
    `}
    </CodePane>
  </Slide>
);

export default TypeAliasesExample;
