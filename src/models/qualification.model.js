const router = require("../routes")

const qualifications = (sequelize, type) => {
    return sequelize.define('qualifications', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: type.STRING,
        nameTeam1: type.STRING,
        nameTeam2: type.STRING,
        neighborhoodLeague: type.STRING,
        Date: type.STRING,
        Time: type.STRING,


        creatQualificationFourths: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateQualificationFourths: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}

module.exports = router;