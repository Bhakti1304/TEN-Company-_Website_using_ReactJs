import React from 'react';
import { Button} from '../ButtonElements';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, ImgWrap, Img, TextWrapper, TopLine, Heading,  Subtitle, BtnWrap } from './infoElements';
import Zoom from 'react-reveal/Zoom';
import Roll from 'react-reveal/Roll';

const InfoSection = ({lightBg, id, imgStart, img, topLine, lightText, headline, darkText, description, buttonLabel, alt, primary, dark, dark2, link }) => {
    return (
        <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}> 
                    <Column1>
                     <TextWrapper>
                         <Roll>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headline}</Heading>
                        <Subtitle darkText={darkText}>{description}</Subtitle>
                        <BtnWrap>
                            <Button to={link}
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            primary={primary ? 1 : 0}
                            dark={dark ? 1 : 0}
                            dark2={dark2 ? 1 : 0}>
                                {buttonLabel}
                              </Button>
                        </BtnWrap>
                        </Roll>
                    </TextWrapper>
                    </Column1>
                    <Column2>
                    <ImgWrap>
                    <Zoom>
                    <Img src={img} alt={alt}/>
                    </Zoom>
                    </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper> 
        </InfoContainer>

        </>
    )
}

export default InfoSection
