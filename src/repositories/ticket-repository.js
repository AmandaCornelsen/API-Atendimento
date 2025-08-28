
const Ticket = require('../models/ticket');

class TicketRepository {
    async findAll() { 
        return await Ticket.find({ ativo: true }
        );
    }
    async findById(id) { 
        return await Ticket.findById(id); 
    }
    async create(data) { 
        const obj = new Ticket(data); 
        return await obj.save(); 
    }
    async update(id, data) { 
        return await Ticket.findByIdAndUpdate(
            id, 
            data, 
            { new: true, runValidators: true }
        ); 
    }
    async delete(id) { 
        return await Ticket.findByIdAndUpdate(
            id, 
            { ativo: false }, { new: true }
        ); 
    }
}

module.exports = new TicketRepository();
