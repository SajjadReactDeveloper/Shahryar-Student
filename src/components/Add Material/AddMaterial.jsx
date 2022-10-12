import React from 'react'
import { useHistory} from 'react-router-dom'

export default function LearningDashboard() {
    const history = useHistory();
  return (
    <div>
          <div style={{ textAlign: "center", marginTop: 20, fontSize: 30 }}>
            <p>Add Learning Material</p>
            <button
              className="btn btn-success"
              onClick={() => {
                history.push("/addFile");
              }}
              style = {{ width: '100%', marginBottom: 20 }}
            >
              Upload File
            </button>
            <br />
            <button
              className="btn btn-success"
              onClick={() => {
                history.push("/addVideo");
              }}
              style = {{ width: '100%', marginBottom: 20 }}
            >
              Upload Video
            </button>
          </div>
    </div>
  );
}
