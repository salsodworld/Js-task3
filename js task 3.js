
function checkDivisibility(num) {
    var results = [];
    for (var i = 1; i <= num; i++) {
        if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
            var threeOdds = "yu-gi-oh";
            results.push(threeOdds);
        }else if (i % 2 === 0 && i % 3 === 0) {
            var twoOdds = "yu-gi";
            results.push(twoOdds);
        }else if( i % 2 === 0) {
            var even = "yu";
            results.push(even);
        }else if(i % 3 === 0) {
            var odd3 = "gi";
            results.push(odd3);
        }else if ( i % 5 === 0) {
            var odd5 = "oh";
            results.push(odd5);
        } else {
            results.push(i);
        }
    }
    return results;
}

checkDivisibility(20);

