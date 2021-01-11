import React from "react";
import { HashRouter, Route, Switch} from "react-router-dom";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThreePage from "./ThreePage";
import FourPage from "./FourPage";
import Layout from "./Layout";
import Home from "./Home";

const App =() =>{
    return(
        <HashRouter>
            {/* <Route path="/second:id?" component = {SecondPage}/>
            <Route path="/" component = {FirstPage}/> */}
            <Switch>
                <Route path="/Home" component = {Home}/>
                <Layout>
                    <Route exact path="/ThreePage" component = {ThreePage}/>
                    <Route path="/FourPage:id?" component = {FourPage}/>
                </Layout>
            </Switch>
            
        </HashRouter>
    );
}

export default App;