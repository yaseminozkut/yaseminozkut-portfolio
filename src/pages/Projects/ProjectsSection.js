import React, { useRef } from "react";
import {
  SectionContainer, SectionTitle, ProjectsRow, Card,
  CardMediaWrapper, CardCoverImg, CardVideo,
  CardContent, CardTitleRow, CardTitle,
  GithubIcon, CardSubtitle, CardDesc, CardTag, Background
} from "./ProjectsSectionElements";
import { FaGithub } from "react-icons/fa";

// Replace with your assets!
import daiLabVideo from "../../img/dai-labor-demo.mp4";
import daiLabCover from "../../img/dai-labor-cover.png";
import osuCover from "../../img/osu_logo.png";

const projectList = [
  {
    cover: daiLabCover,
    video: daiLabVideo,
    title: "Live Object Detection",
    github: "https://github.com/your/repo",
    subtitle: "DAI-Labor, TU Berlin",
    desc: "YOLOv8 model for live object detection in supermarkets. Used webcam and OCR pipeline for real-time product recognition.",
    tag: null
  },
  {
    cover: osuCover,
    video: null,
    title: "Chest X-Ray VLM (Ongoing)",
    subtitle: "Photogrammetric Computer Vision Lab, OSU",
    desc: "Developing a multi-modal VLM for chest X-ray image/report generation, integrating large language and vision models.",
    tag: "Ongoing"
  }
];

export default function ProjectsSection() {
  const videoRefs = useRef([]);
  // Initialize refs if not already created
  if (videoRefs.current.length !== projectList.length) {
    videoRefs.current = Array(projectList.length)
      .fill()
      .map((_, i) => videoRefs.current[i] || React.createRef());
  }

  return (
    <Background>
      <SectionContainer id="projects">
        <SectionTitle>Projects</SectionTitle>
        <ProjectsRow>
          {projectList.map((proj, i) => {
            const handleMouseEnter = () => {
              if (videoRefs.current[i]?.current) {
                videoRefs.current[i].current.currentTime = 0;
                videoRefs.current[i].current.play();
              }
            };
            const handleMouseLeave = () => {
              if (videoRefs.current[i]?.current) {
                videoRefs.current[i].current.pause();
                videoRefs.current[i].current.currentTime = 0;
              }
            };

            return (
              <Card
                key={i}
                onMouseEnter={proj.video ? handleMouseEnter : undefined}
                onMouseLeave={proj.video ? handleMouseLeave : undefined}
              >
                <CardMediaWrapper>
                  <CardCoverImg src={proj.cover} alt={proj.title} style={{ opacity: proj.video ? 1 : 1 }} />
                  {proj.video && (
                    <CardVideo
                      ref={videoRefs.current[i]}
                      src={proj.video}
                      muted
                      loop
                      playsInline
                      preload="none"
                      tabIndex={-1}
                      aria-hidden="true"
                    />
                  )}
                </CardMediaWrapper>
                <CardContent>
                  <CardTitleRow>
                    <CardTitle>{proj.title}</CardTitle>
                    {proj.github &&
                      <GithubIcon href={proj.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                      </GithubIcon>
                    }
                    {proj.tag && <CardTag>{proj.tag}</CardTag>}
                  </CardTitleRow>
                  <CardSubtitle>{proj.subtitle}</CardSubtitle>
                  <CardDesc>{proj.desc}</CardDesc>
                </CardContent>
              </Card>
            );
          })}
        </ProjectsRow>
      </SectionContainer>
    </Background>
  );
}
