import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection , Button} from './HeroStyles';

const Hero = (props) => (
  <Section row noppadding>
    <LeftSection>
        <SectionTitle main center>
            Hello, i'm Gustavo <br/>
            Welcome to my portfolio
        </SectionTitle>
        <SectionText>
            I'm a Full Stack Web Developer passionate of both Frontend and Backend development and learning new technologies, i'm currently studyng Computer Science and i'm graduated from soyHenry's programming bootcamp.
        </SectionText>
        <Button href="/assets/Gustavo_Delatorre_CV.pdf" target="_blank" download>
          Resume
        </Button>
    </LeftSection>
  </Section>
);

export default Hero;