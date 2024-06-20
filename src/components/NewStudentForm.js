import { useState } from "react";

export default function NewStudentForm({ addStudent }) {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  function addStudentt() {
    if (lastName && firstName) {
      addStudent(lastName, firstName);
      setFirstName("");
      setLastName("");
    }
  }
  return (
    <div>
      <h2>Thêm sinh viên</h2>
      <div className="form-group">
        <label>Họ đệm</label>
        <input
          type="text"
          className="form-control"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Tên</label>
        <input
          type="text"
          className="form-control"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <button className="btn btn-success" onClick={addStudentt}>
        Thêm{" "}
      </button>
    </div>
  );
}
