import styled from 'styled-components';

const Nav = styled.nav`
background-color: #d6d6d6;
margin: 0px;
padding: 1px;
a{
  text-decoration: none;
}
`;

const Home = styled.a`
margin: 5px;
color: black
`;

const About = styled.a`
margin: 5px;
color: gray;
`

const Ul = styled.ul`
`;

const Start = styled.a`
margin-right: 40px;
color: black;
font-size: 20px
`;

const Cart = styled.a`
position: absolute;  
right: 10px;
border: 1px solid black;
padding: 5px;
border-radius: 5px
`;

const Cart_Count = 0



function Nav_Bar() {
  return (
    <div>
      <Nav>
        <Ul>
          <Start href='#'>Start Bootstrap</Start>

          <Home href='#'>Home</Home>
          <About href='#'>About</About>
          <About href='#'>Shop</About>
          <Cart href='#'>Cart {Cart_Count}</Cart>
        </Ul>
      </Nav>
    </div>
  );
}

export default Nav_Bar;
