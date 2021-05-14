import React, { useState, OverlayTrigger, Button, render, Tooltip } from 'react';
import ReactDOM from 'react-dom';

function Overlay(props) {
    const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
        Simple tooltip
    </Tooltip>
    );
    return (
    <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
    >
    <Button variant="success">Hover me to see</Button>
    </OverlayTrigger>
    );
}

export default Overlay;