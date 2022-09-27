import { CodePane, Slide, Text } from "spectacle";

const LiteralTypes5 = () => (
  <Slide backgroundColor="white">
    <Text fontSize="20px">
      Of course, you can combine these with non-literal types:
    </Text>
    <CodePane language="typescript">
      {`
    interface Options {
      width: number;
    }
    function configure(x: Options | "auto") {
      // ...
    }
    configure({ width: 100 });
    configure("auto");
    configure("automatic");
    Argument of type '"automatic"' is not assignable to parameter of type 'Options | "auto"'.
    `}
    </CodePane>
    <a href="https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwGYAsBWAsAFACWAdgC4wBmAhgMaSgDyADmUXCYqAN6GigB3IgBMyAC1QkArgFsARjADchAL6FKUkrTYdQtDpSIBzKdEgAKAB6oWOzqAA+oAETUpZOM4CUPPqBCgAHTBqoT6JIYmZubcgiLiqACMAAzJoCpeygThkaYWru6emWEGxnnmBR4y1Gy03opAA">
      Try it
    </a>
    <Text fontSize="20px">
      There’s one more kind of literal type: boolean literals. There are only
      two boolean literal types, and as you might guess, they are the types <code>true</code>
      and <code>false</code>. The type <code>boolean</code> itself is actually just an alias for the union
      <code>true | false</code>.
    </Text>
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

export default LiteralTypes5;
