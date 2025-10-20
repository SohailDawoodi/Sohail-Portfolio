// filepath: f:\port\Sohail Portfolio\src\components\Education\index.js
// ...existing code...
import React from 'react'
import styled from 'styled-components'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { education } from '../../data/constants';
import EducationCard from '../Cards/EducationCard';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 40px 0px 80px 0px;
    @media (max-width: 960px) {
    padding: 0px;
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 80px 0;
    gap: 12px;
    @media (max-width: 960px) {
    flex-direction: column;
    }
`;

const Title = styled.div`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: transparent;
    background: linear-gradient(210deg, #07ad3e, #3980e3); 
    -webkit-background-clip: text;
    transition: all 0.3s ease-in-out;
    @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: lightgray;
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

const TimelineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;

// const StyledTimeline = styled(Timeline)`
//     width: 100%;
//     // margin: 0 auto; /* ensure centered inside TimelineSection */
//     @media (max-width: 768px) {
//         && {
//             padding-left: 0;
//             padding-right: 0;
//         }
//     }
//     @media (max-width: 480px) {
//         && {
//             padding: 0;
//         }
//     }
// `;

const Education = () => {
    return (
        <Container id="education">
            <Wrapper>
                <Title>Education</Title>
                <Desc>
                    My education has been a journey of self-discovery and growth. My educational details are as follows.
                </Desc>

                <TimelineSection className="timeline-section">
                   
                        {education.map((item, idx) => (
                            <TimelineItem key={idx}>
                                <TimelineSeparator>
                                    <TimelineDot 
                                        variant="outlined" 
                                        color="secondary" 
                                        sx={{
                                            width: 16,
                                            height: 16,
                                            '@media (max-width: 480px)': {
                                                width: 12,
                                                height: 12
                                            }
                                        }}
                                    />
                                    {idx !== education.length - 1 && (
                                        <TimelineConnector 
                                            sx={{ 
                                                background: '#854CE6',
                                                '@media (max-width: 480px)': {
                                                    width: 2
                                                }
                                            }} 
                                        />
                                    )}
                                </TimelineSeparator>

                                <TimelineContent sx={{ 
                                    py: '16px', 
                                    px: 2,
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center', /* center the card horizontally */
                                    '@media (max-width: 768px)': {
                                        py: '12px',
                                        px: 1.5
                                    },
                                    '@media (max-width: 480px)': {
                                        py: '8px',
                                        px: 1
                                    }
                                }}>
                                    <EducationCard education={item}/>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                </TimelineSection>
            </Wrapper>
        </Container>
    )
}

export default Education;