import React from "react";
import MemberForm from "./MemberForm";

export default function Display(props) {
    return (
        <div className="displayWrap">
            <div className="display">
                { props.value.map(mem => (
                <p>{mem.name}</p>)) }
            </div>
        </div>
    )
}