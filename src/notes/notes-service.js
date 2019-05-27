const notesService = {
    //getall
    getAllNotes(knex) {
        return knex.select('*').from('notes')
    },
    //insert
    insertNote(knex, newNote){
        return knex
            .insert(newNote)
            .into('notes')
            .returning('*')
            .then(rows => {
                return rows[0]
            })
    },
    //getById
    getById(knex, id){
        return knex.from('notes').select('*').where('id', id).first()
    },
    //delete
    deleteNote(knex, id) {
        return knex({ id })
        .where({ id })
        .delete()
    },
    //update
    updateNote(knex, id, newNoteFields) {
        return knex('notes')
          .where({ id })
          .update(newNoteFields)
    },
}
module.exports = notesService