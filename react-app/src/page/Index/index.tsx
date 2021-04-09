import React,{useState} from 'react';
const Index = () => {

    return (
        <div className='login-page' style={styles.page}>
            这是主页面
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

export default React.memo(Index)