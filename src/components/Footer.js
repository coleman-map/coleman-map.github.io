import React, { Component } from 'react';

export default function Footer(props) {

    if (props.data) {
        var networks = props.data.social.map(function (network) {
            return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
        })
    }

    return (
        null
    );
}

