import styled from 'styled-components';
import bgImage from '../../resources/background/background.jpg';
import { SegmentGroup } from '@chakra-ui/react';

export const Root = styled.div`
  background: url(${bgImage}) no-repeat center center;
  background-size: cover;
  height: 100vh;
  width: 100vw;
`;

export const SegmentGroupItems = styled(SegmentGroup.Items)`
  padding: 0 10px;
  font-weight: bold;
`;