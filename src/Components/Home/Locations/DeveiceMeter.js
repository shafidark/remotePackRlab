import React from 'react';
import './DeviceMeter.css';
import '../../../responsive.css';

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
   
} from 'recharts';


const DeveiceMeter = (props) => {
     const{voltege01, voltage02, voltage03, voltage04, voltage05,vBat, txPower, rssiGateway, nMedicion, msActivo, longitude,latitude, current01, rassiGateWay, resistance, temperature, nMessages} = props.data;

     const data = [
        {
            name: 'Voltage1',
            uv: voltege01,
            pv: voltege01,
            amt: voltege01
        }, {
            name: 'Voltage2',
            uv: voltage02,
            pv: voltage02,
            amt: voltage02
        }, {
            name: 'Voltage3',
            uv: voltage03,
            pv: voltage03,
            amt: voltage03
        }, {
            name: 'Voltage4',
            uv: voltage04,
            pv: voltage04,
            amt: voltage04
        },
        {
            name: 'Voltage4',
            uv: voltage05,
            pv: voltage05,
            amt: voltage05
        }
    ];
    return (
        <div className="container">
            <h1 className="meter-text">Meter</h1>
            <div>
                <div className="row thead">
                    <div className="col-md-4 meter-col">
                        <p>Date</p>
                    </div>
                    <div className="col-md-1 meter-col">
                        <p>Vcc 1</p>
                    </div>
                    <div className="col-md-1 meter-col">
                        <p>Vcc 2</p>
                    </div>
                    <div className="col-md-1 meter-col">
                        <p>Vcc 3</p>
                    </div>
                    <div className="col-md-1 meter-col">
                        <p>Vcc 4</p>
                    </div>
                    <div className="col-md-1 meter-col">
                        <p>Vcc 5</p>
                    </div>
                    <div className="col-md-3 meter-col">
                        <p>Current 1</p>
                    </div>
                </div>
                <div className="row tbody">
                    <div className="col-md-4 meter-data" data-content="Date">
                        <p>12/12/21 08:06:15</p>
                    </div>
                    <div className="col-md-1 meter-data" data-content="Vcc 1">
                        <p>{voltege01}V</p>
                    </div>
                    <div className="col-md-1 meter-data" data-content="Vcc 2">
                        <p>{voltage02}V</p>
                    </div>
                    <div className="col-md-1 meter-data" data-content="Vcc 3">
                        <p>{voltage03}V</p>
                    </div>
                    <div className="col-md-1 meter-data" data-content="Vcc 3">
                        <p>{voltage04}V</p>
                    </div>
                    <div className="col-md-1 meter-data" data-content="Vcc 3">
                        <p>{voltage05}V</p>
                    </div>
                    <div className="col-md-3 meter-data" data-content="Current 1">
                        <p>{current01}A</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="row my-2 status-container">
                    <div className="col-xl-3 col-md-2 text-start p-0 status-data-container">
                        <span className="status-title">Status:</span>
                        <span>Ok</span>
                    </div>
                    <div className="col-xl-6 col-md-8 p-0 status-mid-data">
                        <span className="status-title">Last connection:</span>
                        <span className="status-data-date">12/12/21</span>
                        <span>06:04:25</span>
                    </div>
                    <div className="col-xl-3 col-md-2 text-end p-0 status-data-container">
                        <span className="status-title">Vbat:</span>
                        <span>{vBat}V</span>
                    </div>
                </div>
            </div>
            <div className="chart-container">
                    <LineChart width={800} height={150} className="charts" data={data}>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                    </LineChart> 
            </div>
            <div className="device-meter-scroll">
                <div>
                    <div>
                        <p className="row title-control">Control</p>
                        <div className="row">
                            <div className="col-xl-3 col-lg-3">
                                <p className="control-input-text">Period :</p>
                            </div>
                            <div className="col-xl-5 col-lg-5 control-input-box"><input className="control-input-number" type="number" value={latitude}/></div>
                            <div className="col-xl-4 col-lg-4"></div>
                        </div>
                        <div className="row">
                            <div className="col-xl-3 col-lg-3">
                                <p className="control-input-text">Freq :</p>
                            </div>
                            <div className="col-xl-5 col-lg-5 control-input-box"><input className="control-input-number" type="number" value={longitude}/></div>
                            <div className="col-xl-4 col-lg-4"></div>
                        </div>
                        <div className="meter-button d-flex justify-content-end">
                            <div className="btn btn-primary button1"><span>INT CYCLE</span></div>
                            <div className="btn btn-primary button2"><span>ON / OFF</span></div>
                        </div> 
                        
                    </div>
                    <ul className="row d-flex justify-content-lg-around text-light device-meter-list-container">
                        <li className="col-md-3 text-start"><label className="device-meter-list" htmlFor="">txPower:</label> {txPower}</li>
                        <li className="col-md-3 text-start"><label className="device-meter-list" htmlFor="">rssiGateway:</label> {rssiGateway}</li>
                        <li className="col-md-3 text-start"><label className="device-meter-list" htmlFor="">nMedicion:</label> {nMedicion}</li>
                        <li className="col-md-3 text-start"><label className="device-meter-list" htmlFor="">msActivo:</label> {msActivo}</li>
                    </ul>
                    <ul className="row d-flex justify-content-lg-around text-light device-meter-list-container">
                        <li className="col-md-3 text-start"><label className="device-meter-list" htmlFor="">rassiGateWay:</label> {rassiGateWay}</li>
                        <li className="col-md-3 text-start"><label className="device-meter-list" htmlFor="">resistance:</label> {resistance}</li>
                        <li className="col-md-3 text-start"><label className="device-meter-list" htmlFor="">temperature:</label> {temperature}</li>
                        <li className="col-md-3 text-start"><label className="device-meter-list" htmlFor="">nMessages:</label> {nMessages}</li>
                    </ul>
                </div>
            
            </div>
        </div>
    );
};

export default DeveiceMeter;