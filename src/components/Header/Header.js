import Link from 'next/link'; 
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href='/'>
        <a style={{ display:'flex', alignItems: 'center', color:'white'}}>
        <DiCssdeck size="3rem"/> <Span >Portfolio</Span>
        </a>
      </Link>
    </Div1>

    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Project</NavLink>
        </Link>
      </li>

      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>

      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>

    <Div3>
      <SocialIcons href="https://github.com/arjuncodearjun">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/arjun-gupta-2b842a175/">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/hey_its_arjun/">
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.youtube.com/channel/UC6d0u8mBftZ5285oZPEqKEA">
        <AiFillYoutube size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
