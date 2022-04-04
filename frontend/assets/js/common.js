const url = 'http://localhost:5001'

const transferData = async (url, method = 'GET', data = {}) => {
    let options = {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        }
    }

    if (method != 'GET')
        options.body = JSON.stringify(data)

    const resp = await fetch(url, options)

    return resp.json()
}

const getData = () => {

    transferData(url + '/show-data')

        .then(resp => {

            let html = '<ul>'


            resp.forEach(value => {

                console.log(value)
                html += `<li class="clearfix"  data-id="${value._id}">
                         <span style="text-decoration-line: underline;" class="content">${(value.content)}</span>
                        <a style="position: absolute; vertical-align: middle; padding: 0; border: 0; font-size: 1em; align-items: center; text-align: center;  height: 20px; font-size : 15px; margin:5px" class="btn btn-danger float-end delete">Delete</a>
                         <a style="position: absolute; vertical-align: middle; padding: 0; border: 0; font-size: 1em; align-items: center; text-align: center; text-align: center;  height: 20px; margin:5px; " class="btn btn-primary  edit">Edit</a>
                    </li>`
            })

            html += '</ul>'

            document.querySelector('#content').innerHTML = html

            document.querySelectorAll('.delete').forEach(element => {
                let id = element.parentElement.getAttribute('data-id')

                element.addEventListener('click', () => {

                    transferData(url + '/delete-data/' + id, 'DELETE')
                        .then(resp => {

                        })
                    getData()
                })

            })

            document.querySelectorAll('.edit').forEach(element => {

                let id = element.parentElement.getAttribute('data-id')

                element.addEventListener('click', () => {
                    console.log("Labas")
                    var x = document.getElementById("input");

                    if (x.style.display === "block") {
                        x.style.display = "none";
                    } else {
                        x.style.display = "block";
                    }


                    document.querySelector("input").value = ''




                    let send = document.getElementById("send")
                    send.addEventListener('click', () => {

                        console.log("paspausta")

                        task = document.querySelector("input").value

                        console.log(task)

                        transferData(url + '/edit-todo/' + id, 'PUT', { task })

                            .then(resp => {



                            })
                        getData()
                    })


                })
            })
        })
}

window.addEventListener('load', () => {
    getData()

})