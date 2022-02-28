import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Card } from '@material-ui/core';
import TokenModal from './TokenModal';
import SettingsIcon from '@mui/icons-material/Settings';
import { CardBody } from 'reactstrap';
import { Switch } from '@mui/material';
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export default function DexTabs() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const [isSettingOpen, setIsSettingOpen] = React.useState(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const toggleSetting = () => {
        setIsSettingOpen(!isSettingOpen)
    }
    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <Box sx={{ bgcolor: 'background.paper', width: 500 }}>
            <div className='swap-flex-container' >
                <div className='text' >Swap</div>
                <div className='setting-icon'>
                    <SettingsIcon style={{ cursor: 'pointer' }} onClick={e => { toggleSetting() }} />
                    <Card className='settings  theme-shadow' style={{ display: isSettingOpen ? 'block' : 'none' }}>
                        <CardBody className='settings-box'>
                            <h4>Transection Settings</h4>
                            <h5 className=''>Slippage tolerance ?</h5>
                            <div className='t-box'>
                                <button className='c-btn auto-btn' > Auto </button>
                                <input className='t-input' placeholder='0.0%' />
                            </div>
                            <h5 className='mt-4'>Tranectoin deadline ?</h5>
                            <div className='t-deadline-box' >
                                <input placeholder='30' />
                                <h6>minutes</h6>
                            </div>
                            <h4 className='mt-4'>Interface Settings</h4>
                            <div className='i-box '>
                                <div className='auto-router-flex'>
                                    <h6 className='auto-router'>Auto Router API ?</h6>
                                    <div className='i-switch'>
                                        <Switch color='warning' />
                                    </div>
                                </div>
                                <div className='expert-mode-flex'>
                                    <h6 className='expert-mode'>Expert Mode ?</h6>
                                    <div className='i-switch'>
                                        <Switch color='warning' />
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <AppBar position="static">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label={(<p style={{ textTransform: 'capitalize' }} >Ethereum</p>)} {...a11yProps(0)} />
                    <Tab label={(<p style={{ textTransform: 'capitalize' }} >BSC</p>)} {...a11yProps(1)} />
                    <Tab label={(<p style={{ textTransform: 'capitalize' }} >Polygon</p>)} {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <div>
                        <Card className="p-3 pb-4" >
                            <div>
                                <div className='clearfix'></div>
                                <h5 style={{ fontSize: '16px', margin: '0' }}>From</h5>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div className=''>
                                        <input className='form-control token-input' placeholder='0.0' />
                                    </div>
                                    <div className=''>
                                        <div className='row c-pointer'>
                                            <div className='col-5'>
                                                <TokenModal network={"eth"} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <button className='c_btn max'  >max</button>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className='swap-icn'>
                        <span><i class="fas fa-retweet"></i></span>
                    </div>
                    <div>
                        <Card className="p-3 pb-4" >
                            <div>
                                <div className='clearfix'></div>
                                <h5 style={{ fontSize: '16px', margin: '0' }}>To</h5>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div className=''>
                                        <input className='form-control token-input' placeholder='0.0' />
                                    </div>
                                    <div className=''>
                                        <div className='row c-pointer'>
                                            <div className='col-5'>
                                                <TokenModal network={"eth"} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <button className='c_btn max'  >max</button>
                                </div>
                            </div>
                        </Card>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <div>
                        <Card className="p-3 pb-4" >
                            <div>
                                <div className='clearfix'></div>
                                <h5 style={{ fontSize: '16px', margin: '0' }}>From</h5>
                                <div className='flex-container'>
                                    <div className=''>
                                        <input className='form-control token-input' placeholder='0.0' />
                                    </div>
                                    <div className=''>
                                        <div className='row c-pointer'>
                                            <div className='col-5'>
                                                <TokenModal network={"bsc"} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <button className='c_btn max'  >max</button>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className='swap-icn'>
                        <span><i class="fas fa-retweet"></i></span>
                    </div>
                    <div>
                        <Card className="p-3 pb-4" >
                            <div>
                                <div className='clearfix'></div>
                                <h5 style={{ fontSize: '16px', margin: '0' }}>To</h5>
                                <div className="flex-container">
                                    <div className=''>
                                        <input className='form-control token-input' placeholder='0.0' />
                                    </div>
                                    <div className=''>
                                        <div className='row c-pointer'>
                                            <div className='col-5'>
                                                <TokenModal network={"bsc"} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <button className='c_btn max'  >max</button>
                                </div>
                            </div>
                        </Card>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <div>
                        <Card className="p-3 pb-4" >
                            <div>
                                <div className='clearfix'></div>
                                <h5 style={{ fontSize: '16px', margin: '0' }}>From</h5>
                                <div className='flex-container' >
                                    <div className=''>
                                        <input className='form-control token-input' placeholder='0.0' />
                                    </div>
                                    <div className=''>
                                        <div className='row c-pointer'>
                                            <div className='col-5'>
                                                <TokenModal network={"polygon"} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <button className='c_btn max'  >max</button>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className='swap-icn'>
                        <span><i class="fas fa-retweet" /></span>
                    </div>
                    <div>
                        <Card className="p-3 pb-4" >
                            <div>
                                <div className='clearfix'></div>
                                <h5 style={{ fontSize: '16px', margin: '0' }}>From</h5>
                                <div className='flex-container'>
                                    <div className=''>
                                        <input className='form-control token-input' placeholder='0.0' />
                                    </div>
                                    <div className=''>
                                        <div className='row c-pointer'>
                                            <div className='col-5'>
                                                <TokenModal network={"polygon"} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <button className='c_btn max'  >max</button>
                                </div>
                            </div>
                        </Card>
                    </div>
                </TabPanel>
            </SwipeableViews>
        </Box>
    );
}
