import { Text, TextProps, useBreakpointValue } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props extends TextProps {
  children: ReactNode;
  maxLen: { [key: string]: number };
}

const TextMaxLength = ({ children, maxLen }: Props) => {
  const responsiveMaxLen = useBreakpointValue(maxLen) ?? 20;
  const stringChildren = children?.toString() ?? "";

  const resultText =
    stringChildren.length > responsiveMaxLen
      ? stringChildren.substring(0, responsiveMaxLen) + "..."
      : stringChildren;

  return <Text>{resultText}</Text>;
};

export default TextMaxLength;
