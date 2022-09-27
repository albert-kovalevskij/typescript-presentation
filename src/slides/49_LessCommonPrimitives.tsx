import { Slide, Text, Heading, CodePane } from "spectacle";

const LessCommonPrimitives = () => (
  <Slide backgroundColor="white">
    <Heading color="black">Less Common Primitives</Heading>
    <Text fontSize="30px">
      It’s worth mentioning the rest of the primitives in JavaScript which are
      represented in the type system. Though we will not go into depth here.
    </Text>
    <Text fontSize="30px">
      From ES2020 onwards, there is a primitive in JavaScript used for very
      large integers, <code>BigInt</code>:
    </Text>
    <CodePane language="typescript">{`
    // Creating a bigint via the BigInt function
    const oneHundred: bigint = BigInt(100);
     
    // Creating a BigInt via the literal syntax
    const anotherHundred: bigint = 100n;
    `}</CodePane>
    <a href="https://www.typescriptlang.org/play/#code/PTAEAEBcEMCcHMCmkBcpEGcBMAGXBYAKCJFAGFZFpIBLAO3lGlACMb57JQA3G5yABaJQAIXYBJOlwBmAVzoBjWgHs6RBaoxdViABLyAJpQNo2HKaAC8oiVIAUARhw4AlAG4iJMBSq0GTG3hJLl5+IVAAGxpIRFhoCNAMAE8paAAPdU0uaDplQVj9OiNEE1Z2TitQJxw6NyA">
      Try it
    </a>
  </Slide>
);

export default LessCommonPrimitives;
