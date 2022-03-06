import styled from 'styled-components';

function Banner(props) {
  return (
    <BannerWrapper>
      <BannerText>
        {props.text}
      </BannerText>
    </BannerWrapper>
  );
}

const BannerWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding: 20px;
`;

const BannerText = styled.h1`
  font-size: 48px;
  line-height: 48px;
`

export default Banner;