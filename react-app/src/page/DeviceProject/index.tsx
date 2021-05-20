import { Input } from 'antd';
import styles from './index.module.scss'

const { Search } = Input;
const DeviceProject:React.FC = () => {
    const onSearch = (value:String) => console.log(value);
    const listItem = (arr:Array<object>) => {
        arr.map( item => {
            return (<div>{item}</div>)
        })
    }
    return (
        <>
            <div className={styles.content}>
                <header className={styles.header}>
                    <Search
                        placeholder="input search text"
                        allowClear
                        enterButton="Search"
                        size="large"
                        onSearch={onSearch}
                    />
                </header>
                <div>
                    {listItem}
                </div>
            </div>
        </>
    )
}
export default DeviceProject;