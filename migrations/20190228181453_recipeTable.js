
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes',
    function(tbl) {

        //id of the recipes - includes primary key
        tbl.increments();
        
        //name for recipes
        tbl
            .string('name', 128)
            .notNullable()

        //grabs id from dishes

        tbl
        .integer('dish_id')
        .unsigned()
        .references('id')
        .inTable('recipes') // grabs name from parent tbl so that would be cohorts
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

        tbl
        .timestamps(true, true)


    })

};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes')
  
};