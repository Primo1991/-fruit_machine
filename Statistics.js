class Statistics {
    constructor() {
        this.gameResult = [{win: false, bid: 2},{win: true, bid: 2},{win: true, bid: 2}];

    }
    addGameToStatistics(win,bid) {
        let gameResult = {
            win: win,
            bid: bid
        }
        console.log(gameResult);
        this.gameResult.push(gameResult)
    }
        showGamestatistics() {
            let games = this.gameResult.length;
            let wins = this.gameResult.filter(result => result.win).length;
            let losses = this.gameResult.filter(result => !result.win).length
            console.log(games,wins,losses)
            return [games, wins, losses]
        }
}

const stats = new Statistics()