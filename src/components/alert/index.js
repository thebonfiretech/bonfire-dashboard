import Swal from "sweetalert2";

const Alert = ({ icon, title, confirm, cancel, timer, onConfirm, onCancel }) => {
  Swal.fire({
    position: "center",
    icon: icon,
    title: title,
    confirmButtonText: 'Sim, delete!',
      cancelButtonText: 'Não, cancelar!',
    showConfirmButton: confirm,
    confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    showCancelButton: cancel,
    timer: timer,
    background: "#363636",
    customClass: {
      popup: "custom-popup-class",
      title: "custom-title-class",
      content: "custom-content-class",
    },
  }).then((result) => {
    if (result.isConfirmed) {
      onConfirm();
      Swal.fire({
        title: 'Deletado!',
        text: 'Seu arquivo foi deletado.',
        icon: 'success',
        background: '#363636',
        color: "#EEEEEE",
        confirmButtonColor: '#3085d6',
      });
    } 
    else if (result.dismiss === Swal.DismissReason.cancel) {
        onCancel();
        Swal.fire({
          title: 'Cancelado',
          text: 'Ação cancelada :)',
          icon: 'info',
          background: '#363636',
          color: "#EEEEEE",
          confirmButtonColor: '#3085d6',
        });
      }
    });

};

export default Alert;
