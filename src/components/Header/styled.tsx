import styled from 'styled-components';
import {theme} from 'utils/colors';

export const Container = styled.div``;
export const Headerstyles = {
  background: theme.WHITE,
  borderRadius: 6,
};

export const StyledText = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  text-align: right;
  color: ${theme.ICONS};
`;
