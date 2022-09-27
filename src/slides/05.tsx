import { Slide, FlexBox, Heading, Text } from "spectacle";

const Slide05 = () => (
  <Slide backgroundColor="white">
    <FlexBox height="100%" flexDirection="column">
      <Heading margin="0px" fontSize="h3" color="black">
        Safety at Scale
      </Heading>

      <Text margin="0px" fontSize="48px" color="black">
        TypeScript understands JavaScript and uses{" "}
        <strong>type inference to give you great tooling</strong> without
        additional code.
      </Text>
    </FlexBox>
  </Slide>
);

export default Slide05;
