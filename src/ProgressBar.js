import React from "react";

function ProgressBar(props) {
    const totalValue = "100";
    let totalUsageValue = 0;
    const usageArr = [
        {
            "id": 1,
            "name": "Item 1",
            "usageValue": 25,
            "color": "#2C4EFF"
        },
        {
            "id": 2,
            "name": "Item 2",
            "usageValue": 40,
            "color": "#9A2CFF"
        },
        {
            "id": 3,
            "name": "Item 3",
            "usageValue": 10,
            "color": "#FF892C"
        }
    ]

    return (
        <div className="chart-container">
            <div className="chart-title">{props.chartTitle}</div>
            <div className="progress-chart" style={{width: props.barWidthPixels}}>
                {usageArr.map((obj) => {
                    let calculatedVal = ((parseInt(props.barWidthPixels) / totalValue) * obj.usageValue) + 'px';
                    totalUsageValue += obj.usageValue;
                    return(
                        <div key={obj.id} className="progress" style={{width: calculatedVal, backgroundColor: obj.color}}></div>
                    )
                })}
            </div>
            <div className="chart-label">{totalUsageValue}K of {totalValue}K used</div>
            { usageArr.length > 1 &&
                <ul className="legends-list">
                    {usageArr.map((obj) => {
                        return (
                            <li className="legends-list-item">
                                <div className="legend-label">
                                    <span className="legend-label-color" style={{backgroundColor: obj.color}}></span>
                                    <span>{obj.name}</span>
                                </div>
                                <span className="legend-value">{obj.usageValue + 'K'}</span>
                            </li>
                        )
                    })}
                </ul>
            }
        </div>
    )
}

export default ProgressBar