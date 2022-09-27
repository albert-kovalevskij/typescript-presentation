import { Slide, FlexBox, Heading, Text } from "spectacle";

const Slide06 = () => (
  <Slide backgroundColor="white">
    <FlexBox height="100%" flexDirection="column">
      <Heading margin="0px" fontSize="h3" color="black">
        A Result You Can Trust
      </Heading>

      <Text margin="0px" fontSize="48px" color="black">
        TypeScript code converts to JavaScript, which{" "}
        <strong>runs anywhere JavaScript runs</strong>: In a browser, on Node.js
        or Deno and in your apps.
      </Text>
    </FlexBox>
  </Slide>
);

export default Slide06;
