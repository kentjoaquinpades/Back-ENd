const express=require('express'),
    router = express.Router();

const service = require('../services/intranet.service')

//https://localhost:3000/intranet
router.get('/',async (req,res) => {
    const intranet = await service.getAllIntranet()
    res.send(intranet)
    })

    router.get('/:id',async (req,res) => {
        const intranet = await service.getAllIntranetById(req.params.id)
        res.send(intranet)
        })

    

    module.exports = router;