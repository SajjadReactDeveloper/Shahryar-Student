import React from 'react'
import { useHistory } from 'react-router-dom';

export default function ViewMaterialMain() {
    const history = useHistory();
  return (
    <div>
      <div className="row p-0 m-0">
        <div className="col-9">
          <p style={{ marginTop: 20, fontSize: 30, textAlign: "center" }}>
            View Material
          </p>
          <button
            className="btn btn-success"
            onClick={() => {
              history.push("/viewVideo");
            }}
          >
            View Videos
          </button>
          <br />
          <br />
          <button
            className="btn btn-success"
            onClick={() => {
              history.push("/viewFile");
            }}
          >
            View Files
          </button>
        </div>
      </div>
    </div>
  );
}
