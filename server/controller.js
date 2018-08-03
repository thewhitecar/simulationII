module.exports = {

    getHouses: (req, res) => {
        let db = req.app.get('db');
        db.getHouses().then(response => {
            res.status(200).send(response)
        })},

    postHouse: (req, res) => {
        let db = req.app.get('db');
        let {house_name, address, city, state, zipcode, image, monthly_mortgage_amount, desired_rent} = req.body;
        db.createHouse([house_name, address, city, state, zipcode, image, monthly_mortgage_amount, desired_rent]).then(response => {
            res.status(200).send(response)
        })
     },
     deleteHouse: (req, res) => {
        let {id} = req.params;
        let db = req.app.get('db');
        db.deleteHouse(id).then(response =>{
            res.send(response)
    })},
}