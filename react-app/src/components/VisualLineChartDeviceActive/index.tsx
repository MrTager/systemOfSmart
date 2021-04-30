// import ReactEcharts from 'echarts-for-react';
import React,{useEffect} from "react"
import * as echarts from 'echarts';
import styles from './index.module.scss'
import {
    BarChart,
    // 系列类型的定义后缀都为 SeriesOption
    BarSeriesOption,
    LineChart,
    LineSeriesOption
} from 'echarts/charts';
import {
    TitleComponent,
    // 组件类型的定义后缀都为 ComponentOption
    TitleComponentOption,
    GridComponent,
    GridComponentOption
} from 'echarts/components';
import {
    CanvasRenderer
} from 'echarts/renderers';

type ECOption = echarts.ComposeOption< BarSeriesOption | LineSeriesOption | TitleComponentOption | GridComponentOption >;
const VisualLineChartDeviceActive:React.FC = () => {
    // const getOption = () => {
    //     let option = {
    //         xAxis: {
    //             type: 'category',
    //             data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    //         },
    //         yAxis: {
    //             type: 'value'
    //         },
    //         series: [{
    //             data: [820, 932, 901, 934, 1290, 1330, 1320],
    //             type: 'line',
    //             smooth: true
    //         }],
    //     };
    //     return option
    // }
    let myRef:any = null;
    const setMyRef = (e:any) => {
        myRef = e
    }
    let myEchart = null;
    useEffect(()=>{
        myEchart = echarts.init(myRef);
        myEchart.setOption({
            legend: {
                top: 'bottom'
            },
            toolbox: {
                show: true,
                feature: {
                    mark: {show: true},
                    dataView: {show: true, readOnly: false},
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            series: [
                {
                    name: '面积模式',
                    type: 'pie',
                    radius: [50, 100],
                    center: ['50%', '50%'],
                    roseType: 'area',
                    itemStyle: {
                        borderRadius: 8
                    },
                    data: [
                        {value: 40, name: 'rose 1'},
                        {value: 38, name: 'rose 2'},
                        {value: 32, name: 'rose 3'},
                        {value: 30, name: 'rose 4'},
                        {value: 28, name: 'rose 5'},
                        {value: 26, name: 'rose 6'},
                        {value: 22, name: 'rose 7'},
                        {value: 18, name: 'rose 8'}
                    ]
                }
            ]
        })
        console.log('获取节点',myRef)
    },[])


    return (
        // <div className={styles.box}>
        //     <ReactEcharts
        //         className={styles.content}
        //         style={{width:'100%',height:'250px',padding:'0px'}}
        //         option={getOption()}
        //     ></ReactEcharts>
        // </div>
        <div  className={styles.box}>
            <div className={styles.content} ref={setMyRef}></div>
        </div>
    )
}
export default VisualLineChartDeviceActive