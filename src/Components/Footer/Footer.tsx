import React from 'react';
import styled from 'styled-components';

function Footer( { text }: { text: string } ) {
  return(
    <FooterWrapper>
      <h1>{ text }</h1>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export default Footer;