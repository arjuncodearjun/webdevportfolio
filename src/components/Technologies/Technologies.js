import React from 'react';
import { DiFirebase, DiReact,DiAtom,DiHtml5,DiCss3,DiJsBadge,DiPhotoshop, DiUnitySmall, DiNodejsSmall, DiMongodb,DiPython,DiBootstrap,DiLinux  } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the Web Dev world.
      From Back-end to Design.
    </SectionText>
    <List>
      <ListItem>
        <DiHtml5 size="3rem"/>
        <ListContainer>
          <ListTitle>HTML</ListTitle>
          <ListParagraph>
            Experience with <br/>
            HTML5 for Front-End
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCss3 size="3rem"/>
        <ListContainer>
          <ListTitle>CSS</ListTitle>
          <ListParagraph>
            Experience with <br/>
            CSS3 for Front-End
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJsBadge size="3rem"/>
        <ListContainer>
          <ListTitle>JAVASCRIPT</ListTitle>
          <ListParagraph>
            Experience with <br/>
            JS for Front-End
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPhotoshop size="3rem"/>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br/>
            tools like Adobe Xd & Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
      
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>REACT.JS</ListTitle>
          <ListParagraph>
            Experience with <br/>
            React.js for Front-End
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiUnitySmall size="3rem"/>
        <ListContainer>
          <ListTitle>UNITY 3D</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Unity 3D for Game Development
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiNodejsSmall size="3rem"/>
        <ListContainer>
          <ListTitle>NODE.JS</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Node.js for Back-End
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiMongodb size="3rem"/>
        <ListContainer>
          <ListTitle>MONGO DB</ListTitle>
          <ListParagraph>
            Experience with <br/>
            MongoDB for Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPython size="3rem"/>
        <ListContainer>
          <ListTitle>PYTHON</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Python for Back-End
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiBootstrap size="3rem"/>
        <ListContainer>
          <ListTitle>BOOTSTRAP</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Bootstrap for Front-End
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle>FIREBASE</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Firebase for Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiLinux size="3rem"/>
        <ListContainer>
          <ListTitle>LINUX</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Linux OS
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
