const teams = (sequelize, type) => {
    return sequelize.define('teams', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: type.STRING,
        photo: type.STRING,
        category: type.STRING,
        series: type.STRING,
        initials: type.STRING,
        description: type.STRING,
        mail: type.STRING,
        creation_date: type.INTEGER,
        main_color: type.STRING,
        secondary_color: type.STRING,
        phone: type.INTEGER,


        createTemas: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateTemas: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}

module.exports = teams