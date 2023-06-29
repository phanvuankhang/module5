import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"

export default function InformationList({information}) {
    return(
        <>
            <h1 style={{textAlign:"center" }}>Vietnam's COVID-19 Information</h1>
            <table className="table table-striped table-inverse table-responsive">
                <thead className="thead-inverse">
                <tr>
                    <th>Date</th>
                    <th>Confirmed</th>
                    <th>Active</th>
                    <th>Recovered</th>
                    <th>Deaths</th>
                </tr>
                </thead>
                <tbody>
                {
                    information.map((information)=>(
                        <tr key={information.id}>
                            <td scope="row">{information.date}</td>
                            <td>{information.confirmed}</td>
                            <td>{information.active}</td>
                            <td>{information.recovered}</td>
                            <td>{information.deaths}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            </>
    )
}

export const getStaticProps=async ()=>{
    const res= await axios.get("http://localhost:8080/information")
    return {
        props:{
            information: res.data
        }
    }
}