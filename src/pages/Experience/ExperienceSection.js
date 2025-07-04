import React from "react";
import {
  Background,
  StyledContainer,
  StyledTitle,
  ExpList,
  ExpItem,
  ExpLogo,
  ExpTextBlock,
  ExpRole,
  ExpCompany,
  ExpDate,
  ExpDesc,
  StyledLink
} from "./ExperienceSectionElements";
import osuLogo from "../../img/osu_logo.png"; // Use your logo or lab logo
import daiLogo from "../../img/dai_logo.png";
import furtherLogo from "../../img/further_logo.png";

const Experience = () => (
  <Background id="experience">
    <StyledContainer>
      <StyledTitle>Experience</StyledTitle>
      <ExpList>
        <ExpItem>
          <ExpLogo src={osuLogo} alt="Ohio State University Logo"/>
          <ExpTextBlock>
            <ExpRole>Graduate Research Assistant</ExpRole>
            <ExpCompany>
              <StyledLink href="https://u.osu.edu/pcvlab/" target="_blank" rel="noopener noreferrer">
                Photogrammetric Computer Vision Lab
              </StyledLink>
              {", The Ohio State University ● Columbus, OH, USA"}
            </ExpCompany>
            <ExpDate>Aug 2024 — Present</ExpDate>
            <ExpDesc>
              <li>Research on multi-modal learning.</li>
              <li>Fine-tuning large language models (GPT, LLaMA, etc.).</li>
                <span style={{ color: "#6c7a7a", fontStyle: "italic", fontSize: "0.9em" }}>
                  See Projects section for full details.
                </span>
            </ExpDesc>
          </ExpTextBlock>
        </ExpItem>
        <ExpItem>
          <ExpLogo src={daiLogo} alt="DAI-Labor Logo" style={{ width: "68px", height: "68px" }}/>
          <ExpTextBlock>
            <ExpRole>AI Researcher Intern</ExpRole>
            <ExpCompany>
              <StyledLink href="https://dai-labor.de/en/home/" target="_blank" rel="noopener noreferrer">
                DAI-Labor (Distributed Artificial Intelligence Laboratory)
              </StyledLink>
              {", TU Berlin ● Berlin, Germany"}
            </ExpCompany>
            <ExpDate>Jul 2023 — Sep 2023</ExpDate>
            <ExpDesc>
              <li>Implemented live object detection.</li>
                <span style={{ color: "#6c7a7a", fontStyle: "italic", fontSize: "0.9em" }}>
                  See Projects section for full details.
                </span>
            </ExpDesc>
          </ExpTextBlock>
        </ExpItem>
        <ExpItem>
          <ExpLogo src={furtherLogo} alt="Further Network Logo" style={{ width: "68px", height: "68px" }}/>
          <ExpTextBlock>
            <ExpRole>Software Developer Intern</ExpRole>
            <ExpCompany>
              <StyledLink href="https://further.network/" target="_blank" rel="noopener noreferrer">
                Further Network
              </StyledLink>
              {" ● Istanbul, Turkey"}
            </ExpCompany>
            <ExpDate>Jul 2022 — Aug 2022</ExpDate>
            <ExpDesc>
              <li>Improved travel planning app (React Native); developed front-end features and user flows.</li>
            </ExpDesc>
          </ExpTextBlock>
        </ExpItem>
      </ExpList>
    </StyledContainer>
  </Background>
);

export default Experience;
