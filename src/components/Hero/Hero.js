import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
 <Section row nopadding>
   <LeftSection>
     <SectionTitle main center>
      Welcome To <br/>
      Arjun's Web Dev Portfolio
     </SectionTitle>
      <SectionText>
      A Full-Stack Web Developer who is passionate to build great and powerful Websites. I can help make your Business idea turn into a Fully Functional Product.

      </SectionText>

      <Button onClick={() =>window.location = "https://www.linkedin.com/in/arjun-gupta-2b842a175/" }>Contact Me</Button>

   </LeftSection>
 </Section>

);

export default Hero;