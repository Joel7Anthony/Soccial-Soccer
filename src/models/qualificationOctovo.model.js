const qualificationOctavos = (sequelize, type) => {
    return sequelize.define('qualificationOctavos', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        status: type.STRING,

        createQualificationOctavos: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateQualificationOctavos: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}

module.exports = qualificationOctavos