import React from 'react'
import { Wash, Distance, Mask, Stay, Vaccine, Senitize, VirusBlue } from './img';
import { HeadContainer, MainHeading } from './HeaderStyle';

const Header = () => {
    return (
        <>
            <HeadContainer>
                <MainHeading>
                    <h1>Safety Precaution</h1>
                    <div className="covid_19">
                        COVID-19
                    </div>
                    <div className="virus-img">
                        <img src={VirusBlue} alt="" />
                    </div>
                    <div className="precautions">
                        <div>
                            <img src={Mask} alt="" />
                            {/* <h3>Wear Mask</h3> */}
                        </div>
                        <div>
                            <img src={Wash} alt="" />
                            {/* <h3>Wash Hands</h3> */}
                        </div>
                        <div>
                            <img src={Distance} alt="" style={{}} />
                            {/* <h3>Keep Distance</h3> */}
                        </div>
                        <div>
                            <img src={Stay} alt="" />
                            {/* <h3>Stay Home</h3> */}
                        </div>
                        <div>
                            <img src={Senitize} alt="" />
                            {/* <h3>Senitize Your Hands</h3> */}
                        </div>
                        <div>
                            <img src={Vaccine} alt="" />
                            {/* <h3>Get Vaccination</h3> */}
                        </div>
                    </div>
                    <h1 style={{ marginLeft: '10%', marginTop: '5%' }}>Country Wise Cases</h1>
                </MainHeading>
            </HeadContainer>
        </>
    )
}

export default Header;
