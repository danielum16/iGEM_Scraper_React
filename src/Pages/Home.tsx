// import logo from './logo.svg';
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
type States = {
    variant: string,
    text: string,
}
function Home() {
    const [color, setColor] = useState<string>("primary")
    const [alertContent, setAlertContent] = useState<States>({ variant: "primary", text: "primary" })
    const [showAlert, setShowAlert] = useState<Boolean>(true)
    const [text, setText] = useState<string>("")

    const [data, setData] = useState([])

    const api_url = "http://127.0.0.1:8000/"
    // const base_url = process.env.API_URL + "api?search_input="
    const base_url = api_url + "api?search_input="

    useEffect(() => {
        fetch(base_url + text).then(async (res) => setData((await res.json()).data))
    }, [text])

    return (
        <div className="Home">
            <MyNavBar />
            <Container fluid>

                <Form>
                    <Form.Group>
                        {/* <Form.Label>Search Input</Form.Label> */}
                        <Form.Control
                            placeholder="Search Input"
                            type="search"
                            value={text} onChange={(event) => setText(event.currentTarget.value)}
                        />
                        <Form.Text className="text-left" id="passwordHelpBlock" muted>
                            Please input they keyword(s) you would like to search for.
                        </Form.Text>
                    </Form.Group>
                </Form>

                <MyTable data={data} />
            </Container>


            {/* <Alert variant={alertContent.variant}>
        {alertContent.text}
      </Alert> */}

            {/* 

      <Button variant={color} onClick={() => setAlertContent({ variant: "secondary", text: "secondary" })}>Primary</Button>{' '}
      <Button variant={color} onClick={() => setAlertContent({ variant: "success", text: "success" })}>Primary</Button>{' '}
      <Button variant={color} onClick={() => setAlertContent({ variant: "light", text: "light" })}>Primary</Button>{' '}
      <Button variant={color} onClick={() => setAlertContent({ variant: "dark", text: "dark" })}>Primary</Button>{' '} */}


            {/* {showAlert && <Alert variant={alertContent.variant}>
        {text}
      </Alert>}


      <Button variant={color} onClick={() => setShowAlert(false)}>Hide</Button>{' '}
      <Button variant={color} onClick={() => setShowAlert(true)}>Show</Button>{' '} */}

            {/* <Form.Control type="text" value={text} onChange={(event) => setText(event.currentTarget.value)} /> */}


            {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
          Daniel
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}





        </div>
    );
}

export default Home;
