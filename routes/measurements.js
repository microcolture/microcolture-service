var express = require('express');
var router = express.Router();
var Measurement = require('models/Measurement');

/* GET measurement listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a measurement');
});

router.post('/', function (req, res, next) {
  /*
      {
        "sourceId" : "{sourceId}",
        "eventType" : "{eventType}",
        "time" : "{time}",
        "severity": "{severity}",
        "seqnumber": {
            "deviceLastSeqnumber": "{deviceLastSeqnumber}"
        },
        "data": "{data}"
    }
    */
    const measurement = req.body.data;
    const sourceId = req.body.sourceId;
    const eventType = req.body.eventType;
    const time = req.body.time;
    const severity = req.body.severity;
    const seqnumber = req.body.seqnumber;
    const data = req.body.data;




});
module.exports = router;
