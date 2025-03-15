import styled from 'styled-components';
import bgImage from '../../../resources/background/background.jpg';
import { SegmentGroup } from '@chakra-ui/react';

export const Root = styled.div`
  max-width:90%;
  width: 1500px;
  max-height: 90%;
`;
export const SegmentGroupRoot = styled(SegmentGroup.Root)`
`;

export const SegmentGroupIndicator = styled(SegmentGroup.Indicator)`
`

export const SegmentGroupItems = styled(SegmentGroup.Items)`
  padding: 0 10px;
  font-weight: bold;
  cursor: pointer;
`;

export const Content = styled.section`
  height: 800px;
  max-height: 90%;
  background-color:rgba(143, 143, 143, 0.3);
`

export const ProfileRoot = styled.div`
  display: flex;
  justify-content: right;
`

export const Profile = styled.div`
  width: 200px;
  height: 50px;
  background-color:rgba(143, 143, 143, 0.3);
`