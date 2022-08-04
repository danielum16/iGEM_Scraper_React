import { FunctionComponent } from "react"
import { Table } from "react-bootstrap"
type RowData = {
    url: string,
    abstract: string,
    team: string,
    title: string
}

type Props = {
    data: RowData[]
}

const MyTable: FunctionComponent<Props> = ({ data }) => {
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Team</th>
                        {/* <th>Url</th> */}
                        <th>Abstract</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row) => {
                        return <tr>
                            <td>{row.title}</td>
                            <td>{row.team}</td>
                            <td>{row.abstract}</td>
                        </tr>
                    })}

                </tbody>
            </Table>
        </>
    )
}

export default MyTable