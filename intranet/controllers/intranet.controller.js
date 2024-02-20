const express = require('express'),
    router = express.Router();

const service = require('../services/intranet.service')

//https://localhost:3000/intranet
router.get('/', async (req, res) => {
    const intranetData = await service.getAllIntranet()
    const formattedResponse = {
        tasks: intranetData.map(task => ({
            id: task.id,
            name: task.name,
        })),
        taskDurations: intranetData.map(task => ({
            id: task.id,
            start: task.date_start.toISOString().split('T')[0],
            end: task.date_due.toISOString().split('T')[0],
            task: task.id,
        })),
    };

    res.json(formattedResponse);

})

router.get('/:id', async (req, res) => {
    const intranet = await service.getAllIntranetById(req.params.id)
    res.send(intranet)
})



module.exports = router;