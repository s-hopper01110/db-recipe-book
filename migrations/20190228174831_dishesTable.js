
exports.up = function(knex, Promise) {
    return knex.schema.createTable('dishes',
    function(tbl) {

        //id of the dish - includes primary key
        tbl.increments();
        
        //name for dish
        tbl
            .string('name', 128)
            .notNullable()

        tbl
        .timestamps(true, true)


    })

};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('dishes')
  
};
