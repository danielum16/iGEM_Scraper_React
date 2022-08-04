import '../App.css';
import MyNavBar from "../components/MyNavBar"
import MyTable from "../components/MyTable"
import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
// import Alert from 'react-bootstrap/Alert'
// import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import React, { useEffect, useState } from 'react'
import { setConstantValue } from 'typescript';

function About() {
    return (
        <div>
            <MyNavBar />
            <h1></h1>
            <h1>This project is an improvement upon my initial project in 2016, where I scrapped data from the iGEM Wiki. The new version now runs on React for a dynamic frontend and Django for a streamlined backend.</h1>
        </div>
    )
}

export default About;