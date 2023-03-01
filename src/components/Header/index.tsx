import React from "react";
import { Container, Logo, Searchform, SearchIcon, } from "./styles";

const Header:React.FC = () => {
  return (
    <Container>

        <Logo />

        <Searchform>
          <SearchIcon/>

          <input type="text" placeholder="Enter an username or a repository..." />
        </Searchform>

    </Container>
  );
}

export default Header
