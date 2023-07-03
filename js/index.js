const boton_perfil = document.querySelector('.btn-colapsar-perfil');
console.log(boton_perfil);

boton_perfil.addEventListener('click', function() {

    document.getElementById('perfil-contenedor').classList.toggle('perfil-colapsar-active');
    document.getElementsByClassName('perfil-img')[0].classList.toggle('colapsar-active');
    document.getElementsByClassName('perfil-descrp')[0].classList.toggle('colapsar-active');
    document.getElementsByClassName('perfil-titulo')[0].classList.toggle('colapsar-active');
    document.getElementsByClassName('perfil-nombre')[0].classList.toggle('colapsar-active');
    document.getElementsByClassName('perfil-link')[0].classList.toggle('colapsar-active');
    document.getElementsByClassName('perfil-link')[1].classList.toggle('colapsar-active');
    document.getElementsByClassName('perfil-link')[2].classList.toggle('colapsar-active');
    document.getElementsByClassName('fa-facebook')[0].classList.toggle('colapsar-active');
    document.getElementsByClassName('fa-github')[0].classList.toggle('colapsar-active');
    document.getElementsByClassName('fa-linkedin')[0].classList.toggle('colapsar-active');
    document.getElementsByClassName('main-contenedor')[0].classList.toggle('colapsar-active');

})