document.addEventListener("DOMContentLoaded", () => {
    const ingresoTexto = document.getElementById("ingresoTexto");
    const botonEncriptador = document.getElementById("botonEncriptador");
    const btn__copiar = document.getElementById("btn__copiar");
    const mensaje__parrafo = document.getElementById("mensaje__parrafo");
    const titulo__mensaje = document.getElementById("titulo__mensaje");
    
    // a - ai
    // e - enter
    // i - imes
    // o - ober
    // u - ufat

    let remplazar = [ 
        ['e', 'enter'],
        ['o', 'ober'],
        ['i', 'imes'],
        ['a', 'ai'],
        ['u', 'ufat'],
    ];

    if (ingresoTexto && botonEncriptador) {
        botonEncriptador.addEventListener("click", () => {
            const texto = ingresoTexto.value.toLowerCase();
            
            function encriptar(nuevoTexto) {
                for (let i = 0; i < remplazar.length; i++) {
                    if (nuevoTexto.includes(remplazar[i][0])) {
                        nuevoTexto = nuevoTexto.replaceAll(remplazar[i][0], remplazar[i][1]);
                    }
                }
                return nuevoTexto;
            }
            const textoEncriptado = encriptar(texto);
            mensaje__parrafo.innerHTML = textoEncriptado;
            titulo__mensaje.innerHTML = "Texto encriptado";            
        });
    } 
});

let remplazar = [ 
    ['e', 'enter'],
    ['o', 'ober'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['u', 'ufat'],
];
const botonDesencriptador2 = document.getElementById("botonDesencriptador2");

if (ingresoTexto && botonDesencriptador2) {
    botonDesencriptador2.addEventListener("click", () => {    
        const texto = ingresoTexto.value.toLowerCase();
        console.log("Texto a desencriptar:", texto);
        
        function desencriptar(nuevoTexto) {
            for (let i = 0; i < remplazar.length; i++) {
                if (nuevoTexto.includes(remplazar[i][1])) {
                    nuevoTexto = nuevoTexto.replaceAll(remplazar[i][1], remplazar[i][0]);
                }
            }
            return nuevoTexto;
        }

        const textoDesencriptado = desencriptar(texto);
        mensaje__parrafo.innerHTML = textoDesencriptado;
        titulo__mensaje.innerHTML = "Texto desencriptado";
    });
}  else {
    console.error("Elementos no encontrados en el DOM");
}
if (btn__copiar) {
    btn__copiar.addEventListener("click", () => {
        const texto = mensaje__parrafo.innerHTML;
        navigator.clipboard.writeText(texto);
        titulo__mensaje.innerHTML = "Texto copiado";
    });
}