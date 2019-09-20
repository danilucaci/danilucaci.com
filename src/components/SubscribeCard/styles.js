import styled, { keyframes } from "styled-components";
import { theme, mediaMin, rem } from "../../theme/theme";
import { Copy } from "../Copy/Copy";
import MCSubmitButton from "../MCSubmitButton/MCSubmitButton";

export const SubscribeCardWrapper = styled.aside`
  width: 100%;
  background-color: ${theme.color.background.section.subscribeCard};
`;

export const H2 = styled.h2`
  margin-bottom: ${rem(16)};

  ${mediaMin.m`
    text-align: center;
  `};
`;

export const CardCopy = styled(Copy)`
  ${mediaMin.m`
    text-align: center;
    max-width: ${rem(620)};
    margin-left: auto;
    margin-right: auto;
  `};
`;

export const FormContainer = styled.div`
  margin-top: ${rem(48)};

  ${mediaMin.m`
    max-width: ${rem(648)};
    margin-top: ${rem(40)};
    margin-left: auto;
    margin-right: auto;
  `};
`;

export const InputsWrapper = styled.div`
  display: block;
  width: 100%;
`;

export const StyledLabel = styled.label`
  display: inline-block;
  width: 100%;

  position: relative;

  ${mediaMin.m`
    width: calc(70% - ${rem(8)});
    margin-right: ${rem(16)};
    display: inline-block;
    vertical-align: middle;
  `};
`;

export const StyledMCSubmitButton = styled(MCSubmitButton)`
  margin-top: ${rem(16)};

  ${mediaMin.m`
    margin-top: 0;
    width: calc(30% - ${rem(8)});
    display: inline-block;
    vertical-align: middle;
  `};
`;

export const FadeIn = keyframes`
  from, 0% {
      opacity: 0;
  }
  to, 100% {
      opacity: 1;
  }
 `;

export const StatusMessageWrapper = styled.div`
  white-space: pre-line;
  will-change: opacity;
  animation: ${FadeIn} 500ms ease forwards;

  ${mediaMin.m`  
    padding-bottom: ${rem(24)};
  `};
`;

export const StatusMessageSubtitle = styled.p`
  color: ${theme.color.text.subdued};
  font-size: ${theme.font.size.display.mobile.subtitle};
  line-height: ${theme.font.lineHeight.display.mobile.subtitle};

  margin-top: ${rem(24)};

  font-family: ${theme.font.family.display.fallback};
  font-weight: 400;

  .fonts-loaded & {
    font-family: ${theme.font.family.body.regular};
  }

  ${mediaMin.s`
    font-size: ${theme.font.size.display.desktop.subtitle};
    line-height: ${theme.font.lineHeight.display.desktop.subtitle};
  `};

  ${mediaMin.m`
    text-align: center;
    max-width: ${rem(744)};
    margin-left: auto;
    margin-right: auto;
  `};
`;
