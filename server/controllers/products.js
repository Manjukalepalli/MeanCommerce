const product = require('mongoose').model('product');

module.exports = {
    index(request, response) {
        console.log('controllers file - get all products')
        product.find({})
            .then(products => response.json(products))
            .catch(console.log);
    },

  show(request, response) {
    console.log('controllers file - get one product',request.params.productID)
    product.findById(request.params.productID)
    .then(products => response.json(products))
    .catch(console.log);

    },

    create(request, response) {
        console.log('controllers file - adding a new product')
        product.create(request.body)
            .then(product => response.json(product))
            .catch(error => {
                const errors = Object.keys(error.errors).map(
                    key => error.errors[key].message
                );
                response.json(errors);
            });
    },

    update(request, response) {
        console.log('controllers file - updating a product', request.body)
        product.findByIdAndUpdate(request.params.productID, request.body, {new: true})
            .then(product => response.json(product))
            .catch(console.log);
    },

    destroy(request, response) {
        console.log('controllers file - deleting a product', request.productID)
        product.findByIdAndRemove(request.params.productID)
            .then(product => response.json(product))
            .catch(console.log);
    }
}
