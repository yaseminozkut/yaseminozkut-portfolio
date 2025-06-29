import React, { useRef } from "react";
import {
  SectionContainer, SectionTitle, PapersRow, Card,
  CardMediaWrapper, CardCoverImg, CardVideo,
  CardContent, CardTitleRow, CardTitle,
  GithubIcon, CardSubtitle, CardDesc, CardTag, Background
} from "./PapersSectionElements";
import { FaGithub } from "react-icons/fa";

import eyeVideo from "../../img/eye_video.mp4";
import eyeCover from "../../img/eye_cover.png";

// Utility to check for mobile
const IS_MOBILE = typeof window !== "undefined" && /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

const paperList = [
  {
    cover: eyeCover,
    video: eyeVideo,
    title: "ERDES: A Benchmark Dataset for Retinal Detachment Classification in Spatiotemporal Ocular Ultrasound",
    subtitle: (
      <>
        Pouyan Navard, <b>Yasemin Ozkut</b>, Srikar Adhikari, Alper Yilmaz
        <br />
        <i>Nature Scientific Data 2025 (Soon)</i>
        <br />
        <a
          href="https://osupcvlab.github.io/ERDES-3D/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#4400e6", textDecoration: "none" }}
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
              if (!IS_MOBILE && videoRefs.current[i]?.current) {
                videoRefs.current[i].current.currentTime = 0;
                videoRefs.current[i].current.play();
              }
            };
            const handleMouseLeave = () => {
              if (!IS_MOBILE && videoRefs.current[i]?.current) {
                videoRefs.current[i].current.pause();
                videoRefs.current[i].current.currentTime = 0;
              }
            };

            return (
              <Card
                key={i}
                className={proj.video ? "has-video" : ""}
                onMouseEnter={!IS_MOBILE && proj.video ? handleMouseEnter : undefined}
                onMouseLeave={!IS_MOBILE && proj.video ? handleMouseLeave : undefined}
              >
                <CardMediaWrapper>
                  {proj.video && IS_MOBILE ? (
                    <CardVideo
                      ref={videoRefs.current[i]}
                      src={proj.video}
                      muted
                      loop
                      autoPlay
                      playsInline
                      preload="auto"
                      tabIndex={-1}
                      aria-hidden="true"
                      style={{ opacity: 1, position: "relative", pointerEvents: "auto" }}
                    />
                  ) : (
                    <>
                      <CardCoverImg src={proj.cover} alt={proj.title} />
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
                    </>
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
