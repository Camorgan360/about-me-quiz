function scoreAnswers(Q1, Q2, Q3, Q4, Q5) {
    Q1 = Q1.toLowerCase();
    Q2 = Q2.toLowerCase();
    Q3 = Q3.toLowerCase();
    Q4 = Q4.toLowerCase();
    Q5 = Q5.toLowerCase();

    let score = 0;

    if(Q1 === 'skiing') {
        score += 1;
    }
    if(Q2 === 'writing') {
        score += 1;
    }
    if(Q3 === 'music') {
        score += 1;
    }
    if(Q4 === 'basketball') {
        score += 1;
    }
    if(Q5 === 'soccer') {
        score += 1;
    }
    return score;
}

export default scoreAnswers; 