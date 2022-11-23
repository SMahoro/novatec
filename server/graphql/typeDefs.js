const { gql } = require('apollo-server');

// everything in between `` is graphQL code, module.export is the return of the file
module.exports=gql` 
    #Schemata für die Digimons -> name, img & level kommen aus der DigimonAPI, cards aus der CardsAPI
    type Digimon {
        name: String!
        img: String!
        level: String
        cards: [Cards]
    },

    #Schemata für die Cards der spezifischen Digimon -> alles aus der CardsAPI
    type Cards {
        cardnumber: ID!
        name: String!
        color: String #enum possible too
        level: Int
        digi_type: String
        attribute: String
        image_url: String
        play_cost: Int
        evolution_cost: Int
    }

    type Query {
        digimons: [Digimon!] 
        #returns name, img & level aller Digimon der Serie -> Datenabfrage der DigimonAPI

        cards: [Cards!] 
        #returns cardnumber & name aller Cards -> Datenabfrage der CardsAPI (in der ./REST/Cards.js sowie Digimon.js definiert)

        cardsByDigimonName(name: String): [Cards!] 
        #returns alle type Cards Attribute eines spezifischen Digimons (Abfrage mit name)

        allCards: [Cards!] 
        #returns cardnumber & name aller Cards -> Datenabfrage der CardsAPI (gleiche wie oben, jedoch bloß in ./REST/Cards definiert)
    }
`

/*
query (img){
    name {
        cards
    }
} ALTER KOMMENTAR / BRAINSTORMING
*/