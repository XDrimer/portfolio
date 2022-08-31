import React, { useState, useRef, useEffect } from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';


const Timeline = () => {
  return (
    <Section id="#about">
      <SectionTitle style={{fontSize:"45px"}}>About me</SectionTitle>
      <SectionText style={{fontSize:"20px"}}>
      I am a Full Stack Developer, a Computer Science student and graduated from soyHenry's programming bootcamp.<br/><br/>

I am looking for my first job as a developer. I have experience working with NodeJS, React, Redux and SQL and other technologies wich you can see in the technologies section. I am passionate about learning new technologies by my own and also working in teams<br/><br/>

I am currently looking forward to join a technological development company, so i can put all my experience in practice in a job enviroment and also upgrade mi technical and soft skills.
      </SectionText>
    </Section>
  );
};

export default Timeline;
