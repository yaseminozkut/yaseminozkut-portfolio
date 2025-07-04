import React from 'react';
import { Background, StyledCircle, StyledContainer, StyledText, StyledTitle, Grid, Cols} from "./SkillsSectionElements";
import {ReactComponent as ReactLogo} from '../../img/wave.svg';

const Skills = () => {

    return(
    
        <Background id='skills'>
            <StyledContainer>
                <ReactLogo flex="1"></ReactLogo>
                <StyledTitle>Skills</StyledTitle>
                <Grid>
                    <StyledText size='md'>Programming Languages:</StyledText>
                    <Cols>
                        <StyledCircle>Python</StyledCircle>
                        <StyledCircle>C++</StyledCircle>
                        <StyledCircle>C</StyledCircle>
                        <StyledCircle>C#</StyledCircle>
                        {/* ... */}
                    </Cols>
                </Grid>
                <Grid>
                    <StyledText>Frameworks & Libraries:</StyledText>
                    <Cols>
                        <StyledCircle>PyTorch</StyledCircle>
                        <StyledCircle>CUDA</StyledCircle>
                        <StyledCircle>YOLO</StyledCircle>
                        <StyledCircle>Keras-OCR</StyledCircle>
                        <StyledCircle>OpenCV</StyledCircle>
                        <StyledCircle>Hugging Face</StyledCircle>
                        <StyledCircle>Pandas</StyledCircle>
                        <StyledCircle>NumPy</StyledCircle>
                        <StyledCircle>Scikit-learn</StyledCircle>
                        <StyledCircle>Matplotlib</StyledCircle>
                    </Cols>
                </Grid>
                <Grid>
                    <StyledText>Developer Tools:</StyledText>
                    <Cols style={{width: "90%"}}>
                        <StyledCircle>Git</StyledCircle>
                        <StyledCircle>SLURM</StyledCircle>
                        <StyledCircle>Linux (CLI)</StyledCircle>
                        <StyledCircle>LaTeX</StyledCircle>
                        <StyledCircle>Gephi</StyledCircle>
                        <StyledCircle>Unity</StyledCircle>
                        <StyledCircle>Postman</StyledCircle>
                    </Cols>
                </Grid>
                <Grid>
                    <StyledText>Techniques:</StyledText>
                    <Cols>
                        <StyledCircle>Deep/Machine Learning</StyledCircle>
                        <StyledCircle>Distributed Training</StyledCircle>
                        <StyledCircle>Multi-modal Learning</StyledCircle>
                        <StyledCircle>Vision-Language Models</StyledCircle>
                        <StyledCircle>Object Detection</StyledCircle>
                        <StyledCircle>Segmentation</StyledCircle>
                        <StyledCircle>Image Processing</StyledCircle>
                        <StyledCircle>Computer Vision</StyledCircle>
                        <StyledCircle>Text Recognition</StyledCircle>
                        <StyledCircle>Network Analysis</StyledCircle>
                        <StyledCircle>Data Visualization</StyledCircle>
                        <StyledCircle>OOP</StyledCircle>
                        <StyledCircle>Data Structures</StyledCircle>
                        <StyledCircle>Algorithms</StyledCircle>

                    </Cols>
                </Grid>
                <Grid>
                    <StyledText>Software & Web:</StyledText>
                    <Cols>
                        <StyledCircle>React.js</StyledCircle>
                        <StyledCircle>CSS</StyledCircle>
                        <StyledCircle>Flutter</StyledCircle>
                        <StyledCircle>Node.js</StyledCircle>
                        <StyledCircle>Express.js</StyledCircle>
                        <StyledCircle>MongoDB</StyledCircle>
                        <StyledCircle>SQL</StyledCircle>
                        <StyledCircle>Firebase</StyledCircle>
                    </Cols>
                </Grid>
            </StyledContainer>
        </Background>
    );
}
export default Skills;