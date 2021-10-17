const router = require('express').Router();

router.get('/',(req, res) =>{
    res.render('index');
});
router.get('/contact',(req, res) =>{
    res.render('contact');
});
router.get('/about',(req, res) =>{
    res.render('about');
});

router.all('*', (req,res) =>{
    res.status(404).render('error404')
})


module.exports = router;