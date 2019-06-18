
import toastr from 'toastr'
toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-bottom-right",
    "preventDuplicates": true,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}

export const success = Msg => {
    toastr.success(Msg, 'Success')
} 

export const warning = Msg => {
    toastr.warning(Msg, 'Warning')
}

export const error = Msg => {
    toastr.error(Msg, 'Error')
}

