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
    let myRef:any = null;
    const setMyRef = (e:any) => {
        myRef = e
    }
    let myEchart = null;
    useEffect(()=>{
        myEchart = echarts.init(myRef);
        myEchart.setOption({
            darkMode:true,
            tooltip: {
                trigger: 'item'
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center',
                        textStyle:{
                            color:'#fff'
                        },
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '40',
                            fontWeight: 'bold',
                            color:'#fff'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        {value: 1048, name: '搜索引擎'},
                        {value: 735, name: '直接访问'},
                        {value: 580, name: '邮件营销'},
                        {value: 484, name: '联盟广告'},
                        {value: 300, name: '视频广告'}
                    ]
                }
            ]
        })
    },[])
    return (
        <div  className={styles.box}>
            <div className={styles.content} ref={setMyRef}></div>
        </div>
    )
}
export default VisualLineChartDeviceActive