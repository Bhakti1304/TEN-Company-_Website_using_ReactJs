import React from 'react';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Icon1 from '../../images/svg_2.svg';
import Icon2 from '../../images/svg_3.svg';
import Icon3 from '../../images/svg_4.svg';
import Icon4 from '../../images/svg_10.svg';
import Icon5 from '../../images/svg_5.svg';
import Icon6 from '../../images/svg_6.svg';
import Icon7 from '../../images/svg_7.svg';
import Icon8 from '../../images/svg_8.svg';
import {ServicesContainer, ServicesCard, ServicesCard1, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper, ServicesWrapper1, ServiceBtn, ServiceBtnLink} from './ServicesElements'
import Fade from 'react-reveal/Fade';
const Services = () => {

    return (
        <>
        <ServicesContainer id="online-courses">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <Fade right>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Sales</ServicesH2>
                    <ServicesP>₹200</ServicesP>
                    <ServiceBtn><ServiceBtnLink to="/mycart"><ShoppingCartIcon />Add to Cart</ServiceBtnLink></ServiceBtn>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Data Analystics</ServicesH2>
                    <ServicesP>₹200</ServicesP>
                    <ServiceBtn><ServiceBtnLink to="/mycart"><ShoppingCartIcon />Add to Cart</ServiceBtnLink></ServiceBtn>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon4}/>
                    <ServicesH2>Entrepurer</ServicesH2>
                    <ServicesP>₹200</ServicesP>
                    <ServiceBtn><ServiceBtnLink to="/mycart"><ShoppingCartIcon />Add to Cart</ServiceBtnLink></ServiceBtn>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon5}/>
                    <ServicesH2>ReactJs</ServicesH2>
                    <ServicesP>₹200</ServicesP>
                    <ServiceBtn><ServiceBtnLink to="/mycart"><ShoppingCartIcon />Add to Cart</ServiceBtnLink></ServiceBtn>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon6}/>
                    <ServicesH2>General Managment</ServicesH2>
                    <ServicesP>₹200</ServicesP>
                    <ServiceBtn><ServiceBtnLink to="/mycart"><ShoppingCartIcon />Add to Cart</ServiceBtnLink></ServiceBtn>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon7}/>
                    <ServicesH2>FullStack Development</ServicesH2>
                    <ServicesP>₹200</ServicesP>
                    <ServiceBtn><ServiceBtnLink to="/mycart"><ShoppingCartIcon />Add to Cart</ServiceBtnLink></ServiceBtn>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon8}/>
                    <ServicesH2>Wordpress Develpoment</ServicesH2>
                    <ServicesP>₹200</ServicesP>
                    <ServiceBtn><ServiceBtnLink to="/mycart"><ShoppingCartIcon />Add to Cart</ServiceBtnLink></ServiceBtn>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Software Testing</ServicesH2>
                    <ServicesP>₹200</ServicesP>
                    <ServiceBtn><ServiceBtnLink to="/mycart"><ShoppingCartIcon />Add to Cart</ServiceBtnLink></ServiceBtn>
                </ServicesCard>
                </Fade>                
            </ServicesWrapper>         
        </ServicesContainer>
        <ServicesContainer>
        <ServicesH1>Benifits from our courses</ServicesH1>
            <ServicesWrapper1>
                <ServicesCard1>
                    <ServicesH2>Expert Teachers</ServicesH2>
                    <ServicesP>Our instructors are more adept at monitoring student problems and assessing their level of understanding and progress, and they provide much more relevant, useful feedback.
We are experts in developing and testing hypotheses about learning difficulties or instructional strategies.</ServicesP>
                </ServicesCard1>
                <ServicesCard1>
                    <ServicesH2>Flexible Curriculum</ServicesH2>
                    <ServicesP>Feel like home, with a "family of invisible friends".</ServicesP>
                </ServicesCard1>
                <ServicesCard1>
                    <ServicesH2>Online Community</ServicesH2>
                    <ServicesP>Our expert teachers design and curate the curriculum using best practices and careful consideration of how people learn and retain information with the ongoing tech trends in the professional domain. We've debated every facet of our methodology, from the order in which to teach concepts, the analogies used to clarify them and how exercises should be structured to deliver the maximum educational punch.</ServicesP>
                </ServicesCard1>
            </ServicesWrapper1>
        </ServicesContainer>
        </>
        

        
    )
}

export default Services

