'use-strict';

//IIFE
(function () {
    //Formulario
    class Form {

        validator;

        constructor(validator) {
            this.validator = validator;
        }

        submit(fields) {
            let field = Array.from(this.getFields(fields));

            if(this.getValues(field))
                this.showError('error');
        }

        //private
        getFields(fields) {
            return document.getElementsByClassName(fields);
        }

        //private
        getValues(inputs) {
            let  status = false;

            inputs.forEach(input => {
                if(this.validator.isEmptyOrNull(input.value))
                    status = true;
            });

            return status;
        }

        //private
        showError(error) {
            document.getElementById(error).style.display = 'block';
        }
    }

    class Validators {

        isEmptyOrNull(value) {
            if (value === "" || value === null)
                return true;

            return false;
        }

        isNumeric(value) {
            if (isNaN(value))
                return true;

            return false;
        }
    }

    let form = new Form(new Validators);
    let btn = document.getElementById('btn-process');

    btn.addEventListener('click', function () {
        form.submit('form-control');
    })

    // Realizar el proceso final del formulario mostrando el resultado en pantalla de los datos recojidos
    // y procesar cuando solo sea numero
})();