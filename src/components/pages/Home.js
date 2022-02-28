import React from 'react'
const Home = () => {
    return (
        <div>
            <div>
                <section className="main-banner-img" id="whitepaper">
                    <div className="main-banner wow fadeInLeft" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="banner-text">
                                        <img className="d-block d-sm-none img-fluid" src="https://ruugle.io/assets/img/top-bnr-bg.png" alt='' />
                                        {/* <h5>NFT Experiences</h5> */}
                                        <h3>Search Engine for Crypto </h3>
                                        <h4>Introducing Ruugle, an innovative and advanced search engine that is censorship
                                            resistant for all crypto related sites, and a crypto grading platform to determine high
                                            and low risk investments.
                                        </h4>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <a className="btn my-2 my-sm-0 dark-blue-btn width-220-btn" data-scroll href="assets/docs/Ruugle Token  - Smart Contracts Security Audit Report.pdf">Audit
                                                Report</a>
                                        </div>
                                    </div>
                                    <div className="banner-socials">
                                        <ul>
                                            <li><a href="https://t.me/Ruugle" target="blank"><img src="https://ruugle.io/assets/img/tele.png" alt='' /></a></li>
                                            <li><a href="https://www.reddit.com/user/Ruugle/" target="blank"><img src="https://ruugle.io/assets/img/reddit.png" alt='' /></a></li>
                                            {/* <li><a href=""><img src="https://ruugle.io/assets/img/instagram.png"></a></li> */}
                                            <li><a href="https://twitter.com/Ruugleio?s=09" target="blank"><img alt='' src="https://ruugle.io/assets/img/twitter.png" /></a></li>
                                            <li><a href="https://tiktok.com/@ruugle.io" target="blank"><img alt='' src="https://ruugle.io/assets/img/tiktok.png" /></a></li>
                                            <li><a href="https://youtu.be/5P3L5LfZjb8" target="blank"><img alt='' src="https://ruugle.io/assets/img/youtube.png" /></a></li>
                                            {/* <li><a href=""><img alt='' src="https://ruugle.io/assets/img/facebook.png"></a></li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="about" tabIndex={-1} style={{ outline: 'none' }}>
                    <div className="ruugle-video">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 wow fadeInRight" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInRight' }}>
                                    <h3>What is Ruugle?</h3>
                                </div>
                                <div className="col-md-6 wow fadeInLeft" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
                                    <img src="https://ruugle.io/assets/img/ruugle.jpg" className="img-fluid ruugle-video-img" alt="ruugle-video" data-toggle="modal" data-target="#exampleModalCenter" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="ruugle-project-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 phone-spacing wow flipInX" data-wow-offset={300} data-wow-delay="0.6s" style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'flipInX' }}>
                                    <div className="ruugle-property">
                                        <img src="https://ruugle.io/assets/img/grain-effect.svg" alt='' className="img-fluid" />
                                        <h4>Ruugle Advertisements</h4>
                                        <p className="dark-blue">Make an advertisement on the Ruugle Search engine, and gain targeted
                                            traffic flow.</p>
                                    </div>
                                </div>
                                <div className="col-md-4 phone-spacing  wow flipInY" data-wow-offset={300} data-wow-delay="0.9s" style={{ visibility: 'visible', animationDelay: '0.9s', animationName: 'flipInY' }}>
                                    <div className="ruugle-property">
                                        <img src="https://ruugle.io/assets/img/spaceship.svg" className="img-fluid" alt='' />
                                        <h4>Blazing Speeds</h4>
                                        <p className="dark-blue">One click search results for all your crypto needs without censorship.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-4 phone-spacing wow flipInX" data-wow-offset={300} data-wow-delay="1.4s" style={{ visibility: 'visible', animationDelay: '1.4s', animationName: 'flipInX' }}>
                                    <div className="ruugle-property">
                                        <img src="https://ruugle.io/assets/img/ranking.svg" className="img-fluid" alt='' />
                                        <h4>Search Engine Optimization </h4>
                                        <p className="dark-blue">Ability to optimize your rankings on Ruugle with SEO tools, and the
                                            amount of RGL you hold in your wallet.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="influencer-calls">
                        <div className="container">
                            <div className="influence-section">
                                <div className="row flex-column-reverse flex-lg-row">
                                    <div className="col-md-12 col-lg-6 wow fadeInRight" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInRight' }}>
                                        <div className="influencer-text">
                                            <h1 className="wow fadeInUp" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInUp' }}>Crypto Influencer Call
                                                Tracking </h1>
                                            <h5 className="dark-blue">This tool will be used to offer results based on influencer calls,
                                                if the influencer is involved in scam calls a lot their "trust" rating will greatly
                                                drop. </h5>
                                            <h5 className="dark-blue">With this innovative tool, investors will know which influencers
                                                to follow, and which ones they should avoid.</h5>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-6 col-xl-4 offset-xl-1 wow fadeInLeft" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
                                        <div className="influencer-img">
                                            <img src="https://ruugle.io/assets/img/influancer-new.png" alt="influencer-calls" className />
                                        </div>
                                    </div>
                                </div>
                                <div className="better-project">
                                    <div className="row">
                                        <div className="col-md-12 col-lg-4 wow fadeInRight" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInRight' }}>
                                            <img src="https://ruugle.io/assets/img/report.svg" className="ruugle-project-section-img" alt="ruugle-video" />
                                        </div>
                                        <div className="col-md-12 col-lg-7 offset-lg-1 wow fadeInLeft" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
                                            <h1>Better Project Bureau</h1>
                                            <h5 className="dark-blue">Ruugle, Better project bureau is a reporting tool for the
                                                community, and investors. Community members of all crypto projects will be able to
                                                report illegitimate activity or file complaints with Ruugle to warn other potential
                                                investors, and the projects will have an opportunity to resolve these complaints in
                                                a timely manner.</h5>
                                        </div>
                                    </div>
                                </div>
                                <div id="whitepaper" className="influence-after wow flipInX" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'flipInX' }}>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h1>Ruugle Insurance </h1>
                                            <h5 className="dark-blue">Insurance for qualifying projects according to our “Ruugle safety
                                                score.” This will be offered to investors who want to keep their hard-earned money
                                                safe from a potential scam.</h5>
                                        </div>
                                    </div>
                                </div>
                                <div id="whitepaper" className="influence-after">
                                    <div className="row">
                                        <div className="col-md-6 wow flipInX" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'flipInX' }}>
                                            <h6>Ruugle Insurance Bond</h6>
                                            <h5 className="dark-blue">The Projects will get an insurance bond to give a financial
                                                guarantee, and build trust in their community by locking a certain amount of BSC
                                                into the Ruugle bond vault. This will be given back once the project completes.</h5>
                                        </div>
                                        <div className="col-md-6 wow flipInX" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'flipInX' }}>
                                            <h6>KYT</h6>
                                            <h5 className="dark-blue">Communities will encourage projects to register with Ruugle. Team
                                                information now called KYT “know your team” will be required to have a high project
                                                rating with Ruugle. KYT will be held private, in case of a scam or a rug it will be
                                                given to the authorities. </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="crptogrm">
                        <div className="container">
                            <h1 className="wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>Cryptogram </h1>
                            <h5 className="dark-blue wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>All-in-one
                                messaging platform for the crypto world that will have payment options with a crypto wallet built
                                in, with the ability to do Ads, collect payments from memberships, and send community donations.
                            </h5>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="exchanges-section">
                        <div className="container">
                            <div className="row flex-column-reverse flex-md-row">
                                <div className="col-md-6 wow fadeInleft" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
                                    <div className="exchange-text">
                                        <h3>Exchanges</h3>
                                        <img src="https://ruugle.io/assets/img/bnb.png" alt="exchange " className="img-fluid d-block d-sm-none" />
                                        <h4 className="dark-blue">
                                            RGL will be available to buy<br />
                                            on pancake swap after the presale.
                                        </h4>
                                    </div>
                                </div>
                                <div className="col-md-6 wow fadeInRight" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInRight' }}>
                                    <div className="exchange-img">
                                        <img src="https://ruugle.io/assets/img/bnb.png" alt="exchange " className="img-fluid d-none d-sm-block" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="token" tabIndex={-1} style={{ outline: 'none' }}>
                    <div className="donut-token">
                        <div className="container">
                            <div className="stats">
                                <div className="row">
                                    <div className="col-md-5 wow fadeInLeft" style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
                                    </div>
                                    <div className="col-md-6 offset-md-1 wow fadeInRight" style={{ visibility: 'visible', animationName: 'fadeInRight' }}>
                                        <h1>Ruugle Tokenomics</h1>
                                        <h5 className="dark-blue">Circulating Supply 179 Million</h5>
                                        <div className="row mt-3">
                                            <div className="col-8">
                                                <h4>
                                                    <div className="box pink" /> Presale 20 percent
                                                </h4>
                                            </div>
                                            <div className="col-4">
                                                <h4>
                                                    <div className="row">
                                                        <div className="col-4">35.8 </div>
                                                        <div className="col-8">Million</div>
                                                    </div>
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="row mt-1">
                                            <div className="col-8">
                                                <h4>
                                                    <div className="box blue" /> Investors and partners 15 percent
                                                </h4>
                                            </div>
                                            <div className="col-4">
                                                <h4>
                                                    <div className="row">
                                                        <div className="col-4">26.85 </div>
                                                        <div className="col-8"> Million</div>
                                                    </div>
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="row mt-1">
                                            <div className="col-8">
                                                <h4>
                                                    <div className="box yellow" /> Liquidity 15 percent
                                                </h4>
                                            </div>
                                            <div className="col-4">
                                                <h4>
                                                    <div className="row">
                                                        <div className="col-4">26.85 </div>
                                                        <div className="col-8"> Million</div>
                                                    </div>
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="row mt-1">
                                            <div className="col-8">
                                                <h4>
                                                    <div className="box green" /> Marketing 10 percent
                                                </h4>
                                            </div>
                                            <div className="col-4">
                                                <h4>
                                                    <div className="row">
                                                        <div className="col-4">17.9 </div>
                                                        <div className="col-8">Million</div>
                                                    </div>
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="row mt-1">
                                            <div className="col-8">
                                                <h4>
                                                    <div className="box purple" /> Development 8.38 percent
                                                </h4>
                                            </div>
                                            <div className="col-4">
                                                <h4>
                                                    <div className="row">
                                                        <div className="col-4">15</div>
                                                        <div className="col-8">Million </div>
                                                    </div>
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="row mt-1">
                                            <div className="col-8">
                                                <h4>
                                                    <div className="box orange" /> Air drop wallet holders 23.24 percent
                                                </h4>
                                            </div>
                                            <div className="col-4">
                                                <h4>
                                                    <div className="row">
                                                        <div className="col-4">41.6</div>
                                                        <div className="col-8">Million</div>
                                                    </div>
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="row mt-1">
                                            <div className="col-8">
                                                <h4>
                                                    <div className="box bright-yellow" /> Team 8.38 percent
                                                </h4>
                                            </div>
                                            <div className="col-4">
                                                <h4>
                                                    <div className="row">
                                                        <div className="col-4">15 </div>
                                                        <div className="col-8">Million</div>
                                                    </div>
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="row mt-1">
                                            <div className="col-12">
                                                <h4>Locked until November of 2021 via Trust Swap.</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="d-none">
                    <div className="team-section">
                        <div className="container">
                            <h3 className="wow fadeInUp animated" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInUp' }}>Our Team</h3>
                            <div className="show-team">
                                <div className="row">
                                    <div className="col-lg-2 col-sm-4 col-12 phone-spacing wow fadeInLeft animated" data-wow-offset={300} data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInLeft' }}>
                                        <figure>
                                            <img src="https://via.placeholder.com/170" className="img-fluid rounded-sm" alt="Team Member" />
                                        </figure>
                                        <h4>Lee Bowman</h4>
                                        <p className="dark-blue">Head of Product</p>
                                        <div className="social-links">
                                            <ul>
                                                <li><a href><img src="https://ruugle.io/assets/img/link.png" alt='' /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-sm-4 col-12 phone-spacing wow fadeInLeft animated" data-wow-offset={300} data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInLeft' }}>
                                        <figure>
                                            <img src="https://via.placeholder.com/170" className="img-fluid rounded-sm" alt="Team Member" />
                                        </figure>
                                        <h4>Lee Bowman</h4>
                                        <p className="dark-blue">Head of Product</p>
                                        <div className="social-links">
                                            <ul>
                                                <li><a href><img src="https://ruugle.io/assets/img/link.png" alt='' /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-sm-4 col-12 phone-spacing wow fadeInLeft animated" data-wow-offset={300} data-wow-delay="0.6s" style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInLeft' }}>
                                        <figure>
                                            <img src="https://via.placeholder.com/170" className="img-fluid rounded-sm" alt="Team Member" />
                                        </figure>
                                        <h4>Lee Bowman</h4>
                                        <p className="dark-blue">Head of Product</p>
                                        <div className="social-links">
                                            <ul>
                                                <li><a href><img src="https://ruugle.io/assets/img/link.png" alt='' /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-sm-4 col-12 phone-spacing wow fadeInLeft animated" data-wow-offset={300} data-wow-delay="0.8s" style={{ visibility: 'visible', animationDelay: '0.8s', animationName: 'fadeInLeft' }}>
                                        <figure>
                                            <img src="https://via.placeholder.com/170" className="img-fluid rounded-sm" alt="Team Member" />
                                        </figure>
                                        <h4>Lee Bowman</h4>
                                        <p className="dark-blue">Head of Product</p>
                                        <div className="social-links">
                                            <ul>
                                                <li><a href><img src="https://ruugle.io/assets/img/link.png" alt='' /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-sm-4 col-12 phone-spacing wow fadeInLeft animated" data-wow-offset={300} data-wow-delay="1s" style={{ visibility: 'visible', animationDelay: '1s', animationName: 'fadeInLeft' }}>
                                        <figure>
                                            <img src="https://via.placeholder.com/170" className="img-fluid rounded-sm" alt="Team Member" />
                                        </figure>
                                        <h4>Lee Bowman</h4>
                                        <p className="dark-blue">Head of Product</p>
                                        <div className="social-links">
                                            <ul>
                                                <li><a href="/"><img src="https://ruugle.io/assets/img/link.png" alt='' /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-sm-4 col-12 phone-spacing wow fadeInLeft animated" data-wow-offset={300} data-wow-delay="1.2s" style={{ visibility: 'visible', animationDelay: '1.2s', animationName: 'fadeInLeft' }}>
                                        <figure>
                                            <img src="https://via.placeholder.com/170" className="img-fluid rounded-sm" alt="Team Member" />
                                        </figure>
                                        <h4>Lee Bowman</h4>
                                        <p className="dark-blue">Head of Product</p>
                                        <div className="social-links">
                                            <ul>
                                                <li><a href><img src="https://ruugle.io/assets/img/link.png" alt='' /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="d-none">
                    <div className="road-map-section">
                        <div className="container">
                            <h3 className="wow fadeInUp animated" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInUp' }}>Road Map</h3>
                            <h1 className="text-left wow fadeInUp d-block d-md-none animated" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInUp' }}>2021</h1>
                            <div className="row">
                                <div className="col-md-4">
                                    <h5 className="dark-blue wow fadeInUp animated" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInUp' }}>You take your notes, we take care of
                                        everything else.</h5>
                                </div>
                                <div className="col-md-8 mt-5">
                                    <h1 className="text-right wow fadeInUp d-none d-md-block animated" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInUp' }}>2021</h1>
                                </div>
                            </div>
                            <div className="road-map-qs">
                                <div className="row">
                                    <div className="col-md-6 wow fadeInLeft animated" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInLeft' }}>
                                        <div className="road-maps-inner">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <h2 className="dark-blue">Q1</h2>
                                                </div>
                                                <div className="col-md-9">
                                                    <h4>Walk-in</h4>
                                                    <p className="dark-blue">Bradley Duncan</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 wow fadeInRight animated" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInRight' }}>
                                        <div className="road-maps-inner">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <h2 className="dark-blue">Q2</h2>
                                                </div>
                                                <div className="col-md-9">
                                                    <h4>The future of Online Marketing</h4>
                                                    <p className="dark-blue">Bradley Duncan</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 wow fadeInLeft animated" data-wow-delay="0.6s" style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInLeft' }}>
                                        <div className="road-maps-inner">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <h2 className="dark-blue">Q3</h2>
                                                </div>
                                                <div className="col-md-9">
                                                    <h4>Welcome and introduction to DE 2020</h4>
                                                    <p className="dark-blue">Lee Bowman</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 wow fadeInRight animated" data-wow-delay="0.6s" style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInRight' }}>
                                        <div className="road-maps-inner">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <h2 className="dark-blue">Q4</h2>
                                                </div>
                                                <div className="col-md-9">
                                                    <h4>Finding the right Technical Setup</h4>
                                                    <p className="dark-blue">Roger Stevens</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="sponsor" className="d-none">
                    <div className="sponser-section">
                        <div className="container">
                            <h3 className="text-center wow fadeInUp animated" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInUp' }}>Sponsors</h3>
                            <div className="sponsor-logo d-sm-block d-none">
                                <div className="row">
                                    <div className="col wow fadeinLeft animated" data-wow-offset={300} data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInLeft' }}>
                                        <img src="https://ruugle.io/assets/img/11.png" className="img-fluid" alt="sponsor " />
                                    </div>
                                    <div className="col wow fadeinLeft animated" data-wow-offset={300} data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInLeft' }}>
                                        <img src="https://ruugle.io/assets/img/21.png" className="img-fluid" alt="sponsor " />
                                    </div>
                                    <div className="col wow fadeinLeft animated" data-wow-offset={300} data-wow-delay="0.6s" style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInLeft' }}>
                                        <img src="https://ruugle.io/assets/img/31.png" className="img-fluid" alt="sponsor " />
                                    </div>
                                    <div className="col wow fadeinLeft animated" data-wow-offset={300} data-wow-delay="0.8s" style={{ visibility: 'visible', animationDelay: '0.8s', animationName: 'fadeInLeft' }}>
                                        <img src="https://ruugle.io/assets/img/41.png" className="img-fluid" alt="sponsor " />
                                    </div>
                                    <div className="col wow fadeinLeft animated" data-wow-offset={300} data-wow-delay="1s" style={{ visibility: 'visible', animationDelay: '1s', animationName: 'fadeInLeft' }}>
                                        <img src="https://ruugle.io/assets/img/51.png" className="img-fluid" alt="sponsor " />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col wow fadeinRight animated" data-wow-offset={300} data-wow-delay="1s" style={{ visibility: 'visible', animationDelay: '1s', animationName: 'fadeInRight' }}>
                                        <img src="https://ruugle.io/assets/img/61.png" className="img-fluid" alt="sponsor " />
                                    </div>
                                    <div className="col wow fadeinRight animated" data-wow-offset={300} data-wow-delay="0.8s" style={{ visibility: 'visible', animationDelay: '0.8s', animationName: 'fadeInRight' }}>
                                        <img src="https://ruugle.io/assets/img/71.png" className="img-fluid" alt="sponsor " />
                                    </div>
                                    <div className="col wow fadeinRight animated" data-wow-offset={300} data-wow-delay="0.6s" style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInRight' }}>
                                        <img src="https://ruugle.io/assets/img/81.png" className="img-fluid" alt="sponsor " />
                                    </div>
                                    <div className="col wow fadeinRight animated" data-wow-offset={300} data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInRight' }}>
                                        <img src="https://ruugle.io/assets/img/91.png" className="img-fluid" alt="sponsor " />
                                    </div>
                                    <div className="col wow fadeinRight animated" data-wow-offset={300} data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInRight' }}>
                                        <img src="https://ruugle.io/assets/img/101.png" className="img-fluid" alt="sponsor " />
                                    </div>
                                </div>
                            </div>
                            <div className="sponsor-logo-mobile text-center d-sm-none d-block">
                                <div className="row">
                                    <div className="col-6 wow fadeinLeft animated" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
                                        <img src="https://ruugle.io/assets/img/11.png" className="img-fluid" alt="sponsor " />
                                    </div>
                                    <div className="col-6 wow fadeinRight animated" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInRight' }}>
                                        <img src="https://ruugle.io/assets/img/21.png" className="img-fluid" alt="sponsor " />
                                    </div>
                                    <div className="col-6 wow fadeinLeft animated" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
                                        <img src="https://ruugle.io/assets/img/31.png" className="img-fluid" alt="sponsor " />
                                    </div>
                                    <div className="col-6 wow fadeinRight animated" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInRight' }}>
                                        <img src="https://ruugle.io/assets/img/41.png" className="img-fluid" alt="sponsor " />
                                    </div>
                                    <div className="col-6 wow fadeinLeft animated" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
                                        <img src="https://ruugle.io/assets/img/51.png" className="img-fluid" alt="sponsor " />
                                    </div>
                                    <div className="col-6 wow fadeinRight animated" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInRight' }}>
                                        <img src="https://ruugle.io/assets/img/61.png" className="img-fluid" alt="sponsor " />
                                    </div>
                                    <div className="col-6 wow fadeinLeft animated" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
                                        <img src="https://ruugle.io/assets/img/71.png" className="img-fluid" alt="sponsor " />
                                    </div>
                                    <div className="col-6 wow fadeinRight animated" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInRight' }}>
                                        <img src="https://ruugle.io/assets/img/81.png" className="img-fluid" alt="sponsor " />
                                    </div>
                                    <div className="col-6 wow fadeinLeft animated" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
                                        <img src="https://ruugle.io/assets/img/91.png" className="img-fluid" alt="sponsor " />
                                    </div>
                                    <div className="col-6 wow fadeinRight animated" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInRight' }}>
                                        <img src="https://ruugle.io/assets/img/101.png" className="img-fluid" alt="sponsor " />
                                    </div>
                                </div>
                            </div>
                            <div className="sponsor-button">
                                <div className="row justify-content-md-center">
                                    <div className="col-md-3 text-center">
                                        {/* <button class="btn orange-btn full-width-btn">White Paper</button> */}
                                        <a className="btn my-2 my-sm-0 light-blue-btn full-width-btn" data-scroll href="#whitepaper">Become a Sponsor</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="contact" tabIndex={-1} style={{ outline: 'none' }}>
                    <div className="container">
                        <div className="contact">
                            <div className="row">
                                <div className="col-md-6 wow fadeInUp" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                                    <h1>Contact us</h1>
                                </div>
                                <div className="col-md-6 text-right wow fadeInUp d-none d-md-block" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInUp' }}><img src="https://ruugle.io/assets/img/message.png" className="img-fluid" alt="" /></div>
                            </div>
                            <form method="post" action="index.php">
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input type="text" className="form-control form-setting wow fadeInLeft" data-wow-offset={300} id="inputEmail4" name="contact_name" placeholder="Name" style={{ visibility: 'visible', animationName: 'fadeInLeft' }} />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input type="email" className="form-control form-setting wow fadeInRight" data-wow-offset={300} id="inputPassword4" name="contact_email" placeholder="Email" style={{ visibility: 'visible', animationName: 'fadeInRight' }} />
                                    </div>
                                </div>
                                <div className="form-row wow fadeInUp" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                                    <div className="form-group col-md-12">
                                        <textarea className="form-control form-setting" name="contact_project" placeholder="Tell us about your project" defaultValue={""} />
                                    </div>
                                </div>
                                <div className="form-row wow fadeInUp" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                                    <div className="form-group col-md-6">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="gridCheck" required />
                                            <label className="form-check-label" htmlFor="gridCheck">
                                                I agree to the terms of this Privacy Policy
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form-group col-md-6 text-right">
                                        <button type="submit" name="contact_submit" className="btn light-blue-btn width-220-btn">Send
                                            Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                <footer>
                    <div className="footer">
                        <div className="container">
                            <div className="row flex-column-reverse flex-md-row">
                                <div className="col-md-6">
                                </div>
                                <div className="col-md-6 text-center">
                                    <div className="footer-logo" />
                                </div>
                            </div>
                            <div className="copyright">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="banner-socials text-center">
                                            <ul>
                                                <li><a href="https://t.me/Ruugle" target="blank"><img src="https://ruugle.io/assets/img/tele.png" alt='' /></a></li>
                                                <li><a href="https://www.reddit.com/user/Ruugle/" target="blank"><img src="https://ruugle.io/assets/img/reddit.png" alt='' /></a></li>
                                                <li><a href="https://twitter.com/Ruugleio?s=09" target="blank"><img src="https://ruugle.io/assets/img/twitter.png" alt='' /></a></li>
                                                <li><a href="https://tiktok.com/@ruugle.io" target="blank"><img src="https://ruugle.io/assets/img/tiktok.png" alt='' /></a></li>
                                                <li><a href="https://youtu.be/5P3L5LfZjb8" target="blank"><img src="https://ruugle.io/assets/img/youtube.png" alt='' /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-12 text-center">
                                        <p className="dark-blue">© Copyright 2021 Ruugle. All Rights Reserved.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="modal fade" id="registerModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" style={{ display: 'none' }} aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <form method="post" action="index.php">
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <input type="text" className="form-control form-setting wow fadeInLeft" data-wow-offset={300} name="register_telegram_id" placeholder="Telegram ID" style={{ visibility: 'visible', animationName: 'fadeInLeft' }} />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <input type="email" className="form-control form-setting wow fadeInRight" data-wow-offset={300} name="register_email" placeholder="Email" style={{ visibility: 'visible', animationName: 'fadeInRight' }} />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <input type="text" className="form-control form-setting wow fadeInRight" data-wow-offset={300} name="register_wallet" placeholder="Wallet Address" style={{ visibility: 'visible', animationName: 'fadeInRight' }} />
                                    </div>
                                </div>
                                <div className="form-row wow fadeInUp" data-wow-offset={300} style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                                    <div className="form-group col-md-6 text-left">
                                        <button type="submit" name="registeration_submit" className="btn light-blue-btn">Send
                                            Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* Modal */}
                <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" style={{ display: 'none' }} aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <iframe width={560} height={315} src="https://www.youtube.com/embed/5P3L5LfZjb8?&loop=1&rel=0&showinfo=0&iv_load_policy=3&playlist=5P3L5LfZjb8" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home
