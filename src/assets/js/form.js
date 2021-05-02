'use-strict';

//IIFE
(function () {
    //Formulario
    class Form {

        validator;

        msgErrorEmpty = 'Por favor llena los campos';
        msgOnlyNumber = 'El Telefono debe ser numerico';

        constructor(validator) {
            this.validator = validator;
        }

        submit(form) {
            let inputs = this.getFields(form);

            try {
                this.checkInputValues(inputs);
                this.processForm(inputs);
            } catch (e) {
                this.showError('error', e);
            }
        }

        processForm(formValues) {
            let results = [];
            formValues.forEach(input => results.push(input.value));

            this.printToHTML(results);
            this.hideError('error');
        }

        printToHTML(toPrint) {
            let resultNode = document.querySelector('.result');

            resultNode.innerHTML = toPrint.join('<br>');
        }

        getFields(fields) {
            return Array.from(document.getElementsByClassName(fields));
        }

        checkInputValues(inputs) {
            let status = false;

            inputs.forEach(input => {
                if (this.validator.isEmptyOrNull(input.value))
                    throw this.msgErrorEmpty;
                else {
                    if (this.checkInputNumber(input))
                        throw this.msgOnlyNumber;
                }
            });

            return status;
        }

        checkInputNumber(element) {
            let status = false;

            if (this.inputIsNumber(element)) {
                if (this.isNumber(element.value))
                    status = true;
            }

            return status;
        }

        isNumber(value) {
            return (this.validator.isEmptyOrNull(value.match(/[0-9]/gi))) ? true : false;
        }

        inputIsNumber(field) {
            return field.classList.contains('form-control-number');
        }

        showError(error, message) {
            document.getElementById(error).style.display = 'block';
            document.getElementById(error).innerHTML = message;
        }

        hideError(error) {
            document.getElementById(error).style.display = 'none';
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