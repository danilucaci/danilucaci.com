import styled, { css } from "styled-components";
import { theme, rem, mediaMin, mediaMax } from "../../theme/theme";
import { BoldLink } from "../Link/Link";
import { Icon } from "../Icon/Icon";
import { CopyBold } from "../Copy/Copy";

export const PaginationWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: ${rem(32)};

  ${mediaMin.m`
    margin-top: ${rem(56)};
  `};

  ${mediaMin.xl`
    margin-top: ${rem(64)};
  `};
`;

export const StyledIcon = styled(Icon)`
  align-self: center;

  ${(props) =>
    props.isDisabled &&
    css`
      fill: ${theme.colors.grey500};
    `};
`;

export const StyledLink = styled(BoldLink)`
  text-decoration: none;
  white-space: nowrap;
  height: ${rem(48)};

  &:visited,
  &:link {
    color: ${theme.colors.grey800};
  }

  &:hover {
    color: ${theme.colors.grey800};
    background-color: ${theme.colors.grey300};
    cursor: pointer;
  }
`;

export const DisabledPrev = styled(CopyBold)`
  color: ${theme.colors.grey500};
  display: flex;
  text-align: left;
  height: ${rem(48)};
  padding: ${rem(8)} ${rem(24)} ${rem(8)} 0;
  margin-left: 0;
  margin-right: auto;
  text-decoration: none;
  white-space: nowrap;
`;

export const Prev = styled(StyledLink)`
  color: ${theme.colors.grey800};
  display: flex;
  text-align: left;

  margin-left: 0;
  margin-right: auto;
  padding: ${rem(12)} ${rem(24)} ${rem(12)} 0;

  ${mediaMax.xs`
    padding: ${rem(12)} ${rem(48)} ${rem(12)} 0;
  `};
`;

export const Next = styled(StyledLink)`
  color: ${theme.colors.grey800};
  display: flex;
  text-align: right;

  margin-right: 0;
  margin-left: auto;
  padding: ${rem(12)} 0 ${rem(12)} ${rem(24)};

  ${mediaMax.xs`
    padding: ${rem(12)} 0 ${rem(12)} ${rem(48)};
  `};
`;

export const DisabledNext = styled(CopyBold)`
  color: ${theme.colors.grey500};
  display: flex;
  text-align: right;
  text-decoration: none;
  white-space: nowrap;

  height: ${rem(48)};
  margin-left: auto;
  margin-right: 0;
  padding: ${rem(8)} 0 ${rem(8)} ${rem(16)};
`;

export const PaginationContent = styled.div`
  display: flex;
  justify-content: center;
  white-space: nowrap;

  margin-left: auto;
  margin-right: auto;
  padding-left: ${rem(16)};
  padding-right: ${rem(16)};
`;

export const MobileCopy = styled(CopyBold)`
  display: flex;
  flex: 1 1 100%;
  white-space: nowrap;
  text-align: center;

  ${mediaMin.xxxs`
    margin-left: -${rem(12)};
  `};

  ${mediaMin.s`
    margin-left: 0;
    display: none;
  `};
`;

export const PaginationLabel = styled.span`
  ${mediaMax.xxxs`
    display: none;
  `};
`;

export const PaginationNumber = styled(StyledLink)`
  border-radius: 50%;
  display: none;

  text-align: center;
  text-decoration: none;

  height: ${rem(48)};
  width: ${rem(48)};
  margin: ${rem(4)};
  padding: ${rem(12)} ${rem(8)};

  ${mediaMin.s`
    display: inline-block;
  `};
`;

export const CurrentPaginationNumber = styled(PaginationNumber)`
  background-color: ${theme.colors.grey800};
  color: ${theme.colors.grey100} !important;

  &:hover {
    background-color: ${theme.colors.grey800};
  }
`;
