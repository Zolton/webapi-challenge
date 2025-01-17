const array = [
  {
    id: 1,
    name: "Frodo Baggins",
    chores: [
      {
        id: 1,
        description: "take the ring to Mordor",
        notes: "make your way to Mount Doom",
        assignedTo: 1, // the id of Frodo,
        completed: true
      },
      {
        id: 2,
        description: "destroy the ring",
        notes: "cast the ring into the fire inside Mount Doom",
        assignedTo: 1,
        completed: false
      }
    ]
  },

  {
    id: 2,
    name: "Bilbo Baggins",
    chores: [
      {
        id: 1,
        description: "take out the garbage",
        notes: "Don't let it drip on the carpet",
        assignedTo: 2,
        completed: true
      },
      {
        id: 2,
        description: "Clean the shower",
        notes: "No more water stains",
        assignedTo: 2,
        completed: false
      }
    ]
  }
];

module.exports = array;
