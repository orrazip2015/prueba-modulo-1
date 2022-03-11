//mensaje de ofertas
alert("Oferta 2x1!!!!!!")

// componente toast
$(document).ready(function() {


    var toastTrigger = document.getElementById('liveToastBtn')
    var toastLiveExample = document.getElementById('liveToast')
    if (toastTrigger) {
        toastTrigger.addEventListener('click', function() {
            var toast = new bootstrap.Toast(toastLiveExample)

            toast.show()
        })
    }
});