// React
import React, { useEffect, useState } from "react";
import CardContent from "@mui/material/CardContent";
import DexTabs from "./DexTabs";
import { ethLogo } from "../../../logo";
import { Card } from "@mui/material";
import { connectWallet, isWalletConnected } from "../../../wallet";
import { FACTORY_CONTRACT, ROUTER_CONTRACT } from '../../../contract'


const DexUI = () => {
  const [isConnected, setIsConnected] = useState(false)
  useEffect(() => {
    document.getElementById('marque').addEventListener('mouseover', () => {
      document.getElementById('marque').stop()
    })
    document.getElementById('marque').addEventListener('mouseleave', () => {
      document.getElementById('marque').start()
    })
    console.log('Factory contract methods', FACTORY_CONTRACT)
    console.log('Router contract methods', ROUTER_CONTRACT)

  }, [])
  const WConnect = async () => {
    await connectWallet()
    setIsConnected(await isWalletConnected())
  }
  return (
    <div className="dex h-100">
      <section>
        <div className="container">
          <div className="marquee">
            <div className="row">
              <div className="col-md-2">
                <div className="p-15 text-right"> <span style={{ margin: '0 10px', color: 'red' }} ><i class="fab fa-free-code-camp"></i></span> Hot Pairs</div>
              </div>
              <div className="col-md-8">
                <marquee
                  id="marque"
                  className="marquee-box" >
                  <div className="marquee-content d-flex">
                    {ethLogo.map((el, i) => (
                      <>                      {
                        i < 10 ?
                          <div className='d-flex  mr-5' >
                            <div className=''>
                              <span style={{ color: 'lightgray', marginRight: '8px' }} > #{i + 1} </span>
                              <img alt="img" style={{ width: '18px', marginRight: '4px', borderRadius: '100%' }} src={el.logoURI} />
                            </div>
                            <div className=''>
                              <p style={{ color: 'white' }}>   {el.name} </p>
                            </div>
                          </div>
                          : ''
                      }
                      </>
                    ))}
                  </div>
                </marquee>
              </div>
              <div className="col-md-2 ">
                <div className="p-15"><i style={{ color: 'rgb(0 207 34)', marginRight: '10px' }} class="fas fa-circle"></i>Live Tranding</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <DexTabs />
                {
                  isConnected ?
                    <button className="connect-btn"  >Connected</button> :
                    <button className="connect-btn" onClick={e => WConnect()} >Connect</button>
                }
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DexUI;
