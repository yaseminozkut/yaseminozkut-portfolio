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
    github: "https://github.com/OSUPCVLab/ERDES",
    subtitle: (
      <>
        Pouyan Navard, <b>Yasemin Ozkut</b>, Srikar Adhikari, Alper Yilmaz
        <br />
        <i>Nature Scientific Data 2025 (Soon)</i>
        <br />
        <a
          href="https://osupcvlab.github.io/ERDES/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#4400e6", textDecoration: "underline" }}
        >
          Project page
        </a>
      </>
    ),
    desc:
      "Led writing the paper and data-split tooling, while collaborating with a colleague who supplied the initial Lightning-Hydra codebase.",
    bullets: [
      "Drafted the <b>Overleaf manuscript</b> and conducted a comprehensive <b>literature review</b> using papers provided by our clinician co-author, Dr. Adhikari.",
      "Authored the <b>Background</b> and <b>Related Work</b> sections; contributed to writing all remaining sections.",
      "Developed a Python script to generate <b>stratified train/val/test splits</b> for two binary tasks:<br>&nbsp;&nbsp;1. Normal vs. Retinal Detachment<br>&nbsp;&nbsp;2. Macula Detached vs. Intact",
      "Debugged and extended a <b>Lightning-Hydra</b> training pipeline, originally adapted by a colleague from an open-source GitHub template, to support stable distributed training and modular experimentation.",
      "Trained and evaluated 16 models across 8 architectures with hyperparameter tuning (epochs, learning rate, optimizer, batch size) for both classification tasks, achieving accuracy ranges of:<br>&nbsp;&nbsp;– <b>0.937–0.991</b> (Normal vs. RD)<br>&nbsp;&nbsp;– <b>0.725–0.882</b> (Macula Detached vs. Intact)"
    ],

    footnote:
      "Acknowledgement – Pouyan Navard provided the original Lightning-Hydra template, baseline models (ViT, UNETR, SwinUNETR, V-Net, UNet++, SENet154, 3D ResNet, and 3D UNet), dataset, and pipeline."
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
                  <CardDesc>
                    {/* brief intro paragraph, if any */}
                    {proj.desc && <p style={{ margin: "0.4em 0" }}>{proj.desc}</p>}

                    {/* bullet list */}
                    {proj.bullets && (
                      <ul
                        className="list-disc list-inside leading-tight space-y-1 max-w-prose"
                        style={{ margin: "0.4em 0 0.6em" }}
                      >
                        {proj.bullets.map((item, idx) => (
                          <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                        ))}
                      </ul>
                    )}

                    {/* muted footnote */}
                    {proj.footnote && (
                      <p
                        style={{
                          fontSize: "0.8em",
                          color: "#666",
                          fontStyle: "italic",
                          marginTop: "0.4em"
                        }}
                      >
                        {proj.footnote}
                      </p>
                    )}
                  </CardDesc>

                </CardContent>
              </Card>
            );
          })}
        </PapersRow>
      </SectionContainer>
    </Background>
  );
}
