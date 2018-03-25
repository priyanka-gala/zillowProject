
//Amoebas population growth seems to be following fibonacci series. To calcluate the number of amoebas for a given year
//we could use fibonacci series calculation method as shown below:
var populationGrowth = (function() {
    var growthMemo = {};

    function f(n) {
        var amoebas;

        // if found cached (i.e in growthMemo), return it from cache
        if (n in growthMemo) {
            amoebas = growthMemo[n];
        } else {
            //if not found in cache, calculate and store into the cache (i.e. in growthMemo)
            if ((n === 0) || (n === 1)) {
                return 1;
            }
            amoebas = f(n-1) + f(n-2);
            growthMemo[n] = amoebas;
        }

        return amoebas;
    }

    return f;
})();

console.log(populationGrowth(5));