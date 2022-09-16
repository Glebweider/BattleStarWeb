import {Doughnut, arc} from 'react-chartjs-2';
import { Chart, RadialLinearScale } from 'chart.js';
import React from 'react';


const data = {
    labels: ['red', 'blue', 'yellow', 'green', 'orange'],
    datasets: [{
        data: [12, 26, 31, 1, 7]
    }]
}


const chart = () => {

    return (
        <div>
            <Doughnut data={data}/>
        </div>
    );
};

export default chart;