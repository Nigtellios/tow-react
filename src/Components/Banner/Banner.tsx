import React from 'react';
import styled from 'styled-components';
import rem from "../../Global/utils/PxToRem";

function Banner({ text }: { text: string }) {
  return (
    <section>
      <BannerWrapper>
        <BannerText>
          { text }
        </BannerText>
      </BannerWrapper>
    </section>
  );
}

const BannerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin: ${ rem(20) };
`;

const BannerText = styled.h1`
  font-size: ${ rem(48) };
  line-height: ${ rem(48) };
`;

export default Banner;
