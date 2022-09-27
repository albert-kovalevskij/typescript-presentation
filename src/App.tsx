import "./App.css";
import { AnimatedProgress, Box, Deck, FlexBox, FullScreen } from "spectacle";
import customTheme from "./theme/default-theme";
import Slide01 from "./slides/01";
import Slide02 from "./slides/02";
import Slide03 from "./slides/03";
import Slide04 from "./slides/04";
import Slide05 from "./slides/05";
import Slide06 from "./slides/06";
import Primitives from "./slides/07_Primitives";
import Arrays from "./slides/08_Arrays";
import Any from "./slides/09_Any";
import AnyExample from "./slides/10_AnyExample";
import TypeAnnotationsOnVariables from "./slides/11_TypeAnnotationsOnVariables";
import Functions from "./slides/12_Functions";
import ParameterTypeAnnotations from "./slides/13_ParameterTypeAnnotations";
import ReturnTypeAnnotations from "./slides/14_ReturnTypeAnnotations";
import ObjectTypes from "./slides/15_ObjectTypes";
import ObjectTypeExample from "./slides/16_ObjectTypeExample";
import OptionalProperties from "./slides/17_OptionalProperties";
import OptionalPropertyCheck from "./slides/18_OptionalPropertyCheck";
import UnionTypes from "./slides/19_UnionTypes";
import DefiningUnionType from "./slides/20_DefiningUnionType";
import DefiningUnionTypeExample from "./slides/21_DefiningUnionTypeExample";
import WorkingWithUnionTypes from "./slides/22_WorkingWithUnionTypes";
import WorkingWithUnionTypesSolution from "./slides/23_WorkingWithUnionTypesSolution";
import UnionTypesContinuation from "./slides/24_UnionTypesContinuation";
import UnionTypesContinuation2 from "./slides/25_UnionTypesContinution2";
import TypeAliases from "./slides/26_TypeAliases";
import TypeAliasesExample from "./slides/27_TypeAliasesExample";
import TypeAliasesExample2 from "./slides/28_TypeAliasesExample2";
import TypeAliasesExample3 from "./slides/29_TypeAliasesExample3";
import Interfaces from "./slides/30_Interfaces";
import DifferencesBetweenTypeAliasesAndInterfaces from "./slides/31_DifferencesBetweenTypeAliasesAndInterfaces";
import DifferencesBetweenTypeAliasesAndInterfaces2 from "./slides/32_DifferencesBetweenTypeAliasesAndInterfaces2";
import DifferencesBetweenTypeAliasesAndInterfaces3 from "./slides/33_DifferencesBetweenTypeAliasesAndInterfaces3";
import TypeAssertions from "./slides/34_TypeAssertions";
import TypeAssertionsComplexCoercions from "./slides/36_TypeAssertionsComplexCoercions";
import LiteralTypes from "./slides/37_LiteralTypes";
import LiteralTypes2 from "./slides/38_LiteralTypes2";
import LiteralTypes3 from "./slides/39_LiteralTypes3";
import LiteralTypes4 from "./slides/40_LiteralTypes4";
import LiteralTypes5 from "./slides/41_LiteralTypes5";
import LiteralInference from "./slides/42_LiteralInference";
import LiteralInferenceStrings from "./slides/43_LiteralInferenceStrings";
import LiteralInferenceStringsSolutions from "./slides/44_LiteralInferenceStringsSolutions";
import NullAndUndefined from "./slides/45_NullAndUndefined";
import StrictNullChecksOff from "./slides/46_strictNullChecksOff";
import StrictNullChecksOn from "./slides/47_strictNullChecksOn";
import NonNullAssertionOperator from "./slides/48_NonNullAssertionOperator";
import TypeAssertionsContinuation from "./slides/35_TypeAssertionsContinuation";
import LessCommonPrimitives from "./slides/49_LessCommonPrimitives";
import SymbolPrimitive from "./slides/50_SymbolPrimitive";
import Enums from "./slides/51_Enums";
import NumericEnums from "./slides/52_NumericEnums";
import UsingEnum from "./slides/53_UsingEnum";
import StringEnums from "./slides/54_StringEnums";

const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <AnimatedProgress color="black" />
    </Box>
  </FlexBox>
);

function App() {
  return (
    <Deck theme={customTheme} template={template}>
      <Slide01 />
      <Slide02 />
      <Slide03 />
      <Slide04 />
      <Slide05 />
      <Slide06 />
      <Primitives />
      <Arrays />
      <Any />
      <AnyExample />
      <TypeAnnotationsOnVariables />
      <Functions />
      <ParameterTypeAnnotations />
      <ReturnTypeAnnotations />
      <ObjectTypes />
      <ObjectTypeExample />
      <OptionalProperties />
      <OptionalPropertyCheck />
      <UnionTypes />
      <DefiningUnionType />
      <DefiningUnionTypeExample />
      <WorkingWithUnionTypes />
      <WorkingWithUnionTypesSolution />
      <UnionTypesContinuation />
      <UnionTypesContinuation2 />
      <TypeAliases />
      <TypeAliasesExample />
      <TypeAliasesExample2 />
      <TypeAliasesExample3 />
      <Interfaces />
      <DifferencesBetweenTypeAliasesAndInterfaces />
      <DifferencesBetweenTypeAliasesAndInterfaces2 />
      <DifferencesBetweenTypeAliasesAndInterfaces3 />
      <TypeAssertions />
      <TypeAssertionsContinuation />
      <TypeAssertionsComplexCoercions />
      <LiteralTypes />
      <LiteralTypes2 />
      <LiteralTypes3 />
      <LiteralTypes4 />
      <LiteralTypes5 />
      <LiteralInference />
      <LiteralInferenceStrings />
      <LiteralInferenceStringsSolutions />
      <NullAndUndefined />
      <StrictNullChecksOff />
      <StrictNullChecksOn />
      <NonNullAssertionOperator />
      <LessCommonPrimitives />
      <SymbolPrimitive />
      <Enums />
      <NumericEnums />
      <UsingEnum />
      <StringEnums />
    </Deck>
  );
}

export default App;
