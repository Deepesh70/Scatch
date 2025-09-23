const express = require('express');
const router = express.Router();

router.get("/", function(req, res){
    res.send("Owners page");
});


module.exports = router;