import { Slide, Text, CodePane } from "spectacle";

const ObjectTypeExample = () => (
  <Slide backgroundColor="white">
    <Text fontSize="30px">
      For example, here’s a function that takes a point-like object:
    </Text>
    <CodePane language="typescript">{`
        // The parameter's type annotation is an object type
        function printCoord(pt: { x: number; y: number }) {
          console.log("The coordinate's x value is " + pt.x);
          console.log("The coordinate's y value is " + pt.y);
        }
        printCoord({ x: 3, y: 7 });
        `}</CodePane>
    <Text fontSize="20px">
      Much like variable type annotations, you usually don’t need a return type
      annotation because TypeScript will infer the function’s return type based
      on its <code>return</code> statements. The type annotation in the above
      example doesn’t change anything. Some codebases will explicitly specify a
      return type for documentation purposes, to prevent accidental changes, or
      just for personal preference.
    </Text>
    <Text fontSize="20px">
      Here, we annotated the parameter with a type with two properties -{" "}
      <code>x</code> and <code>y</code> - which are both of type{" "}
      <code>number</code>. You can use <code>,</code> or <code>;</code> to
      separate the properties, and the last separator is optional either way.
    </Text>
    <Text fontSize="20px">
      The type part of each property is also optional. If you don’t specify a
      type, it will be assumed to be <code>any</code>.
    </Text>
  </Slide>
);

export default ObjectTypeExample;
