import Swal from 'sweetalert2'
export default function StudentProps({id, firstName,secondName,deleted}){
  function deleteStudent() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        deleted(id);
        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: "The student has been deleted.",
          icon: "success"
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "The student is safe :)",
          icon: "error"
        });
      }
    });
  }
  
    return (
        <tr>
          <td>{id}</td>
          <td>{firstName}</td>
          <td>{secondName}</td>
          <td><button className="btn btn-danger" onClick={deleteStudent}><i class="fa-solid fa-trash"></i></button></td>
        </tr>
      );
}