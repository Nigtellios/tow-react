import React from 'react';
import styled from 'styled-components';

function Footer(props) {
  return(
    <FooterWrapper>
      <h1>{props.text}</h1>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  display: flex;
  width: 100%;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
`

export default Footer;