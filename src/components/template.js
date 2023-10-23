import styled from 'styled-components';

const Template = styled.div`
  background-color: #2e2e2e;
  margin: 0;
  padding: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const Head_Text = styled.h1`
color: white;
margin: 0;
font-size: 45px
`;


const Temp_Text = styled.p`
color: #d6d6d6;
margin: 0;

`

function Template_Area() {
  return (
    <div>
      <Template>
        <Head_Text>Shop in style</Head_Text>
        <Temp_Text>With this shop homepage template</Temp_Text>
      </Template>

    </div>
  );
}

export default Template_Area;
