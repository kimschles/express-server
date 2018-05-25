const express = require('express')
const responses = require('../responses')
const cors = require('cors')
const port = (process.env.PORT || 3000)
const app = express()

const findById = (responses, id) => {
    return responses.find((response) => {
        return response.id === id
    })
}

app.use(cors())

app.get('/', (req, res) => res.status(200).json(responses))

app.get('/:id', (req, res) => {
    let query = findById(responses.data, parseInt(req.params.id))
    if (query === undefined) {
        res.status(404).json({
            error: {
                message: "No record found!"
            } 
        })
    } else {
        res.status(200).json(query)
    }
    
})

app.listen(port, () => console.log(`App listening on port ${port}!`))