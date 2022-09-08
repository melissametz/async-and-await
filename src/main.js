const { welcome, goodbye, tell } = require("../utils/fortune-teller");

async function getFortune(question) {
    try{
    const result = await tell(question);
      console.log(`Your question was: ${question}`);
      console.log(`Your fortune is: ${result}`);
    } catch (err){
      console.log(`There was an error: ${err}`)
    }
}

async function fullSession(question) {
  try{
    const welcomeMsg = await welcome();
      console.log(welcomeMsg);
    const fortune = await getFortune(question);
    const adios = await goodbye();
      console.log(adios);
    } catch (err) {
      console.log(`There was an error: ${err}`)
    }
}

module.exports = { getFortune, fullSession };
