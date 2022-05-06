# MongoDb

This project is for **educational** porpuses only. 

## Project features

-   CSS
-   Html
-   Js
-   NodeJs
-   MongoDb


### Authors

Justinas: [Github](https://github.com/Belute)

#### How To Use


- Open integrated terminal for backend directory and rename it: backend

- Open integrated terminal for frontend directory and rename it: frontend

- In backend terminal type: npm install nodemon

- In backend terminal type: npm run start

- In frontend terminal type: npm install

- In frontend terminal type: npm run start

- Open MongoDb, create database facebook

- Create posts  inside facebook



##### Code Sample

```css
body {
    background: rgb(176, 219, 255);
}

.todo-container {
    background: #fff;
    max-width: 600px;
    margin-top: 4rem;
    padding: 2rem;
    position: relative;
    background: rgb(34,193,195);
    background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
}
```
```js
        document.querySelectorAll('.delete').forEach(element => {
                let id = element.parentElement.getAttribute('data-id')

                element.addEventListener('click', () => {

                    transferData(url + '/delete-data/' + id, 'DELETE')
                        .then(resp => {

                        })
                    getData()
                })

            })



```
```html
 <body style="background-color: bisque; position: fixed; top: 25%; left: 25%">
    <div id="mongodb">
        <div class="container ongodb-container">
            <div class="list-heading">
                <h1 style="color: green">MongoDB</h1>
            </div>
            <!-- <div class="add-new">
                <div class="input-group mb-3">
                    <input type="text" id="new-todo" class="form-control" placeholder="Ką padaryti?" data-mode="add">
                    <button class="btn btn-outline-secondary" type="button" id="add-new-todo" data-edit-label="Redaguoti" data-add-label="Pridėti">Pridėti</button>
                </div>
            </div> -->
            <div id="input" style="display: none;">
                <input id="input-text" type="text"></input>
                <button id="send" class="send" type="submit">Send</button>
            </div>
            <div style="border-style: solid; border-color: blue; width: 1000px; position: relative; color: blue" style="color: green" id="content">
            </div>
        </div>
    </div>
    <script src="/assets/js/common.js"></script>
</body>
```
