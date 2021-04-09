import React,{useState} from 'react';
import './style.css'
import { Form, Input, Button, Checkbox, Popconfirm, message} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};
interface Iprops  {
    userInfo: Object | String
}
const  Login = (props:Iprops) => {
    const {userInfo} = props
    const [text] = useState({
        forgetPwd:'请联系管理员！',
        register:'请联系管理员开通！'
    })
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };
    
    const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
    };
    const registerConfirm = () => {
    }
    const forgetPwsConfirm = () => {

    }
    interface loginProps {
        username:String,
        password:String
    }
    const login = (values:loginProps) => {
       
        // message.loading({ content: '正在登录...', loginKey });
        // login(values.username,values.password)
        // .then((res)=>{
        //     getUserInfo(values.username,values.password)
        //     .then((res)=>{
        //         if(values.remember){
        //             //保存到cookie
        //             setCookies(process.env.REACT_APP_TOKEN_NAME,res.item,7)
        //             this.props.saveUserDate(res.item,"userInfo")
        //             message.success({ content: '登录成功!', loginKey, duration: 2 });
        //             this.props.history.push('/')
        //         }else{
        //             this.props.saveUserDate(res.item,"userInfo")
        //         }
        //     })
        //     .catch((err)=>{

        //     })
           
        // })
        // .catch((err)=>{
           
        // })
    };
    return (
        <div id='login-page' style={styles.page}>
                <div>{JSON.stringify(userInfo)}</div>
                <div className={'formContainer'}>
                    <div className={"inputBox"}>
                        <Form
                            name="normal_login"
                            className={"login-form"}
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={login}
                        >
                            <Form.Item
                                name="username"
                                rules={[
                                {
                                    required: true,
                                    message: '请输入用户名!',
                                },
                                ]}
                            >
                            <Input prefix={<UserOutlined className={"site-form-item-icon"} />} placeholder="用户名" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                {
                                    required: true,
                                    message: '请输入密码!',
                                },
                                ]}
                            >
                                <Input
                                prefix={<LockOutlined className={"site-form-item-icon"} />}
                                type="password"
                                placeholder="密码"
                                />
                            </Form.Item>
                            
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>记住我</Checkbox>
                            </Form.Item>
                            <Form.Item>
                                <Popconfirm
                                    placement="right"
                                    title={text.forgetPwd}
                                    onConfirm={forgetPwsConfirm}
                                    okText="确定"
                                    cancelText="取消"
                                >
                                <a className={"login-form-forgot"} href="#">
                                    忘记密码
                                </a>
                                </Popconfirm>
                                
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" className={"login-form-button"}>
                                登录
                                </Button>
                                或者 
                                <Popconfirm
                                    placement="right"
                                    title={text.register}
                                    onConfirm={registerConfirm}
                                    okText="确定"
                                    cancelText="取消"
                                >
                                <a href="#">
                                注册
                                </a>
                                </Popconfirm>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
    )
}

const styles = {
    page:{
        width:'100vw',
        height:'100vh',
        backgroundColor:"#f5f5f6",
        border:'1px solid rgba(0,0,0,0)'
    }
}

export default React.memo(Login)