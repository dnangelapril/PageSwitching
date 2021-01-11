import React from 'react';
import {Link} from 'react-router-dom';

const SecondPage =(props) =>{
    const StyleSheet ={
        width: "100vw",
        height: "100vh",
        backgroundColor: "#08D9D6",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    }
    return(
        <div style = {StyleSheet}>
            {/* {props.match.parm.id} */}
            <a href="/#/">第一頁</a>
            <Link to="/">第1頁</Link>
            <h1 style = {{color:"white", fontFamily:"Microsoft JhengHei"}}>我是第二頁</h1>
        </div>
    )
}

export default SecondPage;