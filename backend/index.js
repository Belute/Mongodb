import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express()

app.use(cors())

app.use(express.json())

app.use(express.urlencoded({
    extended: false
}))

//                                         /Sukurtos duombzės pavadinimas
mongoose.connect('mongodb://localhost/facebook', (err) => {
    if (!err)
        console.log('Prisijungimas prie duomenu bazes pavyko')
});

//Schemos duomenu bazeje sukurimas, inicijuojamas po viena karta kiekvienai kolekcijai (lentelei)
const postsSchema = new mongoose.Schema({
    content: String,
    data: String
})

//Schemos priskyrimas i modeli, inicijuojamas kartu su auksciau aprasytu kodu
const posts = mongoose.model('posts', postsSchema)

app.get('/show-data', (req, res) => {



    posts.find((err, data) => {
        if (err)
            return console.log(err)

        res.json(data)
    })


    app.delete('/delete-data/:id', (req, res) => {
        let id = req.params.id

        posts.findByIdAndDelete(id).exec()
        posts.find((err, data) => {
            if (err)
                return console.log(err)

            res.json(data)
        })
    })
})



app.put('/edit-todo/:id', (req, res) => {
    let id = req.params.id
    let post = posts.findByIdAndUpdate(id, {
        content: req.body.task
    })
        .then(data => {
            data.content = post
            console.log(data.content)
        })
})

app.post('/save-data', (req, res) => {
    //Naujo iraso sukurimas ir issaugojimas duomenu bazeje
    const newPost = new posts()
    newPost.content = req.body.content
    newPost.data = req.body.data
    newPost.save()

    res.send('Duomenys išsaugoti duomenų bazėje')
})

let post = posts.findByIdAndUpdate('62448b6786f095f5aaffebfe', {
    content: 'Programiskai paredaguotas irasas'
})
    .then(data => {
        console.log('Irasas sekmingai atnaujintas')
    })



app.listen(5001)