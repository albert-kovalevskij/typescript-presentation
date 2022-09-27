import { Slide, Heading, Text, CodePane } from "spectacle";

const TypeAssertions = () => (
  <Slide backgroundColor="white">
    <Heading color="black">Type Assertions</Heading>
    <Text fontSize="30px">
      Sometimes you will have information about the type of a value that
      TypeScript can’t know about.
    </Text>
    <Text fontSize="30px">
      For example, if you’re using <code>document.getElementById</code>,
      TypeScript only knows that this will return some kind of{" "}
      <code>HTMLElement</code>, but you might know that your page will always
      have an <code>HTMLCanvasElement</code> with a given ID.
    </Text>
    <Text fontSize="30px">
      In this situation, you can use a <em>type assertion</em> to specify a more specific
      type:
    </Text>
    <CodePane language="typescript">{`
    const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
    `}
    </CodePane>
  </Slide>
);

export default TypeAssertions;
