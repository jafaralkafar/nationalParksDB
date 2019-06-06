module.exports = {
    read: (req, res) => {
        let db = req.app.get('db')
        db.getNationalParks().then((response) => {
            res.send(response)
        }).catch(err => res.status(500).send(err))
    },
    create: (req, res) => {
        let db = req.app.get('db')
        db.createNationalPark(req.body).then((response) => {
            res.send(response)
        }).catch(err => res.status(500).send(err))
    },
    update: (req, res) => {
        let db = req.app.get('db')
        let { id } = req.params
        let park = req.body
        park.id = id
        db.updateNationalPark(park).then((response) => {
            res.send(response)
        }).catch(err => res.status(500).send(err))
    },
    delete: (req, res) => {
        let db = req.app.get('db')
        let { id } = req.params
        db.deleteNationalPark(id).then((response) => {
            res.send(response)
        }).catch(err => res.status(500).send(err))
    }
}