// ARRAY 1
const texasss = [
  {
    name: 'Mike',
    age: 23,
    gender: 'm',
    us: false,
  },
  {
    name: 'Liz',
    age: 20,
    gender: 'f',
    us: true,
  },
  {
    name: 'Chris',
    age: 102,
    gender: 'm',
    us: true,
  },
  {
    name: 'Chuloo',
    age: 27,
    gender: 'm',
    us: false,
  },
  {
    name: 'Annie',
    age: 30,
    gender: 'f',
    us: true,
  },
]

// Part 1 - Find all users older than 24
function usersFilter() {
  console.log('------all users older than 24------');
  texasss.forEach(el => {
    el.age > 24 ? console.log(el.name) : "";
  })
}
usersFilter()
// Part 2 - Find the total age of all users
function totalAge(arr) {
  let total = [];
  for (const el of arr) {
    total.push(el.age);
  }
  // return total.reduce((prev, cur) => prev + cur);
  console.log(`total age of all users : ${total.reduce((prev, cur) => prev + cur)}`);
  return total.reduce((prev, cur) => prev + cur);
}
totalAge(texasss);



// Part 3 - List all female coders
function femaleCoders(arr) {
  console.log('------List all female coders------');
  arr.forEach(el => {
    if (el.gender === 'f') {
      console.log(el.name);
    }
  })
  //  return arr.map(el => {if(el.gender === 'f'){return el}})
}
femaleCoders(texasss);






// ARRAY 2
const newieyork = [
  {
    name: 'Michelle',
    age: 19,
    coder: true,
    gender: 'f',
    us: true,
  },
  {
    name: 'Sam',
    age: 25,
    coder: false,
    gender: 'm',
    us: false,
  },
  {
    name: 'Nick',
    age: 32,
    coder: true,
    gender: 'm',
    us: true,
  },
  {
    name: 'Ivy',
    age: 26,
    coder: true,
    gender: 'f',
    us: false,
  },

  {
    name: 'Jim Beglin',
    age: 65,
    coder: false,
    gender: 'm',
    us: true,
  },
]

// Part 1 - List all users in US in ascending order
function usersUS() {
  console.log('-----List all users in US in ascending order-----');
  
  let USuser = [];
  newieyork.forEach(el => {
    el.us ? USuser.push(el.name) : "";
  });
  USuser.sort();
  for(const el of USuser){
    console.log(el);
  }
}
usersUS()

// Part 2 - Sort all users by age
function sortbyAge() {
  return newieyork.sort((a, b) => a.age > b.age ? 1 : -1);
}



// Part 3 -  List all female coders
femaleCoders(newieyork);


// ARRAY 3
const vegzas = [
  {
    name: 'Charly',
    age: 32,
    coder: true,
    gender: 'm',
  },
  {
    name: 'Law',
    age: 21,
    coder: true,
    gender: 'm',
  },
  {
    name: 'Rosey',
    age: 42,
    coder: false,
    gender: 'f',
  },
  {
    name: 'Steph',
    age: 18,
    coder: true,
    gender: 'f'
  },
  {
    name: 'Jon',
    age: 47,
    coder: false,
    gender: 'm',
  },
]

// Part 1 - Find the total age of male coders under 25
function filterAge(arr) {
  const result = arr.filter(el => el.age < 25 && el.gender === 'm');
  console.log(`the total age of male coders under 25 is: ${result.length}`);
}
filterAge(vegzas);

  // Part 2 - List all male coders over 30
function maleOverthirty(arr) {
  console.log("-----List all male coders over 30-----");
  
  const result = arr.filter(el => el.age > 30 && el.gender === 'm' );
  for(const el of result){
    console.log(el.name);
    
  }

}
maleOverthirty(vegzas);
  // Part 3 - Find the total age of everyone in texasss, newieyork and vegzas combined.
  function totalAges() {

    console.log(`total age of everyone in texasss, newieyork and vegzas combined is: ${totalAge(texasss) + totalAge(newieyork) + totalAge(vegzas)}`);
    
  }
  totalAges();