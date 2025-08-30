import "toastr/build/toastr.min.css";
import toastr from "toastr";

toastr.options = {
  closeButton: false,
  debug: false,
  newestOnTop: true,
  progressBar: false,
  positionClass: "toast-top-right",
  preventDuplicates: true,
  showDuration: "400",
  hideDuration: "1000",
  timeOut: "2000",
  showEasing: "swing",
  hideEasing: "linear",
  showMethod: "fadeIn",
  hideMethod: "fadeOut",
};

export const Toast = {
  success: (msg, title = "Success") => toastr.success(msg, title),
  error: (msg, title = "Error") => toastr.error(msg, title),
  info: (msg, title = "Info") => toastr.info(msg, title),
  warning: (msg, title = "Warning") => toastr.warning(msg, title),
};
