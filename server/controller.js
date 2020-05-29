module.exports = {
    getProducts: (req, res) => {
       const db = req.app.get('db')
       
       db.get_inventory()
       .then(products => res.status(200).send(products))
       .catch(err => res.status(500).send(err))
    },

    addProduct: (req, res) => {
        const {product_name, product_img, price} = req.body

        const db = req.app.get('db')

        db.add_product(product_name, product_img, price)
        .then(product => res.status(200).send(product))
        .catch(err => res.status(500).send(err))
    }
}