import React from 'react';
import styled from 'styled-components';
import rem from "../../Global/utils/PxToRem";
import media from "../../Global/utils/MediaQueries";

function Header( {logotype, logotypeAlt} ) {
  return (
    <HeaderWrapper>
      <Logotype>
        <img src={logotype} alt={logotypeAlt}/>
      </Logotype>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  width: 100%;
  padding: ${rem(10)};
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-content: center;
  align-items: center;

  ${media.min('lg')} {
    padding: ${rem(25)};
  }

  &:hover {
    background: aqua;
  }
`;

const Logotype = styled.div`
  display: block;
`;

export default Header;