import ProgressBar from './ProgressBar';
import React, { useState } from 'react'
import './ProgressBar.css';

export default function test() {
    return(
        <div className="app-container">   
        <ProgressBar
            barWidthPixels="300px" 
            chartTitle="Chart Title"
        ></ProgressBar>
        </div>
    )
}