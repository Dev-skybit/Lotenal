module.exports = (sequelize, DataTypes) => {

  const Ticket = sequelize.define("Ticket", {

    title: {
      type: DataTypes.STRING,
      allowNull: false
    },

    desc: {
      type: DataTypes.STRING,
      allowNull: false
    },

    price: {
      type: DataTypes.STRING,
      allowNull: false
    },

    noTicket: {
      type: DataTypes.STRING,
    },

    win: {
      type: DataTypes.BOOLEAN
    }
  })

  return Ticket
}