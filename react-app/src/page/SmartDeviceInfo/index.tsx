import { Steps } from 'antd';
const { Step } = Steps;
const SmartDeviceInfo:React.FC = () => {
    return (
        <>
            <header>
            <Steps current={1}>
                <Step title="功能定义" description="" />
                <Step title="人机交互" subTitle="" description="" />
                <Step title="设备测试" description="" />
                <Step title="批量投产" description="" />
            </Steps>
            </header>
            <div>
                <div><button>添加</button></div>
                <ul className={'属性列表'}></ul>
            </div>
            <div>
                <div className={'itemList'}></div>
                <div className={"itemPanel"}></div>
            </div>
            <div>
                <div><button>测试设备添加</button></div>
                <ul className={'测试设备列表'}></ul>
            </div>
            <div>

            </div>
        </>
    )
}
export default SmartDeviceInfo;