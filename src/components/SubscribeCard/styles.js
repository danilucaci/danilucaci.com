import styled from "styled-components";
import { theme, mediaMin, rem } from "../../theme/globalStyles";
import { Copy } from "../Copy/Copy";
import Input from "../Input/Input";
import SubmitButton from "../SubmitButton/SubmitButton";

export const StyledSubscribeCard = styled.aside`
  background-color: ${theme.colors.gray100};
  border-top: ${rem(8)} solid ${theme.colors.main600};
  width: 100%;
  max-width: ${theme.contain.wrapper.col10};
  margin-left: auto;
  margin-right: auto;

  margin-top: ${theme.spacing.components.s};
  margin-bottom: ${theme.spacing.components.s};

  padding: ${rem(32)} ${rem(24)};

  ${mediaMin.m`
    padding: ${rem(64)} ${rem(56)} ${rem(40)} ${rem(64)};
    margin-top: ${theme.spacing.components.m};
    margin-bottom: ${theme.spacing.components.m};
  `};

  ${mediaMin.xxxl`
    padding: ${rem(64)} ${rem(120)} ${rem(56)} ${rem(144)};
    margin-top: ${theme.spacing.components.xl};
    margin-bottom: ${theme.spacing.components.xl};
  `};
`;

export const FormContainer = styled.div``;

export const StyledMCForm = styled.form`
  width: 100%;
`;

export const InputsWrapper = styled.div`
  display: block;
  width: 100%;
`;

export const StyledLabel = styled.label`
  display: inline-block;
  width: 100%;
  position: relative;

  ${mediaMin.xl`
    max-width: calc(60% - ${rem(8)});
    margin-top: 0;
    margin-right: ${rem(8)};
    display: inline-block;
    vertical-align: middle;
  `};
`;

export const StyledInput = styled(Input)`
  display: inline-block;
`;

export const StyledSubmitButton = styled(SubmitButton)`
  margin-top: ${rem(16)};

  ${mediaMin.xl`
    width: auto;
    margin-top: 0;
    margin-right: ${rem(8)};
    display: inline-block;
    vertical-align: middle;
  `};
`;

export const InputStatusIcon = styled.span`
  display: none;
  position: absolute;
  right: ${rem(16)};
  top: ${rem(12)};
  width: ${rem(24)};
  height: ${rem(24)};
`;

export const StyledH2 = styled.h2`
  margin-bottom: ${rem(16)};
  font-size: ${theme.fontSizes.h2s};
  line-height: ${theme.lineHeights.h2s};

  ${mediaMin.m`
    font-size: ${theme.fontSizes.h2};
    line-height: ${theme.lineHeights.h2};
  `};
`;

export const Subtitle = styled(Copy)`
  margin-bottom: ${rem(8)};
`;

export const AltCopy = styled(Copy)`
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeights.s};
  color: ${theme.colors.dark700};

  margin-bottom: ${rem(32)};

  ${mediaMin.m`
    margin-bottom: ${rem(24)};
  `};
`;
