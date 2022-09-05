
var db = require("../db");
const jwt = require("jsonwebtoken");



const home = (req, res) => {
    res.send("Home Page");
};

const login = async (req, res) => {

    let query = `Select * from students where student_name = $1 AND email =  $2 `;
    let student = req.body;
    let params = [student.student_name, student.email];

    await db.query(query, params)
        .then(result => {
            let data = result.rows
            let token = jwt.sign({ data }, "secretkey", { expiresIn: "1h" });
            res.status(200).send({
                message: "access approved ",
                token: token,
                use_data: data,
            });
        })
        .catch(err => {
            res.status(400).send(err);
        })
};

const getAll = (req, res) => {
    const token = req.token
    let query = `Select * from users`;

    jwt.verify(token, 'secretkey', async (err, user_info) => {
        if (err) {
            res.status(400).send(err);
        } else {
            await db.query(query)
                .then(result => {
                    res.status(200).send({
                        message: "access approved ",
                        user_info: user_info,
                        data: result.rows
                    });
                })
                .catch(err => {
                    res.status(400).send(err);
                })
        }
    })
};


const getById = (req, res) => {
    const token = req.token;
    const id = [req.params.id];
    let query = `Select * from students where status = 'active' AND _id = $1 ORDER BY _id DESC`;

    jwt.verify(token, 'secretkey', async (err, user_info) => {
        if (err) {
            res.status(400).send(err);
        } else {
            await db.query(query, id)
                .then(result => {
                    res.status(200).send({
                        message: "access approved ",
                        user_info: user_info,
                        data: result.rows
                    });
                })
                .catch(err => {
                    res.status(400).send(err);
                })
        }
    })
};

const addStudent = (req, res) => {
    const token = req.token;
    const request = req.body;
    const values = [request.student_name, request.email, "active"];
    let query = `INSERT INTO students(student_name , email, status) VALUES ($1,$2,$3)`;

    jwt.verify(token, 'secretkey', async (err, user_info) => {
        if (err) {
            res.status(400).send(err);
        } else {
            await db.query(query, values)
                .then(
                    res.status(200).send({
                        message: "access approved ",
                        user_info: user_info,
                        data: {
                            name: values[0],
                            email: values[1]
                        }
                    })
                )
                .catch(err => {
                    res.status(400).send("fail query: " + err.message);
                })
        }
    })
};

const updateStudent = (req, res) => {
    const token = req.token;
    const id = req.params.id;
    const request = req.body;
    const values = [request.student_name, request.email, id];
    const query = `Update students set student_name = $1, email = $2 WHERE _id = $3`

    jwt.verify(token, 'secretkey', async (err, user_info) => {
        if (err) {
            res.status(400).send(err);
        } else {
            await db.query(query, values)
                .then(
                    res.status(200).send({
                        message: "access approved ",
                        user_info: user_info,
                        data: {
                            student_name: values[0],
                            email: values[1]
                        }
                    })
                )
                .catch(err => {
                    res.status(400).send("fail query: " + err.message);
                })
        }
    })
}

const deleteStudent = (req, res) => {
    const id = [req.params.id];
    const query = `UPDATE students SET status = 'deleted' where _id = $1`
    const token = req.token;


    jwt.verify(token, 'secretkey', async (err, user_info) => {
        if (err) {
            res.status(400).send(err);
        } else {
            await db.query(query, id)
                .then(
                    res.status(200).send({
                        message: "access approved ",
                        user_info: user_info,
                        data: "deleted"
                    })
                )
                .catch(err => {
                    res.status(400).send("fail query: " + err.message);
                })
        }
    })

}

module.exports = {
    home,
    getAll,
    login,
    getById,
    addStudent,
    updateStudent,
    deleteStudent
};