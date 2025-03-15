import { Center, SegmentGroup } from '@chakra-ui/react';
import {Content, Profile, ProfileRoot, Root, SegmentGroupItems, SegmentGroupRoot} from './styled';

interface Props {
  children: React.ReactNode;
}

const PageTemplate: React.FC<Props> = ({children}) => {

  return (
    <>
      <ProfileRoot style={{width: '100vw', height: '3vh'}}>
        <Profile>

        </Profile>
      </ProfileRoot>
      
      <Center h={"97vh"} w={"100vw"}>
        <Root>
          <header>
            <SegmentGroupRoot size={"lg"} defaultValue="스피드런">
              <SegmentGroup.Indicator />
              <SegmentGroupItems  items={[ "스피드런", "타자대결", "글 작성"]}/>
            </SegmentGroupRoot>
          </header>
          <Content>
            {children}
          </Content>
        </Root>
      </Center>
    </>
  ) 
}

export default PageTemplate;