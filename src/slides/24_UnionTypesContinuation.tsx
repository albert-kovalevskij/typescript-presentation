import { CodePane, Slide, Text } from "spectacle";

const UnionTypesContinuation = () => (
  <Slide backgroundColor="white">
    <Text fontSize="30px">
      Another example is to use a function like <code>Array.isArray</code>:
    </Text>
    <CodePane language="typescript">{`
    function welcomePeople(x: string[] | string) {
      if (Array.isArray(x)) {
        // Here: 'x' is 'string[]'
        console.log("Hello, " + x.join(" and "));
      } else {
        // Here: 'x' is 'string'
        console.log("Welcome lone traveler " + x);
      }
    }    
    `}</CodePane>
    <Text fontSize="30px">
      Notice that in the else branch, we don’t need to do anything special - if
      x wasn’t a <code>string[]</code>, then it must have been a <code>string</code>.
    </Text>
  </Slide>
);

export default UnionTypesContinuation;
