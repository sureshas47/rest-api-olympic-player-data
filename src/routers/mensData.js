
const { response } = require('express');
const express = require('express');

const MensPlayer = require('../model/mensSchema');

const router = new express.Router();

router.get('/', (req, res)=>{
    res.send("hello from root");
});

// insert
router.post("/mens-player", async (req,res) => {
    
    try {
        const request = req.body;
        request.map( async (val)=>{ //multiple doc insert
            const createPlayer = new MensPlayer(val);
            const result = await createPlayer.save();
                // ([result['ranking']]: result)
        });
        res.status(201).send("created");
        

    } catch (error) {
        res.status(200).send(error);
    }
});

// get
router.get("/mens-player", async (req, res)=> {
    try {
        
        const getPlayer = await MensPlayer.find().sort({"ranking":1}); //sort by rank
        res.send(getPlayer);

    } catch (error) {
        res.status(400).send(error);
    }
});

// get by id
router.get("/mens-player/:id", async (req, res)=> {
    try {
        
        const _id = req.params.id;
        const getPlayerId = await MensPlayer.findById(_id);
        res.send(getPlayerId);

    } catch (error) {
        res.status(400).send(error);
    }
});

// update
router.patch("/mens-player/:id", async (req, res)=> {
    try {

       const _id = req.params.id;
       const updateById = await MensPlayer.findByIdAndUpdate(_id,req.body,{
           new : true
       });
       res.send(updateById);

    } catch (error) {
        res.status(500).send(error);
    }
});

// delete
router.delete("/mens-player/:id", async (req, res)=> {
    try {

        const _id = req.params.id;
        const mensDelete = await MensPlayer.findByIdAndDelete(_id);
        res.send(mensDelete);

    } catch (error) {
        res.status(500).send(error)
    }
});


module.exports = router;
