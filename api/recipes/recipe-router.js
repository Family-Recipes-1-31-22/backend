const router = require('express').Router()
const Class = require('./recipe-model')

const { restricted, only } = require("../auth/auth-middleware")

router.get('/', (req, res, next) => {
    Class.getAll()
    .then(classes => {
        res.json(classes)
    })
    .catch(next)
})
router.get('/:id', (req, res, next) => {
    Class.getById(req.params.id)
    .then(classes => {
        res.json(classes)
    })
    .catch(next({status: 404, message: 'unable to get class' }))
})
//Returns users by class_id
router.get('/signedUp/:id', (req, res, next) => {
    Class.userClass(req.params.id)
    .then(classes => {
        res.json(classes)
    })
    .catch(next({status: 404, message: 'Unable to get users!'}))
})
router.post('/', restricted, only("instructor"), (req, res, next) => {
    Class.add(req.body)
    .then(newClass => {
        res.json(newClass)
    })
    .catch(next({status: 400, message: 'Unable to create class!'}))
})

    
module.exports = router