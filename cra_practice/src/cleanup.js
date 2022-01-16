import { useState, useEffect } from "react";


function Hello(){
    // function byFn() {
    //     console.log("bye");
    // }
    // function hiFn() {
    //     console.log("created");
    //     return byFn;
    // }
    // useEffect(hiFn , []);

    // 높은 확장성의 익명함수
    useEffect(function(){
        console.log("Created");
        return function(){
            console.log("Bye");
        }
    },
    [])
    return <h1>hello</h1>
}

function Appp(){
    const [showing , setShowing] = useState(false);
    const onClick = () => {setShowing((prev)=> !prev)}
    // const Hello = () => {
    //     useEffect(()=>{console.log("hi iam here")},[]);
    //     return <span>hello</span>
    // }
    return <div>
        <Hello />
        <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
        {showing ? <Hello /> : null}
    </div>
}

export default Appp;