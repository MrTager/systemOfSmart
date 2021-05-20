
const SmartDeviceInfo:React.FC = () => {
    return (
        <>
            <header></header>
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
            <div></div>
        </>
    )
}
export default SmartDeviceInfo;