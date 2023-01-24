var TennisGame1 = function(player1Name, player2Name) {
    this.m_score1 = 0;
    this.m_score2 = 0;
    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

TennisGame1.prototype.wonPoint = function(playerName) {
    if (playerName === "player1")
        this.m_score1 += 1;
    else
        this.m_score2 += 1;
};

const scoreName = {
    0: "Love",
    1: "Fifteen",
    2: "Thirty",
    3: "Forty"
}

let compareScore = (score, m_score1) => {
    if (m_score1 <= 2) {
        return score += scoreName[m_score1]+"-All"
    }
    else {
        return score = "Deuce"
    }
}

let advantageOnWinPlayer = (score, m_score1, m_score2) => {
    let minusResult = Math.abs(m_score1 - m_score2);
        if (minusResult === 1) {
            score = "Advantage player1"
        }
        else if (minusResult === -1) {
            score = "Advantage player2"
        }
        else if (minusResult >= 2) {
            score = "Win for player1"
        }
        else score = "Win for player2";
    return score
}

let showScore = (score, m_score1, m_score2) => {
    return score = scoreName[m_score1]+"-"+scoreName[m_score2]
}

TennisGame1.prototype.getScore = function() {
    let score = "";
        if (this.m_score1 === this.m_score2) {
            score = compareScore(score, this.m_score1);
        }
        else if (this.m_score1 >= 4 || this.m_score2 >= 4) {
            score = advantageOnWinPlayer(score, this.m_score1, this.m_score2);
        } else {
        score = showScore(score, this.m_score1, this.m_score2)
    }
    return score;
};

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}