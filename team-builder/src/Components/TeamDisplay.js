import React from "react";
import MemberForm from "./MemberForm";

export default function Display(props) {
    return (
        <div className="displayWrap">
            <h2>Introducing the team!</h2>
            <div className="display">
                { props.value.map(mem => (
                <p>{mem.name}</p>)) }
            </div>
        </div>
        
        
    )
}