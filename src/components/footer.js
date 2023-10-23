import styled from 'styled-components';

const Footer = styled.footer`
background-color: #2e2e2e;
margin-top: 14px;
color: white;
font-size: 10px;
padding: 35px;
display: flex;
justify-content: center;
`

function Footer_Bar() {
  return (
    <div>
      <Footer>Copyright © Website 2023</Footer>
    </div>
  );
}

export default Footer_Bar;
