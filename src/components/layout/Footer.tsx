import { styled } from 'styled-components';

const Footer = () => {
  return (
    <FooterBox>
      <DescriptionBox>d</DescriptionBox>
    </FooterBox>
  );
};

const FooterBox = styled.footer`
  width: inherit;
  height: 15.625rem;
  border: 0.0625rem solid #e1e2e3;
  margin-top: auto;
`;
const DescriptionBox = styled.div`
  width: 959px;
  height: 100%;
  margin: 0 auto;
`;

export default Footer;
