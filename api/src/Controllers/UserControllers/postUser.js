const { User } = require('../../db');
const { encrypt } = require('../../helpers/handlebcripts');
const { tokenSign } = require('../../helpers/generateToken');
const nodemailer = require("nodemailer");





const postUser = async (req, res, next) => {
    try {
        const { name, lastName, picture, gender, born, dni, email, address, province, postal, phone, password, permission } = req.body;
        let passwordHash = null;

        if (password) {
            passwordHash = await encrypt(password);
        }

        let user = await User.findOne({ where: { email } });
        //let searchDni = await User.findOne({where : {dni}})
        if (!user/*  && !searchDni */) {
            user = await User.create({
                name,
                lastName,
                picture,
                gender,
                born,
                dni,
                email,
                address,
                province,
                postal,
                phone,
                password: passwordHash,
                permission,
            });

            const token = await tokenSign(user);

            var transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 465,
                secure: true,
                auth: {
                    user: "boomaropadeportiva@gmail.com",
                    pass: "xspwwcubqhuvkcjv",
                },
              });
        
            var mensaje = `
             
            Usted se ha registrado a Booma ropa deportiva, con los siguientes datos:<br/>
            Nombre: ${name}</br>
            Apellido: ${lastName}</br>
            DNI: ${dni}</br>
            correo electronico: ${email} </br>
            Télefono: ${phone} </br>
            Dirección: ${address} </br>
            Provincia: ${province} </br>
            CP: ${postal} </br>
            Si alguno de sus datos es incorrecto, ingrese a su cuenta y en la opcion de modificar datos puede realizarlo. </br>
            Bienvenido a la familia Booma, donde sus compras siempre serán cuidadas y seguras.</b>`;
              var mailOptions = {
                from: '"Envio de email"<malcolm.kihn33@ethereal.email>',
                to: email,
                subject: "Registro a Booma",
                //text: mensaje
                html: mensaje,
              };
              transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                  console.log(error);
                } else {
                  console.log("Email enviado: " + info.response);
                }
              });
            res.status(200).json({ msg: 'usuario creado con éxito', user, token });

        } else {
            user ? res.status(400).json({ msg: `Ya hay un usuario registrado con el email: ${email}` }) : res.status(400).json({ msg: `Ya hay un usuario registrado con el DNI: ${dni}` });

        }
    } catch (error) {
        next(error);
    }
};

module.exports = postUser;