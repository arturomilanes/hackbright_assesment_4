module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["You love chinese food.", "You can see a lot just by looking.", "You can keep a secret.","You are almost there.","A fresh start will put you on your way.","A faithful friend is a strong defense."];

        let randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];

        res.status(200).send(randomFortune);
    
    },

    getCountry: (req, res) => {
        const {countryList} = require('../countries');
        let randomCountry = countryList[Math.floor(Math.random() * countryList.length)];
        res.status(200).send(randomCountry);
    },

    getColor:(req, res) => {
        const colors = ["red", "blue", "yellow", "purple","orange","green"];

        let randomColor = colors[Math.floor(Math.random() * colors.length)];

        res.status(200).send(randomColor);
    }

}