import React from "react";
import styled from "styled-components";
// import Badge from '@mui/material/Badge';
// import MailIcon from '@mui/icons-material/Mail';
// import { Search } from '@mui/icons-material/Search';

const Container = styled.div`
  height: 60px;
  background-color: lightgray;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
`;

const Left = styled.div`
//   border: 1px solid black;
  display: flex;
  align-items: center;
  flex: 1;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  align-items: center;
  margin-left: 20px;
`;
const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            {/* <Search/> */}
          </SearchContainer>
        </Left>
        <Center>
          <Logo>DANI.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          {/* <MenuItem>
            <Badge badgeContent={4} color="primary">
              <MailIcon color="action" />
            </Badge>
          </MenuItem> */}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
