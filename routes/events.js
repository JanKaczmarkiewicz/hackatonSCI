const express = require('express')
const {
    check
} = require('express-validator')

const auth = require('../middleware/auth')
const validate = require('../middleware/validate')

const Event = require('../Models/Event')
const User = require('../Models/User')

const router = express.Router()

const sanitizeEvent = ({
    creator,
    _id: id,
    location,
    participans,
    date,
    timeStamp    
}) => ({
    id,
    creator,
    location,
    participans,
    date,
    timeStamp,
    maxParticipans
})

/**
 * @route GET /api/events
 * @desc Get all events
 * @returns all events
 * @access public
 */
router.get('/', async (req, res) => {
    
    try {
        const events = await Event.find()
        
        if (!events) {
            return res.status(404).send({
                warnings: ["No data found."]
            })
        }

        const eventResult = events.map(sanitizeEvent)
    
        res.status(200).send(eventResult)
    } catch (err) {
        console.log(err);
        
        return res.status(404).send({
            warnings: ["Data unreachable."]
        })
    }
})


/**
 * @route GET /api/events
 * @desc Get single event
 * @returns event with specefied id
 * @access public
 */
router.get('/:id', async (req, res) => {
    
    try {

        const event = await Event.findOne({ _id: req.params.id})
        
        if (!event) {
            return res.status(404).send({
                warnings: ["No data found."]
            })
        }

        const eventResult = sanitizeEvent(event)

        return res.status(200).send(eventResult)

    } catch (error) {
        return res.status(404).send({
            warnings: ["Data unreachable."]
        })
    }
})

/**
 * @route POST /api/events
 * @desc Add event
 * @access private
 */
router.post('/', [
    auth,
    check('name', 'Please privide name of event.').not().isEmpty(),
    check('location', 'Please privide valid phone.').not().isEmpty(),
    check('date', 'Please privide valid date.').isNumeric(),
    check('maxParticipans', 'Please privide valid max.').isNumeric(),
    validate
], async (req, res) => {

    const userId = req.userId
    const foundUser = await User.findById(userId)

    if (!foundUser) {
        return res.status(404).send({
            errors: ['User id in token is not apropierate.']
        })
    }

    const { name, location, date, maxParticipans } = req.body

    const event = new Event({
        creator: userId,
        name,
        location,
        date,
        maxParticipans
    })

    try {
        const eventDocument = await event.save()
        const resultevent = sanitizeEvent(eventDocument)
 
        res.status(200).send(resultevent)
    } catch (err) {
        res.status(404).send({
            warnings: ['Write error.']
        })
    }
})

/**
 * @route PUT /api/events
 * @desc Update event
 * @access private
 */
router.put('/:id', [
    auth,
    check('name', 'Please privide name of event.').optional(),
    check('email', 'Please privide valid email.').isEmail().optional(),
    check('phone', 'Please privide valid phone.').isMobilePhone().optional(),
    //check('phone', 'Please privide date.').isDate().optional(),
    validate
], async (req, res) => {

    const update = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        date: req.body.date
    }

    try {
        const updatedEvent = await event.findOneAndUpdate({
            _id: req.params.id,
            user: req.userId
        }, update, {
            new: true,
            upsert: true
        })

        const eventResult = sanitizeEvent(updatedEvent)

        return res.status(200).send(eventResult)

    } catch {
        return res.status(404).send({
            errors: ["event not found"]
        })
    }
})

/**
 * @route DELETE /api/events
 * @desc Update event
 * @access private
 */
router.delete('/:id', auth, async (req, res) => {

    const result = await event.findOneAndRemove({
        _id: req.params.id,
        user: req.userId
    })

    if (!result) {
        res.status(404).send({
            errors: ["event not found."]
        })
    }

    res.status(200).send({
        msg: "Sucessfully removed record."
    })
})



module.exports = router