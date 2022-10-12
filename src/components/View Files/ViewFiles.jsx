import React from 'react'
import axios from 'axios'

export default function ViewFile() {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        getData();
    }, [])

    const getData = async() => {
        try {
            const res = await axios.get("/pdf/viewFiles");
            console.log(res)
            setData(res.data);
        } catch (error) {
            
        }
    }
  return (
    <div>
      <p style={{ textAlign: "center", fontSize: 30, margin: 20 }}>Lectures</p>
      {data.map((data, i) => (
        <div className="border p-3 m-3">
          <a className="" href={data.pdf}>
            Lecture {i + 1}
          </a>
        </div>
      ))}
    </div>
  );
}