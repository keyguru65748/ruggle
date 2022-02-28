import React, { useState } from 'react'
import { Modal, ModalBody } from "reactstrap";
import { bscLogo, ethLogo, polygonLogo } from '../../../logo';

const TokenModal = ({ network }) => {
    const [open, setOpen] = useState(false);

    return (
        <>

            <span
                onClick={e => setOpen(!open)}
                style={{ fontSize: '20px ', cursor: 'pointer', display: 'flex' }}
            >Select
                <i style={{ fontSize: '25px', marginLeft: '10px' }} class="fas fa-angle-down"></i>
            </span>


            <Modal isOpen={open} toggle={() => setOpen(false)}>
                <ModalBody>
                    <div className='token-modal-content'>
                        <h4>Select a Token</h4>
                        <input className='form-control search-token' />
                    </div>
                    {
                        network === "eth" ?
                            <div className='mt-4'>
                                <div className='token-scroll'>
                                    {ethLogo.map(el => (
                                        <div className='d-flex single-token' onClick={e => { setOpen(false) }}>
                                            <div className=''>
                                                <img alt='img' style={{ width: '58px' }} src={el.logoURI} />
                                            </div>
                                            <div className='pl-4'>
                                                <p style={{ color: 'gray', fontWeight: 'bold' }}> {el.symbol} </p>
                                                <p style={{ color: 'gray' }}> {el.name} </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div> : ''
                    }
                    {
                        network === "bsc" ?
                            <div className='mt-4'>
                                <div className='token-scroll'>
                                    {bscLogo.map(el => (
                                        <div className='d-flex single-token' onClick={e => { setOpen(false) }}>
                                            <div className=''>
                                                <img alt='img' style={{ width: '58px' }} src={el.logoURI} />
                                            </div>
                                            <div className='pl-4'>
                                                <p style={{ color: 'gray', fontWeight: 'bold' }}> {el.symbol} </p>
                                                <p style={{ color: 'gray' }}> {el.name} </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div> : ''
                    }

                    {
                        network === "polygon" ?
                            <div className='mt-4'>
                                <div className='token-scroll'>
                                    {polygonLogo.map(el => (
                                        <div className='d-flex single-token' onClick={e => { setOpen(false) }}>
                                            <div className=''>
                                                <img alt='img' style={{ width: '58px' }} src={el.logoURI} />
                                            </div>
                                            <div className='pl-4'>
                                                <p style={{ color: 'gray', fontWeight: 'bold' }}> {el.symbol} </p>
                                                <p style={{ color: 'gray' }}> {el.name} </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div> : ''
                    }
                </ModalBody>
            </Modal>
        </>
    )
}

export default TokenModal
