import React, { useRef } from "react";
import {
  SectionContainer, SectionTitle, ProjectsRow, Card,
  CardMediaWrapper, CardCoverImg, CardVideo,
  CardContent, CardTitleRow, CardTitle,
  GithubIcon, CardSubtitle, CardDesc, CardTag, Background, ImageCredit, MediaContainer
} from "./ProjectsSectionElements";
import { FaGithub } from "react-icons/fa";

import daiLabVideo from "../../img/dai-labor-demo.mp4";
import daiLabCover from "../../img/dai-labor-cover.png";
import chestCover from "../../img/chest-cover.png";
import floodCover from "../../img/flood.jpg";
import reidCover from "../../img/reid_cover.png";
import reidVideo from "../../img/reid_video.mov";

const projectList = [
  {
    cover: daiLabCover,
    video: daiLabVideo,
    title: "Live Object Detection",
    github: "https://github.com/yaseminozkut/Smart-Kitchen",
    subtitle: "DAI-Labor, TU Berlin",
    desc:
      "Built a real-time object detection system for German supermarket products using YOLOv8m and webcam input. The system is designed to eventually guide users to the correct storage locations based on recognized items in the kitchen.",
    bullets: [
      "Collected and annotated the the Freiburg Groceries Dataset and augmented it via <b>Roboflow</b>",
      "Achieved <b>87.2% accuracy</b> with <b>YOLOv8m</b> model",
      "Experimented with a <b>Keras-OCR</b> pipeline I implemented to interpret German-labeled packaging",
    ],
  },
  {
    cover: reidCover,
    video: reidVideo,
    title: "LLM-Driven Person Tracking & Re-Identification (ReID) via LangGraph (Ongoing)",
    subtitle: "Personal Project",
    desc:
      "Building a GPU-powered, <b>LangGraph</b>-orchestrated pipeline that <b>detects, tracks, and re-identifies</b> people across multiple videos—then leverages <b>vision-language embeddings</b> and <b>LLM reasoning</b> to link identities.",
    bullets: [
      "Designed <b>LangGraph</b> workflow with persistent identity memory and tool-calling nodes.",
      "Implemented a <b>YOLOv8 + ByteTrack</b> tool that crops each detected person and tags them with per-frame local IDs.",
      "Built CLIP embedder that extracts vision features from person crops.",
      "Implemented a memory store of {global_id, embedding} objects, enabling fast lookup across frames.",
      "Using embedding-similarity matching to assign global IDs or create new ones.",
      "Building parallel branches that route crops to <b>CLIP</b> embedder and <b>MoonDream</b> VLM captioner.",
      "Implementing <b>LLM agent (Mistral-7B via Ollama)</b> that reasons over descriptions to shortlist candidates.",
      "Building a <b>Gradio</b> UI for interactive inference."
    ],
  },
  {
    cover: chestCover,
    video: null,
    title: "Chest X-Ray VLM (Ongoing)",
    subtitle: "PCVLab, OSU",
    desc:
      "Developing a multimodal vision-language model (VLM) for automatic chest X-ray interpretation and clinical-report generation by learning joint image–text representations from the MIMIC-CXR dataset.",
    bullets: [
      "Curated & pre-processed down to <b>50 k+</b> paired studies (frontal + lateral views) from the <b>MIMIC-CXR</b> dataset, along with the findings and impressions.",
      "Fine-tuning <b>LLaMA 3.2</b> with <b>Unsloth</b> library, <b>ViT</b>, and <b>GPT</b> variants with masked-patching and multi-view fusion to learn joint embeddings.",
      "Scaled training across multi-GPU HPC clusters using <b>PyTorch</b>, <b>Hugging Face Accelerate</b>, and <b>SLURM</b> to enable rapid experimentation.",
    ],
    imageCredit: "Image Credit: Figure 1 from Johnson et al., MIMIC‑CXR, a de‑identified publicly available database of chest radiographs with free‑text reports, Scientific Data 6:317 (2019). Licensed under CC BY 4.0."
  },
  {
    cover: floodCover,
    video: null,
    title: "NASA / Beyond the Algorithm Challenge (Ongoing)",
    subtitle: "PCVLab, OSU",
    imageCredit: "Image Credit: NASA / Beyond the Algorithm Challenge",
    desc: "We are participating in NASA’s Beyond the Algorithm Challenge, focused on applying unconventional computing methods to improve rapid flood impact assessment.",
    bullets: [
      "Our work explores <b>satellite data</b> and scalable model design for <b>real-world disaster response</b>.",
      "Due to the ongoing nature of the competition, technical details will be shared after final submissions."
    ], 
    footnote: (
      <span> Challenge website:{" "}
              <a
                href="https://www.nasa-beyond-challenge.org/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#4400e6", textDecoration: "underline" }}
              >
                https://www.nasa-beyond-challenge.org
              </a>
            </span>
    )
  }

];

// Utility to check for mobile
const IS_MOBILE = typeof window !== "undefined" && /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

export default function ProjectsSection() {
  const videoRefs = useRef([]);

  // Initialize refs if not already created
  if (videoRefs.current.length !== projectList.length) {
    videoRefs.current = Array(projectList.length)
      .fill()
      .map((_, i) => videoRefs.current[i] || React.createRef());
  }

  return (
    <Background id="projects">
      <SectionContainer>
        <SectionTitle>Projects</SectionTitle>
        <ProjectsRow>
          {projectList.map((proj, i) => {
            // DESKTOP: hover handlers
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
                <MediaContainer>
                  <CardMediaWrapper>
                    {/* DESKTOP: Show cover img unless hovering, show video on hover */}
                    {/* MOBILE: Show video if available, else image */}
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
                  {proj.imageCredit && <ImageCredit>{proj.imageCredit}</ImageCredit>}
                </MediaContainer>

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
                    {proj.desc && (
                      <p
                        style={{ margin: "0.4em 0" }}
                        dangerouslySetInnerHTML={{ __html: proj.desc }}
                      />
                    )}

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
        </ProjectsRow>
      </SectionContainer>
    </Background>
  );
}
