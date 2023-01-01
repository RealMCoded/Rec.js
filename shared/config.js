/*
* TODO: Finish this.
* TODO: Replace the static version used in APIServer.js with a call to this one.
*/

function config(){
    return JSON.stringify({
        MessageOfTheDay: "holy fuck this works wow",
        CdnBaseUri: "http://localhost:20182/",
        LevelProgressionMaps:[{"Level":0,"RequiredXp":1},{"Level":1,"RequiredXp":2},{"Level":2,"RequiredXp":3},{"Level":3,"RequiredXp":4},{"Level":4,"RequiredXp":5},{"Level":5,"RequiredXp":6},{"Level":6,"RequiredXp":7},{"Level":7,"RequiredXp":8},{"Level":8,"RequiredXp":9},{"Level":9,"RequiredXp":10},{"Level":10,"RequiredXp":11},{"Level":11,"RequiredXp":12},{"Level":12,"RequiredXp":13},{"Level":13,"RequiredXp":14},{"Level":14,"RequiredXp":15},{"Level":15,"RequiredXp":16},{"Level":16,"RequiredXp":17},{"Level":17,"RequiredXp":18},{"Level":18,"RequiredXp":19},{"Level":19,"RequiredXp":20},{"Level":20,"RequiredXp":21}],
        MatchmakingParams:{
            PreferFullRoomsFrequency: 1,
            PreferEmptyRoomsFrequency: 0
        },

    })
}