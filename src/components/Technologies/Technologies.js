import React from 'react';
import { DiFirebase, DiReact, DiScrum } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      I've worked with multiple technologies of both Frontend and Backend development
    </SectionText>
    <List>
      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle>Backend</ListTitle>
          <ListParagraph>
            Experiencie with <br/>
            Node.js <br/>
            Express.js <br/>
            Sequelize ORM <br/>
            SQL <br/>
            PostgreSQL <br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Frontend</ListTitle>
          <ListParagraph>
            Experiencie with <br/>
            Javascript <br/>
            ReactJS <br/>
            TypeScript <br/>
            Redux <br/>
            HTML5 <br/>
            CSS <br/>
            LESS,Boostrap,MaterialUI
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiScrum size="3rem"/>
        <ListContainer>
          <ListTitle>Extra skills</ListTitle>
          <ListParagraph>
            Knowledge of <br/>
            SCRUM agile metodology <br/>
            Native SPANISH <br/>
            Upper-intermediate ENGLISH <br/>
            Canva <br/>
            Oauth2.0 , JWT, Excel, Word
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
