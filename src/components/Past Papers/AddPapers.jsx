import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

export default function AddPapers() {
    const [pdf, setPdf] = React.useState();
    const [year, setYear] = React.useState();
    const [university, setUniversity] = React.useState();
    const [disabled, setDisabled] = React.useState(false);

    const history = useHistory();
    const sendFiles = async(e) => {
      e.preventDefault();
      try {
        setDisabled(true)
        const res = await axios.post("/paper/addPaper", { university, year, pdf });
        setDisabled(false);
        alert(res.data);
        history.push('/');
      } catch (error) {
        
      }
    }
  return (
    <div>
        <form action="" onSubmit={sendFiles}>
            <div class="mb-3 mt-5">
              <p style={{textAlign: 'center', fontSize: 30, marginBottom: 10}}>Add paper</p>
          <label for="formFile" class="form-label">
        Enter University Name
          </label>
          <input
            class="form-control"
            type="text"
            id="formFile"
            name="file"
            onChange={(e) => {
              setUniversity(e.target.value);
            }}
          />
        </div>
        <div class="mb-3">
          <label for="formFile" class="form-label">
            Enter year
          </label>
          <input
            class="form-control"
            type="text"
            id="formFile"
            name="file"
            onChange={(e) => {
              setYear(e.target.value);
            }}
          />
        </div>
        <div class="mb-3">
          <label for="formFile" class="form-label">
            Upload PDF File
          </label>
          <input
            class="form-control"
            type="text"
            id="formFile"
            name="file"
            onChange={(e) => {
              setPdf(e.target.value);
            }}
          />
        </div>
        <button
          className="btn btn-success"
          type="submit"
          style={{ float: "right" }}
        >
          Send
        </button>
      </form>
    </div>
  )
}
