import React, { PureComponent } from 'react';
import ReactEcharts from 'echarts-for-react';
import styles from './index.module.scss'

const VisualLineChartDeviceActive = ()=>{
    const getOption = ()=>{
        let option = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                smooth: true
            }]
        };
        return option
    }
    return (
        <div className={styles.box}>
        <ReactEcharts
            className={styles.content}
            style={{width:'100%',height:'100%',padding:'0px'}}
            option={getOption()}
        ></ReactEcharts>
        </div>
    )
}
export default VisualLineChartDeviceActive