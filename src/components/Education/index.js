import React from 'react'
import styled from 'styled-components'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { education, experiences } from '../../data/constants';
import EducationCard from '../Cards/EducationCard';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 0px 0px 60px 0px;
    @media (max-width: 960px) {
        padding: 20px 0px;
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
    padding: 40px 0px 0px 0px;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
        padding: 20px 0px 0px 0px;
    }
`;

const Title = styled.div`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: transparent;
    background: linear-gradient(50deg, #07ad3e, #3980e3); 
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
    padding: 0 20px;
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
        padding: 0 15px;
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

    @media (max-width: 660px) {
        align-items: center !important;
        padding: 0 15px;
        
        .MuiTimelineItem-root {
            width: 100%;
            
            .MuiTimelineContent-root {
                width: 100% !important;
                padding: 12px 0 !important;
            }
        }
    }
`;

const MobileTimelineContainer = styled.div`
    display: none;
    @media (max-width: 660px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 0 15px;
        gap: 20px;
    }
`;

const index = () => {
    return (
        <Container id="education">
            <Wrapper>
                <Title>Education</Title>
                <Desc>
                    My education has been a journey of self-discovery and growth. My educational details are as follows.
                </Desc>
                
                {/* نسخه دسکتاپ */}
                <TimelineSection className="desktop-timeline">
                    <Timeline>
                        {education.map((education, index) => (
                            <TimelineItem key={index}>
                                <TimelineContent sx={{ 
                                    py: '12px', 
                                    px: 2,
                                    '@media (max-width: 660px)': {
                                        py: '8px',
                                        px: 1
                                    }
                                }}>
                                    <EducationCard education={education}/>
                                </TimelineContent>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                    {index !== education.length - 1 && <TimelineConnector style={{ background: '#854CE6' }} />}
                                </TimelineSeparator>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </TimelineSection>

                {/* نسخه موبایل - ساده‌تر */}
                <MobileTimelineContainer className="mobile-timeline">
                    {education.map((education, index) => (
                        <EducationCard key={index} education={education} />
                    ))}
                </MobileTimelineContainer>
            </Wrapper>
        </Container>
    )
}

export default index