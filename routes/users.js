



module.exports = app=>{

    app.get('/users', (req,res)=>{

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({
    
            users:[{
                name:'Hermanoteu',
                email:'bruxx@ho.com',
                id:1
            }],
            dorgas:[{
                name:'marijuana',
                conposer:'god'
            }]
        });
    });
    
    app.post('/users', (req, res)=>{
    
        res.json(req.body);
    
    });
};