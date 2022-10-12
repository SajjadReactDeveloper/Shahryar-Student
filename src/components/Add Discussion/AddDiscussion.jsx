import React from 'react'
import axios from 'axios';

export default function DiscussionForm() {
    const [response, setResponse] = React.useState();

    const sendData = async(e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/discussion/addQuery', {query: response});
            alert(res.data);
        } catch (error) {
            
        }
    }
  return (
    <div
      className="container"
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <p className="mt-5 text-center mb-3 fw-bold" style={{ fontSize: 30 }}>
        Discussion Form
      </p>
      <form action="" onSubmit={sendData}>
        <div class="mb-3 w-50 justify-content-center">
          <label for="exampleFormControlInput1" class="form-label">
            Enter Query
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            onChange={(e) => {
              setResponse(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <button className="btn btn-success" type='submit'>Send</button>
        </div>
      </form>
    </div>
  );
}
