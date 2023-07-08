const express = require('express');
const campsiteRouter = express.Router();

campsiteRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the campsites to youuuuuu');
})
.post((req, res) => {
    res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
    
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites');
})
.delete((req, res) => {
    res.end('Deleting all campsites');
});

campsiteRouter.route('/:campsiteId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send details of the campsite: ${req.params.campsiteId} to you`);
})
.post((req, res) => {
  res.statusCode = 403;
    res.end(`POST operation not supported on /campsites/${req.params.campsiteId}`);
})
.put((req, res) => {
    res.write(`Updating the campsite: ${req.params.campsiteId}\n`);
    res.end(`Will update the campsite: ${req.body.name}
        with description: ${req.body.description}`);
})
.delete((req, res) => {
    res.end(`Deleting campsite: ${req.params.campsiteId}`);
});

module.exports = campsiteRouter;



// ///simple version
// const express = require('express');
// const promotionRouter = express.Router();

// promotionRouter.get('/', (req, res) => {
//     res.send('Will send all the promotions to you');
// });

// promotionRouter.post('/', (req, res) => {
//     res.send(`Will add the promotion: ${req.body.name} with description: ${req.body.description}`);
// });

// promotionRouter.put('/', (req, res) => {
//     res.status(403).send('PUT operation not supported on /promotions');
// });

// promotionRouter.delete('/', (req, res) => {
//     res.send('Deleting all promotions');
// });

// promotionRouter.get('/:promotionId', (req, res) => {
//     res.send(`Will send details of the promotion: ${req.params.promotionId} to you`);
// });

// promotionRouter.put('/:promotionId', (req, res) => {
//     res.write(`Updating the promotion: ${req.params.promotionId}\n`);
//     res.end(`Will update the promotion: ${req.body.name} with description: ${req.body.description}`);
// });

// promotionRouter.delete('/:promotionId', (req, res) => {
//     res.send(`Deleting promotion: ${req.params.promotionId}`);
// });

// module.exports = promotionRouter;




