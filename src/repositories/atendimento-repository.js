const mongoose = require('mongoose');
const Atendimento = mongoose.model('Atendimento');


exports.getAtendimento = async () => {
    const result = await Product.find({}, );

    return result;
}