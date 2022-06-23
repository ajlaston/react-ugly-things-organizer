import React from "react";
import * as UglyApi from "./api/UglyAPI.js";

const UglyContext = React.createContext();

function UglyProvider(props){

    const [formData, setFormData] = React.useState({
        title : "",
        imgUrl : "",
        description : ""
    });

    const [selected, setSelected] = React.useState("/");
    const [uglyArr, setUglyArr] = React.useState([]);
    const [appState, setAppState] = React.useState("idle");

    const app = {

        stateObj : {
            current : appState,
            Allstates : ["idle", "editing"],
        },

        form : {
            data : formData,
            setFormData
        },

        uglyArr : uglyArr,

        select : {
            get : selected,
            set : setSelected
        },

        loadData() {
            UglyApi.getAllThings().then(res=>{
                setUglyArr(res.data);
            })
        },

        setState(value){
            if(this.stateObj.Allstates.includes(value)){
                setAppState(value);
            } else {
                throw new Error(`the value: ${value} is not a valid state.`)
            }  
        },

        getState(value){
            if(this.stateObj.Allstates.includes(value)){
                if(appState === value){
                    return true;
                } else {
                    return false;
                }
            } else {
                throw new Error(`the value: ${value} is not a valid state.`)
            }  
        }
    }

    React.useEffect(()=>{
        app.loadData();
    }, [])

    return(
        <UglyContext.Provider value={app}>
            {props.children}
        </UglyContext.Provider>
    )
}

export {UglyProvider, UglyContext};