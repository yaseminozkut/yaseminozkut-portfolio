import React, { useRef } from "react";
import {
  SectionContainer, SectionTitle, ProjectsRow, Card,
  CardMediaWrapper, CardCoverImg, CardVideo,
  CardContent, CardTitleRow, CardTitle,
  GithubIcon, CardSubtitle, CardDesc, CardTag, Background, ImageCredit, MediaContainer
} from "./ProjectsSectionElements";
import { FaGithub } from "react-icons/fa";

// Replace with your assets!
import daiLabVideo from "../../img/dai-labor-demo.mp4";
import daiLabCover from "../../img/dai-labor-cover.png";
import chestCover from "../../img/chest-cover.png";
import floodCover from "../../img/flood.jpg";

const projectList = [
  {
    cover: daiLabCover,
    video: daiLabVideo,
    title: "Live Object Detection",
    github: "https://github.com/yaseminozkut/Smart-Kitchen",
    subtitle: "DAI-Labor, TU Berlin",
    desc: "I built a real-time object detection system for German supermarket products using YOLOv8m and webcam input. I collected and annotated the the Freiburg Groceries Dataset and augmented it via Roboflow. I achieved 87.2% accuracy with YOLOv8m model. Additionally, I experimented it with a Keras-OCR pipeline to interpret German-labeled packaging. The system is designed to eventually guide users to the correct storage locations based on recognized items in the kitchen.",
  },
  {
    cover: chestCover,
    video: null,
    title: "Chest X-Ray VLM (Ongoing)",
    subtitle: "PCVLab, OSU",
    desc: "I'm developing a multimodal vision-language model (VLM) for chest X-ray interpretation, combining image data with associated radiology reports. The project uses the MIMIC-CXR dataset, which I curated down to over 50,000 high-quality studies containing both frontal and lateral views along with findings and impressions.\n\n The system is designed to understand and generate clinical reports by learning joint representations across image and text modalities. I'm fine-tuning large models (e.g., LLaMA 3.2, ViT, and GPT variants) and experimenting with masked image patching and multi-view fusion techniques. To enable scalable training, I've optimized the pipeline using PyTorch, Hugging Face Accelerate, and SLURM across multi-GPU HPC clusters.",
    imageCredit: "Image Credit: Figure 1 from Johnson et al., MIMIC‑CXR, a de‑identified publicly available database of chest radiographs with free‑text reports, Scientific Data 6:317 (2019). Licensed under CC BY 4.0."
  },
  {
    cover: floodCover,
    video: null,
    title: "NASA / Beyond the Algorithm Challenge (Ongoing)",
    subtitle: "PCVLab, OSU",
    desc: (
            <span> We are participating in NASA’s Beyond the Algorithm Challenge, focused on applying unconventional computing methods to improve rapid flood impact assessment. Our work explores satellite data and scalable model design for real-world disaster response. Due to the ongoing nature of the competition, technical details will be shared after final submissions.
              <br /><br />
              Challenge website:{" "}
              <a
                href="https://www.nasa-beyond-challenge.org/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#4400e6", textDecoration: "underline" }}
              >
                https://www.nasa-beyond-challenge.org
              </a>
            </span>
          ),
    imageCredit: "Image Credit: NASA / Beyond the Algorithm Challenge"
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
                className={proj.video ? "has-video" : ""}
                onMouseEnter={proj.video ? handleMouseEnter : undefined}
                onMouseLeave={proj.video ? handleMouseLeave : undefined}
              >

                <MediaContainer>
                  <CardMediaWrapper>
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
                    {typeof proj.desc === "string"
                      ? proj.desc.split('\n\n').map((paragraph, idx) => (
                          <p key={idx} style={{ margin: "0.4em 0" }}>{paragraph.trim()}</p>
                        ))
                      : proj.desc}
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
