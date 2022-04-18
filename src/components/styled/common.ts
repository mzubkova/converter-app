import styled from "styled-components";
import { Container, Button, TextField } from "@mui/material";

type TStMainLayout = {
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
};

type TStFlex = {
  justifyContent?: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
};

export const StMainLayout = styled(Container)<TStMainLayout>`
  background-color: #57cc99;
  ${({ width }) => width && `width: ${width}`};
  ${({ height }) => height && `height: ${height}`};
  ${({ margin }) => margin && `margin: ${margin}`};
  ${({ padding }) => padding && `padding: ${padding}`};
`;

export const StButton = styled(Button)<{ margin?: string }>`
  ${({ margin }) => margin && `margin: ${margin}!important`};
`;

export const StInput = styled(TextField)`
  display: flex;
  align-items: center;
  ${({ margin }) => margin && `margin: ${margin}!important`};
`;

export const StFlex = styled.div<TStFlex>`
  display: flex;
  align-items: center;
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent}`};
  ${({ width }) => width && `width: ${width}`};
  ${({ height }) => height && `height: ${height}`};
  ${({ backgroundColor }) =>
    backgroundColor && `background-color: ${backgroundColor}`};
`;
