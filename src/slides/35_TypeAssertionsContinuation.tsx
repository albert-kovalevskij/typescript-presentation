import { Slide, Text, CodePane, Notes } from "spectacle";

const TypeAssertionsContinuation = () => (
  <Slide backgroundColor="white">
    <Text fontSize="30px">
      Like a type annotation, type assertions are removed by the compiler and
      won’t affect the runtime behavior of your code.
    </Text>
    <Text fontSize="30px">
      You can also use the angle-bracket syntax (except if the code is in a{" "}
      <code>.tsx</code>{" "}
      file), which is equivalent:
    </Text>
    <CodePane language="typescript">
      {`
    const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");    
    `}
    </CodePane>
    <Notes>
      <Text fontSize="30px">
        Reminder: Because type assertions are removed at compile-time, there is
        no runtime checking associated with a type assertion. There won’t be an
        exception or null generated if the type assertion is wrong.
      </Text>
    </Notes>
  </Slide>
);

export default TypeAssertionsContinuation;
