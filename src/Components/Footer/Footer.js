import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

function Footer({ text }) {
  return(
    <FooterWrapper>
      <h1>{text}</h1>
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

Footer.propTypes = {
  text: PropTypes.string
}

export default Footer;