$(document).ready(function() {
    var resultDiv = document.getElementById('result-search')
    
    var familia = document.getElementById('id_familia')    
    var tamanio = document.getElementById('id_tamanio')
    var mov_estacional = document.getElementById('id_movimientos_estacionales')
    var status_conservacion = document.getElementById('id_status_conservacion')
    var largo_pico = document.getElementById('id_largo_pico')
    var largo_patas = document.getElementById('id_largo_patas')
    var forma_alas = document.getElementById('id_forma_alas')
    var largo_cuello = document.getElementById('id_largo_cuello')
    var cuello_vuelo = document.getElementById('id_cuello_vuelo')
    var largo_cola = document.getElementById('id_largo_cola')
    var forma_cola = document.getElementById('id_forma_cola')
    var patron_coloracion = document.getElementById('id_patron_coloracion')
    var cabeza = document.getElementById('id_cabeza')
    var grupo = document.getElementById('id_grupo')

    var csrf = document.getElementsByName('csrfmiddlewaretoken')[0].value

    sendSearchData = (ave) => {
        $.ajax({
            type:'POST',
            url: '../search/',
            data: {
                'csrfmiddlewaretoken': csrf,
                'ave': JSON.stringify(ave)
            },
            success: (res)=> {
                var tdCadena = "<thead><tr><th scope='col'>Imagen</th><th scope='col'>Nombre</th><th scope='col'>Accion</th></tr></thead>"
                const data = res.data
                console.log(data)
                
                if (Array.isArray(data)) {
                    resultDiv.innerHTML = ""
                    console.log('hay un array')
                    data.forEach(ave=> {
                        tdCadena += "<tr><td><img src=" + ave.imagen + " class='ave-img'></td><td class='nombre-ave'><label style='font-size: 1.15rem !important;font-weight: bold;color: darkslategrey;'>" + ave.nombre + "</label></td>";
                        tdCadena += "<td><a href='../detalle/" + ave.pk + "' class='btn btn-success'>Ver ficha</a></td></tr>"
                        
                        resultDiv.innerHTML = tdCadena
                    })
                } else {
                    resultDiv.innerHTML = `<b>${data}</b>`
                }


            },
            error: (err)=> {
                console.log(err)
            }
        })
    }

    var arr = {
        familia: "",
        tamanio: "",
        movimientos_estacionales: "",
        status_conservacion: "",
        largo_pico: "",
        largo_patas: "",
        forma_alas: "",
        largo_cuello: "",
        cuello_vuelo: "",
        largo_cola: "",
        forma_cola: "",
        patron_coloracion: "",
        cabeza: "",
        grupo: ""
    }


    familia.addEventListener('change', e=>{
        console.log(e.target.value)
    
        if (resultDiv.classList.contains('not-visible')) {
            resultDiv.classList.remove('not-visible')
        }
        arr.familia = e.target.value
        console.log(arr)
        sendSearchData(arr)
    })
    tamanio.addEventListener('change', e=>{
        console.log(e.target.value)
    
        if (resultDiv.classList.contains('not-visible')) {
            resultDiv.classList.remove('not-visible')
        }
        arr.tamanio = e.target.value
        console.log(arr)
        sendSearchData(arr)
    })

    mov_estacional.addEventListener('change', e=>{
        console.log(e.target.value)
    
        if (resultDiv.classList.contains('not-visible')) {
            resultDiv.classList.remove('not-visible')
        }
        arr.movimientos_estacionales = e.target.value
        console.log(arr)
        sendSearchData(arr)
    })
    status_conservacion.addEventListener('change', e=>{
        console.log(e.target.value)
    
        if (resultDiv.classList.contains('not-visible')) {
            resultDiv.classList.remove('not-visible')
        }
        arr.status_conservacion = e.target.value
        console.log(arr)
        sendSearchData(arr)
    })
    largo_pico.addEventListener('change', e=>{
        console.log(e.target.value)
    
        if (resultDiv.classList.contains('not-visible')) {
            resultDiv.classList.remove('not-visible')
        }
        arr.largo_pico = e.target.value
        console.log(arr)
        sendSearchData(arr)
    })
    largo_patas.addEventListener('change', e=>{
        console.log(e.target.value)
    
        if (resultDiv.classList.contains('not-visible')) {
            resultDiv.classList.remove('not-visible')
        }
        arr.largo_patas= e.target.value
        console.log(arr)
        sendSearchData(arr)
    })

    forma_alas.addEventListener('change', e=>{
        console.log(e.target.value)
    
        if (resultDiv.classList.contains('not-visible')) {
            resultDiv.classList.remove('not-visible')
        }
        arr.forma_alas= e.target.value
        console.log(arr)
        sendSearchData(arr)
    })
    largo_cuello.addEventListener('change', e=>{
        console.log(e.target.value)
    
        if (resultDiv.classList.contains('not-visible')) {
            resultDiv.classList.remove('not-visible')
        }
        arr.largo_cuello= e.target.value
        console.log(arr)
        sendSearchData(arr)
    })
    cuello_vuelo.addEventListener('change', e=>{
        console.log(e.target.value)
    
        if (resultDiv.classList.contains('not-visible')) {
            resultDiv.classList.remove('not-visible')
        }
        arr.cuello_vuelo= e.target.value
        console.log(arr)
        sendSearchData(arr)
    })
    largo_cola.addEventListener('change', e=>{
        console.log(e.target.value)
    
        if (resultDiv.classList.contains('not-visible')) {
            resultDiv.classList.remove('not-visible')
        }
        arr.largo_cola= e.target.value
        console.log(arr)
        sendSearchData(arr)
    })

    forma_cola.addEventListener('change', e=>{
        console.log(e.target.value)
    
        if (resultDiv.classList.contains('not-visible')) {
            resultDiv.classList.remove('not-visible')
        }
        arr.forma_cola= e.target.value
        console.log(arr)
        sendSearchData(arr)
    })
    patron_coloracion.addEventListener('change', e=>{
        console.log(e.target.value)
    
        if (resultDiv.classList.contains('not-visible')) {
            resultDiv.classList.remove('not-visible')
        }
        arr.patron_coloracion= e.target.value
        console.log(arr)
        sendSearchData(arr)
    })
    cabeza.addEventListener('change', e=>{
        console.log(e.target.value)
    
        if (resultDiv.classList.contains('not-visible')) {
            resultDiv.classList.remove('not-visible')
        }
        arr.cabeza= e.target.value
        console.log(arr)
        sendSearchData(arr)
    })
    grupo.addEventListener('change', e=>{
        console.log(e.target.value)
    
        if (resultDiv.classList.contains('not-visible')) {
            resultDiv.classList.remove('not-visible')
        }
        arr.grupo= e.target.value
        console.log(arr)
        sendSearchData(arr)
    })

})