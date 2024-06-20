import StudentProps from "./StudentProp"



export default function StudentTable({students, deleted}){
  
    return(
        <table className="table table-striped">
            <thead>
              <tr>
                <th>MSV</th>
                <th>Họ đệm</th>
                <th>Tên</th>
                <th>Xoá</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => {
                return (
                  <StudentProps key={student.id} id={student.id} firstName={student.firstName} secondName={student.secondName} deleted={deleted} />
                )
              })}
  
            </tbody>
          </table>
    )
}