import { CodePane, Slide, Text } from "spectacle";

const LiteralTypes4 = () => (
  <Slide backgroundColor="white">
    <Text fontSize="30px">
      But by <em>combining</em> literals into unions, you can express a much
      more useful concept - for example, functions that only accept a certain
      set of known values:
    </Text>
    <CodePane language="typescript">
      {`
    function printText(s: string, alignment: "left" | "right" | "center") {
      // ...
    }
    printText("Hello, world", "left");
    printText("G'day, mate", "centre");
    Argument of type '"centre"' is not assignable to parameter of type '"left" | "right" | "center"'.
    `}
    </CodePane>
    <a href="https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwGYAsBWAsAFABmArgHYDGALgJZxmgAO0NZVAKpAB5UAUKoRFRZkA5gBpQAQwA2NUWQC2kNqgBEMyESprQAH1BqWogBY79hiiqow1ASlABvQqFAhQAOi+EAvoWasHNx8agASkDIycJIA7ggyACZqkhpaOnYA3P4iQTy8agDiAOQJUgCekopSNsmW1tCQ9hlAA">
      Try it
    </a>
    <Text fontSize="30px">Numeric literal types work the same way:</Text>
    <CodePane language="typescript">
    {`
    function compare(a: string, b: string): -1 | 0 | 1 {
      return a === b ? 0 : a > b ? 1 : -1;
    }
    `}
    </CodePane>
    <a href="https://www.typescriptlang.org/play/#code/GYVwdgxgLglg9mABBOBbADgQwE4FMAUmAXIgM5TYxgDmANIgEYnmU0CUJAtAIyIA+iAAz9EvAN4BYAFCJEeKCGxJMiALzrGiAPxDEJFQD5NO3l24BuaQF8gA">
      Try it
    </a>
  </Slide>
);

export default LiteralTypes4;
