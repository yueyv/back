const user = require('../models/user')
const User = require('../models/user')
const useController = {
    showUser: async function (req, res, next) {
        try {
            let userData = await User.all()
            res.json({
                code: 200,
                message: "success",
                data: userData
            })
        } catch (e) {
            res.json({ code: 0, message: "default", data: e })
        }

    },
    login: async function (req, res, next) {
        try {
            // let id=req.query.id
            // console.log(req.body);
            let id = req.body.account
            let pwd = req.body.password
            // console.log(req.query.id)
            let userData = await User.inquire(id)
            let data = JSON.parse(JSON.stringify(userData))
            const newData = { ...data }['0']
            const useId = Buffer.from(newData.id, 'utf-8').toString('base64')
            if (newData.password == pwd) {
                res.json({
                    code: 200,
                    message: "success",
                    data: {
                        token: `${useId}`
                    }
                })
            } else {
                res.json({
                    code: 202,
                    message: 'pwderrow',
                    data: {

                    }
                })
            }

        } catch (e) {
            res.json({ code: 202, message: "iderror", data: e })
        }
    },
    register: async function (req, res, next) {
        try {
            // let id=req.query.id
            // console.log(req.body);
            let id = req.body.account
            let pwd = req.body.password
            // console.log(req.query.id)
            const params = {
                id: `${id}`,
                name: 'unknown',
                password: `${pwd}`,
                innertime: `00:00`,
                icon: ''
            }
            let result = await User.insert(params)
            console.log(result)
            const useId = Buffer.from(id, 'utf-8').toString('base64')
            res.json({
                code: 200,
                message: "success",
                data: {
                    token: `${useId}`
                }
            })
        } catch (e) {
            console.log(e)
            res.json({ code: 202, message: "iderror", data: {}})
        }
    }
}
module.exports = useController