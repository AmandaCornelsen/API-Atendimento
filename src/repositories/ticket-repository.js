const Ticket = require('../models/ticket');

class TicketRepository {
    async findAll() { 
        return await Ticket.find({ ativo: true });
    }

    async findByNumero(numero) { 
        return await Ticket.findOne({ numero }); 
    }

    async create(data) { 
        const obj = new Ticket(data); 
        return await obj.save(); 
    }

    async updateByNumero(numero, data) { 
        return await Ticket.findOneAndUpdate(
            { numero }, 
            data, 
            { new: true, runValidators: true }
        ); 
    }

    async deleteByNumero(numero) { 
        return await Ticket.findOneAndUpdate(
            { numero }, 
            { ativo: false }, 
            { new: true }
        ); 
    }
}

module.exports = new TicketRepository();
