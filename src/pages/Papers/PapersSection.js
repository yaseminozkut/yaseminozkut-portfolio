import React, { useRef } from "react";
import {
  SectionContainer, SectionTitle, PapersRow, Card,
  CardMediaWrapper, CardCoverImg, CardVideo,
  CardContent, CardTitleRow, CardTitle,
  GithubIcon, CardSubtitle, CardDesc, CardTag, Background
} from "./PapersSectionElements";
import { FaGithub } from "react-icons/fa";

// Replace with your assets!
import eyeVideo from "../../img/eye_video.mp4";
import eyeCover from "../../img/eye_cover.png";

const paperList = [
  {
    cover: eyeCover,
    video: eyeVideo,
    title: "ERDES: A Benchmark Dataset for Retinal Detachment Classification in Spatiotemporal Ocular Ultrasound",
    subtitle: (
                <>
                  Pouyan Navard, <b>Yasemin Ozkut</b>, Srikar Adhikari, Alper Yilmaz
                  <br></br>
                  <i>Nature Scientific Data 2025 (Soon)</i>
                  <br></br>
                  <a
                    href="/projects/erdes-3d"
                    style={{ color: "#4400e6", textDecoration: "none"}}
                  >
                    Project page
                  </a>
                </>
                
              ),
    desc: "",
  },

];

export default function PapersSection() {
  const videoRefs = useRef([]);
  // Initialize refs if not already created
  if (videoRefs.current.length !== paperList.length) {
    videoRefs.current = Array(paperList.length)
      .fill()
      .map((_, i) => videoRefs.current[i] || React.createRef());
  }

  return (
    <Background id="papers">
      <SectionContainer>
        <SectionTitle>Papers</SectionTitle>
        <PapersRow>
          {paperList.map((proj, i) => {
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
        </PapersRow>
      </SectionContainer>
    </Background>
  );
}
