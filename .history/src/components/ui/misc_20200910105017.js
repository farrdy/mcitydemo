import React from 'react'
import { Link } from 'react-router-dom'

export const Tag = (props) => {
    const template = <div
        style={{
            background: props.bck,
            fontSize: props.size,
            color: props.color,
            padding: '5px 10px',
            display: "inline-block",
            fontFamily: "Righteous"
        }}>

        {props.children}

    </div>
    if (props.link) {
        return (

            <Link to={props.linkto}>
                {template}
            </Link>
        )
    }
    else {
        return template
    }

}

export const firebaseLooper = (snapshot) => {
    const mydata = [];
    snapshot.foreach((childSnapshot) => {
        mydata.push({ ...childSnapshot.val(), id: childSnapshot.key })
    })

}