import { Slide, Text, Heading, CodePane } from "spectacle";

const StrictNullChecksOn = () => (
  <Slide backgroundColor="white">
    <Heading color="black">
      <code>strictNullChecks</code> on
    </Heading>
    <Text fontSize="30px">
      With strictNullChecks <em>on</em>, when a value is <code>null</code> or{" "}
      <code>undefined</code>, you will need to test for those values before
      using methods or properties on that value. Just like checking for
      <code>undefined</code> before using an optional property, we can use{" "}
      <em>narrowing</em> to check for values that might be <code>null</code>:
    </Text>
    <CodePane language="typescript">{`
    function doSomething(x: string | null) {
      if (x === null) {
        // do nothing
      } else {
        console.log("Hello, " + x.toUpperCase());
      }
    }
    `}</CodePane>
    <a href="https://www.typescriptlang.org/play/#code/GYVwdgxgLglg9mABAEzgZTgWwKZQBYxgDmAFAB4BciAzlAE6FGIA+iYIANhwJSIDeAWABQiRDGCJyiALyy2nHv2GjRAelUo4bOPkbLEAX0TYO1bEpEqICanA7YAdBzikARAAkTzgDSJXiAGpEMgcoOABVAAdI7DoAYQBDMxJubgBufQNhAyA">
      Try it
    </a>
  </Slide>
);

export default StrictNullChecksOn;
