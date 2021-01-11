import React from 'react';
import {Link} from 'react-router-dom';

const Layout =(props) =>{
    const StyleSheet ={
        width: "100vw",
        height: "100vh",
        backgroundColor: (props.location.pathname==="/ThreePage") ? "#FF2E63" : "#08D9D6",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    }
    return(
        <div style = {StyleSheet}>
            <nav>
                <Link to="/ThreePage">點我連到第3頁</Link><br/>
                <Link to="/FourPage">點我連到第4頁</Link>
            </nav>
            {props.children}
        </div>
    );
}

export default Layout;