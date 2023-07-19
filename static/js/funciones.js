var searchInput = document.getElementById('search-input')
var resultDiv = document.getElementById('result-search')
var selectAves = document.getElementById('id_id_ave')

var csrf = document.getElementsByName('csrfmiddlewaretoken')[0].value


function selectAve(ave) {
    selectAves.options[ave].selected=true;
    
    console.log(ave)
}

sendSearchData = (ave) => {
    $.ajax({
        type:'POST',
        url: '../search_ave/',
        data: {
            'csrfmiddlewaretoken': csrf,
            'ave': ave
        },
        success: (res)=> {
            origen_url = window.location.href
            console.log(origen_url)
            var tdCadena = "<thead><tr><th scope='col'>Imagen</th><th scope='col'>Nombre</th><th scope='col'>Accion</th></tr></thead>"
            const data = res.data
            if (Array.isArray(data)) {
                resultDiv.innerHTML = ""
                console.log('hay un array')
                data.forEach(ave=> {
                    tdCadena += "<tr><td><img src=" + ave.imagen + " class='ave-img'></td><td>" + ave.nombre + "</td>"
                    
                    if (origen_url.includes('charge') == true) {
                        console.log(origen_url.includes('charge'))
                        tdCadena += "<td><button onclick='selectAve(" + ave.pk + ")'>Seleccionar</button></td></tr>"
                    } else {
                        console.log(origen_url.includes('charge'))
                        tdCadena += "<td><a href='detalle/" + ave.pk + "' class='btn btn-success'>Ver ficha</a></td></tr>"
                    }
                    resultDiv.innerHTML = tdCadena
                })
            } else {
            
                if (searchInput.value.length > 0) {
                    resultDiv.innerHTML = `<b>${data}</b>`
                } else {
                    resultDiv.classList.add('not-visible')
                }
            }
        },
        error: (err)=> {
            console.log(err)
        }
    })
}

searchInput.addEventListener('keyup', e=>{
    console.log(e.target.value)

    if (resultDiv.classList.contains('not-visible')) {
        resultDiv.classList.remove('not-visible')
    }

    sendSearchData(e.target.value)
})



