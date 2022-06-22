const { rsort } = require("semver");

module.exports = function toReadable(number) {
    const num = parseInt(number);
    const str = String(number).split('');
    const len = str.length;

    if (parseInt(number) === 0) {
        return 'zero';
    }

    if (num >= 1 && num <= 9) {
        return numOneToNine(num);
    }

    if (num >= 10 && num <= 19) {
        return numTenToNineteen(num)
    }

    if (num >= 20 && num <= 100) {
        if (str[1] === '0') {
            return numTwentyToNinetyNine(num);
        } else {
            let result = ''.concat(numTwentyToNinetyNine(str[0] + 0), ' ', numOneToNine(str[1]));
            return result.trimEnd();
        }
    }

    if (num >= 101 && num < 1000) {
        if ((str[2] >= 0 && str[2] <= 9) && (str[1] == 1)) {
            return ''.concat(numOneToNine(str[0]), ' hundred ', numTenToNineteen(1 + str[2]));
        }
        let result = ''.concat(numOneToNine(str[0]), ' hundred ', numTwentyToNinetyNine(str[1] + 0), ' ', numOneToNine(str[2]));
        return result.trimEnd().replace('  ', ' ');
    }
}

function numOneToNine(number) {
    if (parseInt(number) === 1) {
        return 'one';
    }

    if (parseInt(number) === 2) {
        return 'two';
    }

    if (parseInt(number) === 3) {
        return 'three';
    }

    if (parseInt(number) === 4) {
        return 'four';
    }

    if (parseInt(number) === 5) {
        return 'five';
    }

    if (parseInt(number) === 6) {
        return 'six';
    }

    if (parseInt(number) === 7) {
        return 'seven';
    }

    if (parseInt(number) === 8) {
        return 'eight';
    }

    if (parseInt(number) === 9) {
        return 'nine';
    }

    return '';
}

function numTenToNineteen(number) {
    if (parseInt(number) === 10) {
        return 'ten';
    }

    if (parseInt(number) === 11) {
        return 'eleven';
    }

    if (parseInt(number) === 12) {
        return 'twelve';
    }

    if (parseInt(number) === 13) {
        return 'thirteen';
    }

    if (parseInt(number) === 14) {
        return 'fourteen';
    }

    if (parseInt(number) === 15) {
        return 'fifteen';
    }

    if (parseInt(number) === 16) {
        return 'sixteen';
    }

    if (parseInt(number) === 17) {
        return 'seventeen';
    }

    if (parseInt(number) === 18) {
        return 'eighteen';
    }

    if (parseInt(number) === 19) {
        return 'nineteen';
    }
    return '';
}

function numTwentyToNinetyNine(number) {
    if (parseInt(number) === 20) {
        return 'twenty';
    }

    if (parseInt(number) === 30) {
        return 'thirty';
    }

    if (parseInt(number) === 40) {
        return 'forty';
    }

    if (parseInt(number) === 50) {
        return 'fifty';
    }

    if (parseInt(number) === 60) {
        return 'sixty';
    }

    if (parseInt(number) === 70) {
        return 'seventy';
    }

    if (parseInt(number) === 80) {
        return 'eighty';
    }

    if (parseInt(number) === 90) {
        return 'ninety';
    }

    if (parseInt(number) === 100) {
        return 'one hundred';
    }

    return '';
}
