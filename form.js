const d=document;
const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{4,12}$/, // 4 a 12 digitos.
}
const $name = d.querySelector('.name')
const $apellido = d.querySelector('.apellido')   //cada input.
const $correo = d.querySelector('.correo')
const $password = d.querySelector('.password')
const $controls = d.querySelectorAll('.controls');  //Todos los inputs.
const $formRegister = d.querySelector('.form-register')
const $barra = d.querySelector('.barra')

const validaInput=(e)=>{
  
    if(e.target.name === 'nombre') { 
        if(expresiones.nombre.test($name.value)) { 
            $name.classList.add('success')
            $name.classList.remove('error')
            
         } else { 
        $name.classList.remove('success')
        $name.classList.add('error')
          }
    }

    if(e.target.name === 'apellido') { 
        if(expresiones.apellido.test($apellido.value)) { 
            $apellido.classList.add('success')
            $apellido.classList.remove('error')
         } else { 
        $apellido.classList.remove('success')
        $apellido.classList.add('error')
          }
    }

    if(e.target.name === 'correo') { 
        if(expresiones.correo.test($correo.value)) { 
            $correo.classList.add('success')
            $correo.classList.remove('error')
         } else { 
        $correo.classList.remove('success')
        $correo.classList.add('error')
          }
    }

    if(e.target.name === 'password') { 
        if(expresiones.password.test($password.value)) { 
            $password.classList.add('success')
            $password.classList.remove('error')
         } else { 
        $password.classList.remove('success')
        $password.classList.add('error')
          }
    }


 }

$controls.forEach(input=>{
    input.addEventListener('keypress',validaInput)
    input.addEventListener('blur',validaInput)


    input.addEventListener('focus',e=>{
        $alertForm.classList.remove('alertForm')
        $alertForm.innerHTML = ""
    })
 })



 let $alertForm = d.createElement('span')
 $formRegister.insertAdjacentElement('afterbegin',$alertForm)


$formRegister.addEventListener('submit',e=>{
    e.preventDefault()
    let nombre =false;
    let apellido = false;
    let correo = false;
    let password = false;
    

    if($name.value === "" ) { 
        $name.classList.add('error')
        $name.classList.remove('success')
        $alertForm.classList.add('alertForm')
        $alertForm.innerHTML ='Debes rellenar todos los campos..'
    }

    if($apellido.value === "" ) { 
        $apellido.classList.add('error')
        $apellido.classList.remove('success')
        $alertForm.classList.add('alertForm')
        $alertForm.innerHTML ='Debes rellenar todos los campos..'
    }
    if($correo.value === "" ) { 
        $correo.classList.add('error')
        $correo.classList.remove('success')
        $alertForm.classList.add('alertForm')
        $alertForm.innerHTML ='Debes rellenar todos los campos..'
    }
    if($password.value === "" ) { 
        $password.classList.add('error')
        $password.classList.remove('success')
        $alertForm.classList.add('alertForm')
        $alertForm.innerHTML ='Debes rellenar todos los campos..'
    }
     if(expresiones.nombre.test($name.value)){ 
            nombre=true;
     }
     if(expresiones.apellido.test($apellido.value)){ 
        apellido=true;
     }
     if(expresiones.correo.test($correo.value)){ 
        correo=true;
     }
     if(expresiones.password.test($password.value)){ 
        password=true;
     }





     if(nombre && apellido && correo && password) {   //CODIGO QUE MUESTRA EL EXITO TOTAL 
        $barra.classList.remove('hidden')

        
        respuesta = setInterval(() => {
           $barra.value += 20;

           if($barra.value === 100) { 

            $barra.classList.add('hidden')
             console.log('Enviado');
             clearInterval(respuesta)
         
            $controls.forEach(e=>{
                e.classList.remove('success')
            })
            $formRegister.reset()
            }

        }, 200);


     }


 const $divExito = d.querySelector('.exito')
    

     
})



