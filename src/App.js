import { useState } from "react";
import StudentTable from "./components/StudentTable";
import NewStudentForm from "./components/NewStudentForm";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [students, setStudents] = useState([
    { id: 1, firstName: "Nguyễn Trung", secondName: "Hiệu" },
    { id: 2, firstName: "Lê Văn", secondName: "An" },
    { id: 3, firstName: "Trần Minh", secondName: "Hoàng" },
    { id: 4, firstName: "Phạm Thị", secondName: "Lan" },
    { id: 5, firstName: "Hoàng Anh", secondName: "Tuấn" },
    { id: 6, firstName: "Vũ Quang", secondName: "Minh" },
    { id: 7, firstName: "Đặng Huy", secondName: "Bảo" },
    { id: 8, firstName: "Ngô Thị", secondName: "Ngọc" },
    { id: 9, firstName: "Bùi Hữu", secondName: "Tài" },
    { id: 10, firstName: "Phan Thanh", secondName: "Vũ" },
    { id: 11, firstName: "Đỗ Văn", secondName: "Hùng" },
    { id: 12, firstName: "Lý Thị", secondName: "Hoa" },
    { id: 13, firstName: "Nguyễn Hồng", secondName: "Sơn" },
    { id: 14, firstName: "Phạm Văn", secondName: "Quý" },
  ]);

  function addStudent(lastName, firstName) {
    const newStudent = {
      id: students.length + 1,
      firstName: firstName,
      secondName: lastName,
    };
    setStudents([...students, newStudent]);
  }

  function deleted(id) {
    const newStudent = students.filter((student) => student.id !== id);
    setStudents(newStudent);
  }
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h1>Danh sách sinh viên</h1>
        </div>
        <div className="card-body">
          <StudentTable students={students} deleted={deleted} />
          <button
            className="btn btn-primary"
            onClick={() => {
              setShowForm(!showForm);
            }}
          >
            {showForm ? "Mở" : "Đóng"}
          </button>
          {showForm && <NewStudentForm addStudent={addStudent} />}
        </div>
      </div>
    </div>
  );
}

export default App;
