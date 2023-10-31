import React from 'react';
import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Preview,
} from '@react-email/components';

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Body>
        <Container>
          <Text>Hello {name}</Text>
          <Link href="http://cypher-agency.net">www.cypher-agency.net</Link>
        </Container>
      </Body>
    </Html>
  );
};
export default WelcomeTemplate;
