import React from 'react';
import { Button, Card, CardBody } from 'reactstrap';
import NavBar from '../component/NavBar'
import FAQ from './FAQ';
const IDO = () => {
    return (
        <div>
            <div>
                <section className="main-banner-img" id="whitepaper">
                    <div>
                        <div className='row'>
                            <div className='col-md-3 offset-md-4'>
                                <Card className='ido-card'>
                                    <CardBody>
                                        <div className='pt-4 pb-4'>
                                            <h3 style={{ fontSize: '22px' }}>IDO SHDW</h3>
                                        </div>
                                        <div className='ido-content'>
                                            <Card className='ido-content-card mb-5' >
                                                <CardBody>
                                                    <div className='text-center'>
                                                        <p>Total raised</p>
                                                        <h4>
                                                            <img style={{ width: '25px', height: '25px' }} src='/images/usd.svg' alt='usd' />
                                                            52,029,280.58
                                                        </h4>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                            <Card className='ido-content-card mb-5' >
                                                <CardBody>
                                                    <div className='text-center'>
                                                        <p>Token Price</p>
                                                        <h4>
                                                            <img style={{ width: '25px', height: '25px' }} src='/images/usd.svg' alt='usd' />
                                                            52,029,280.58
                                                        </h4>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                            <Card className='ido-content-card mb-5' >
                                                <CardBody>
                                                    <div className='text-center'>
                                                        <p>Your contribution</p>
                                                        <h4>
                                                            <img style={{ width: '25px', height: '25px' }} src='/images/usd.svg' alt='usd' />
                                                            N/A
                                                        </h4>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                            <Card className='ido-content-card mb-5' >
                                                <CardBody>
                                                    <div className='text-center'>
                                                        <p>Redeemable amount</p>
                                                        <h4>
                                                            <img style={{ width: '25px', height: '25px' }} src='/images/usd.svg' alt='usd' />
                                                            N/A
                                                        </h4>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                        </div>
                                        <Button className='' > Redeem SHDW </Button>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                        <div className='row mt-5'>
                            <div className='col-md-6 offset-md-3'>
                                <FAQ />
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default IDO
