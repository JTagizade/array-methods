const athletes = [  {
    name: "Usain Bolt",
    sport: "Track and Field",
    hasWorldRecord: true,
    gender: "Male",
    age: 35,
    totalMedals: 8,
    country: "Jamaica",
  },
  {
    name: "Simone Biles",
    sport: "Gymnastics",
    hasWorldRecord: false,
    gender: "Female",
    age: 25,
    totalMedals: 12,
    country: "United States",
  },
  {
    name: "Michael Phelps",
    sport: "Swimming",
    hasWorldRecord: true,
    gender: "Male",
    age: 37,
    totalMedals: 28,
    country: "United States",
  },
  {
    name: "Katie Ledecky",
    sport: "Swimming",
    hasWorldRecord: true,
    gender: "Female",
    age: 25,
    totalMedals: 10,
    country: "United States",
  },
  {
    name: "Allyson Felix",
    sport: "Track and Field",
    hasWorldRecord: false,
    gender: "Female",
    age: 36,
    totalMedals: 9,
    country: "United States",
  },
  {
    name: "Nadia Comăneci",
    sport: "Gymnastics",
    hasWorldRecord: true,
    gender: "Female",
    age: 60,
    totalMedals: 9,
    country: "Romania",
  },
  {
    name: "Birgit Fischer",
    sport: "Canoeing",
    hasWorldRecord: true,
    gender: "Female",
    age: 60,
    totalMedals: 12,
    country: "Germany",
  },
  {
    name: "Mariana Pajón",
    sport: "Cycling",
    hasWorldRecord: false,
    gender: "Female",
    age: 30,
    totalMedals: 4,
    country: "Colombia",
  },
  {
    name: "Wayne Gretzky",
    sport: "Ice Hockey",
    hasWorldRecord: false,
    gender: "Male",
    age: 61,
    totalMedals: 4,
    country: "Canada",
  },
  {
    name: "Yuna Kim",
    sport: "Figure Skating",
    hasWorldRecord: false,
    gender: "Female",
    age: 31,
    totalMedals: 6,
    country: "South Korea",
  },
];

// hometask1

// const hasWorldRecords = [];

// for (let i=0; i < athletes.length; i++) {
//     if (athletes[i].hasWorldRecord) {
//         hasWorldRecords.push(athletes[i]);
//     }
// }

 
// console.log(hasWorldRecords);


// hometask2


// const medals10 = [];

// for (let i=0; i < athletes.length; i++) {
//     if (athletes[i].gender === "Female" && athletes[i].totalMedals >= 10) {
//         medals10.push(athletes[i]);
//     }
// }

 
// console.log(medals10);


// hometask8

// const americansWorldRecords = [];

// for (let i=0; i < athletes.length; i++) {
//     if (athletes[i].hasWorldRecord && athletes[i].country === "United States") {
//         americansWorldRecords.push(athletes[i]);
//     }
// }

 
// console.log(americansWorldRecords);



// hometask5


const medals = [];
let medalAmount = 0;


for (let i=0; i < athletes.length; i++) {
    
    medals.push(athletes[i].totalMedals);
    
}

for ( let x = 0; x < medals.length; x++){

    medalAmount += medals[x];
}

console.log(medalAmount);


