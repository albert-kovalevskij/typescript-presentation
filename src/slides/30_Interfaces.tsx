import { Slide, Heading, Text, CodePane, Notes } from "spectacle";

const Interfaces = () => (
  <Slide backgroundColor="white">
    <Heading color="black">Interfaces</Heading>
    <Text fontSize="30px">
      An <em>interface declaration</em> is another way to name an object type:
    </Text>
    <CodePane language="typescript">
      {`
    interface Point {
      x: number;
      y: number;
    }
     
    function printCoord(pt: Point) {
      console.log("The coordinate's x value is " + pt.x);
      console.log("The coordinate's y value is " + pt.y);
    }
     
    printCoord({ x: 100, y: 100 });
    `}
    </CodePane>
    <Notes>
      <Text fontSize="30px">
        Just like when we used a type alias above, the example works just as if
        we had used an anonymous object type. TypeScript is only concerned with
        the structure of the value we passed to printCoord - it only cares that
        it has the expected properties. Being concerned only with the structure
        and capabilities of types is why we call TypeScript a structurally typed
        type system.
      </Text>
    </Notes>
  </Slide>
);

export default Interfaces;
