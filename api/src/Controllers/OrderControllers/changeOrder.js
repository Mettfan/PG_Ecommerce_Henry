const {Order} = require ('../../models/Order');

const changeOrder = async(req, res, next) => {
    try {
        const {id} = req.params;
        const {state} = req.body;
        console.log(state);
        const result = await Order.update(
            { state:  state},
            { where: { id: id } }
          )
          return res.json(result)
    } catch (error) {
        console.log(error)
    }
}

module.exports = changeOrder;