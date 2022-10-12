import React from 'react'
import axios from 'axios'

export default function ViewPaper() {
    const [data, setData] = React.useState([]);
    const[university, setUniversity] = React.useState([]);
    const[year, setYear] = React.useState([]);

    React.useEffect(() => {
        getData();
    }, [])

    const getData = async() => {
        try {
            const res = await axios.get("/paper/viewPaper");
            setData(res.data);
        } catch (error) {
            
        }
    }

    const searchUniversity = (e) => {
        setUniversity(data.filter(data => data.university.toLowerCase().startsWith(e.toLowerCase())))
        console.log(university)
    }

    const searchDate = (e) => {
        console.log(e)
      setUniversity(
        data.filter((data) =>
          data.year.toLowerCase().startsWith(e.toLowerCase())
        )
      );
      console.log(university);
    };
  return (
    <div className="container mt-5">
      <div className="">
        <input
          style={{ float: "right" }}
          className="form-control w-25 mb-3"
          type="text"
          placeholder="Search by university"
          onChange={(e) => searchUniversity(e.target.value)}
        />
      </div>
      <div className="mt-5">
        <select
          style={{ width: 170 }}
          className="form-select"
          aria-label="Default select example"
          onChange={(e) => searchDate(e.target.value)}
        >
          <option selected>Search by Year</option>
          {data.map((item) => (
            <option>{item.year}</option>
          ))}
        </select>
      </div>
      <p className="mt-5 text-center" style={{fontSize: 30, fontWeight: 'bold'}}>Papers</p>
      <div>
        {university.map((data, i) => (
          <div className="border p-3 mt-3">
            <a href={data.pdf} style={{ textDecoration: "none" }}>
              Paper {i + 1}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}