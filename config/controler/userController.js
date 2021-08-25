const model = require('../../models');

exports.newUser = (req, res, next) => {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let createdAt = new Date();
    let updatedAt = new Date();

    model.User.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        createdAt: createdAt,
        updatedAt: updatedAt,
    }).then (result => {
        res.status(200).send(result);
    }).catch(error=>{
        req.status(500).send("Error en la creación del usuario");
    });
}

exports.findUsuarios = (req, res) => {
    model.User.findAll().then (result => {
        res.status(200).send(result);
    }).catch(error => {
        req.status(500).send("Error");
    });
}


