import {Fragment, ReactElement} from 'react';

import {
  Container,
  StyledName,
  StyledTitle,
  StyledMembers,
  StyledDetails,
  UserContainer,
  StyledPosition,
  StyledSubtitle,
} from './styled';
import {Row, Col} from 'antd';
import Avatar from 'components/Avatar/Avatar';
import ORG_IMAGE from 'assets/icons/organization.png';

const ProfileOrganization = (): ReactElement => {
  return (
    <Fragment>
      <Container>
        <Row gutter={24}>
          <Col>
            <Avatar size={100} icon={ORG_IMAGE} />
          </Col>

          <Col>
            <StyledTitle>Sample Team Name</StyledTitle>
            <StyledSubtitle>Members: 50</StyledSubtitle>
          </Col>

          <StyledDetails>
            Sample Organization Name Sample Organization Name Sample
            Organization Name Sample Organization Name Sample Organization Name
            Sample Organization Name
          </StyledDetails>
        </Row>
      </Container>

      <UserContainer>
        <StyledMembers>Members</StyledMembers>
        <Row gutter={100}>
          {[1, 2, 3, 4].map((item) => (
            <Col key={item}>
              <Avatar size={150} height={66} width={51} />
              <StyledName>Keith Montajes</StyledName>
              <StyledPosition>Positision</StyledPosition>
            </Col>
          ))}
        </Row>
      </UserContainer>
    </Fragment>
  );
};

export default ProfileOrganization;
