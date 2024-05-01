import { Text, View } from "react-native";
import styled from "styled-components";

export const StyledText = styled(Text)<{
  marginLeft?: number;
  marginRight?: number;
  marginBottom?: number;
  size?: number;
  weight?: string;
  transformText?: string;
}>`
  color: white;
  font-size: ${(props: { size?: number }) => props?.size || 18}px;
  margin-left: ${(props: { marginLeft?: number }) => props.marginLeft || 0}px;
  margin-right: ${(props: { marginRight?: number }) =>
    props.marginRight || 0}px;
  margin-bottom: ${(props: { marginBottom?: number }) =>
    props.marginBottom || 0}px;
  font-weight: ${(props: { weight?: string }) => props.weight || "normal"};
  text-transform: ${(props: { transformText?: string }) =>
    props.transformText || "none"};
`;

export const StyledView = styled(View)<{
  flex?: number;
  justify?: string;
  align?: string;
  flexDirection?: string;
  marginTop?: number;
}>`
  flex: ${(props: { flex?: number }) => props.flex || 1};
  justify-content: ${(props: { justify?: string }) =>
    props.justify || "center"};
  align-items: ${(props: { align?: string }) => props.align || "center"};
    flex-direction: ${(props: { flexDirection?: string }) =>
        props.flexDirection || "column"};
    margin-top: ${(props: { marginTop?: number }) => props.marginTop || 0}px;
`;
