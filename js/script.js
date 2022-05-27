const nombre = document.querySelector('#name');
const email = document.querySelector('#email');
const comentario = document.querySelector('#comentario');
const btnEnviar = document.querySelector('#enviar');
const pErrorName = document.querySelector('#pNameError');
const pErrorMail = document.querySelector('#pMailError')
const pErrorComent = document.querySelector('#pComentError')
const alertSuccess = document.querySelector('.alert');
const form = document.querySelector('#form')

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{2,40}$/,
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    coment: /^[a-zA-Z0-9_.+-]{1,80}$/
}

const campos = {
    name : 'false',
    emial : 'false',
    coment : 'false'
}

btnEnviar.addEventListener('click', (e) => {
    e.preventDefault()
    validarDatos()
})

const validarDatos = () => {
    validarName()
    validarEmail()
    validarComent()
    
    let {name, email, coment} = campos

    if (name, email, coment) {
        alertSuccess.style.display = "block"
        setTimeout(()=> {
            alertSuccess.style.display = "none"
            form.reset()
        },5000)
    } 
}

const validarName = () => {
    const nombreValido = expresiones.nombre.test(nombre.value)
    if (nombreValido) {
        pErrorName.classList.remove('form-input-error-activo')
        nombre.classList.remove('form-error-input')
        campos.name = true
    } else {
        pErrorName.classList.add('form-input-error-activo')
        nombre.classList.add('form-error-input')
        campos.name = false

    }
    return nombreValido;
}

const validarEmail = () => {
    const mailValido = expresiones.correo.test(email.value)
    if (mailValido) {
        pErrorMail.classList.remove('form-input-error-activo')
        email.classList.remove('form-error-input')
        campos.emial = true
    } else {
        pErrorMail.classList.add('form-input-error-activo')
        email.classList.add('form-error-input')
        campos.emial = false
    }
}

const validarComent = () => {
    const comentValido = expresiones.coment.test(comentario.value)
    if (comentValido) {
        pErrorComent.classList.remove('form-input-error-activo')
        comentario.classList.remove('form-error-input')
        campos.coment = true
    } else {
        pErrorComent.classList.add('form-input-error-activo')
        comentario.classList.add('form-error-input')
        campos.coment = false
    }
    return comentValido;
}
