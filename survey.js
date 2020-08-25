const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :) ', (name) => {

  rl.question('What\'s an activity you like doing? ', (activity) => {
  
    rl.question('What do you listen to while doing that? ', (music) => {
    
      rl.question('Which meal is your favourite? (eg: dinner, brunch, etc.) ', (meal) => {
      
        rl.question('What\'s your favourite thing to eat for that meal? ', (food) => {
        
          rl.question('Which sport is your absolute favourite? ', (sport) => {
          
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (power) => {
              
              console.log(`Hi! I am ${name}, I do a lot of ${activity} while listening to ${music}.` +
            ` My favorite meal of the day is${meal}, love the ${food}. I like ${sport}, and my superpower is ${power}`);
              
              rl.close();
            });
            
          });
          
        });
        
      });
      
    });
    
  });
  
});










