import { Slide, Text, Heading, CodePane } from "spectacle";

const NumericEnums = () => (
  <Slide backgroundColor="white">
    <Heading color="black">Numeric Enums</Heading>
    <Text fontSize="30px">
      We’ll first start off with numeric enums, which are probably more familiar
      if you’re coming from other languages. An enum can be defined using the{" "}
      <code>enum</code> keyword.
    </Text>
    <CodePane language="typescript">{`
    enum Direction {
      Up = 1,
      Down,
      Left,
      Right,
    }
    `}</CodePane>
    <Text fontSize="30px">
      Above, we have a numeric enum where <code>Up</code> is initialized with{" "}
      <code>1</code>. All of the following members are auto-incremented from
      that point on. In other words, <code>Direction.Up</code> has the value{" "}
      <code>1</code>, Down has <code>2</code>, Left has <code>3</code>, and
      Right has <code>4</code>.
    </Text>
  </Slide>
);

export default NumericEnums;
