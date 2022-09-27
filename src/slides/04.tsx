import { Slide, FlexBox, Heading, Text } from "spectacle";

const Slide04 = () => (
  <Slide backgroundColor="white">
    <FlexBox height="100%" flexDirection="column">
      <Heading margin="0px" fontSize="h3" color="black">
        JavaScript and More
      </Heading>

      <Text margin="0px" fontSize="48px" color="black">
        TypeScript adds additional syntax to JavaScript to support a{" "}
        <strong>tighter integration with your editor</strong>. Catch errors
        early in your editor.
      </Text>
    </FlexBox>
  </Slide>
);

export default Slide04;
