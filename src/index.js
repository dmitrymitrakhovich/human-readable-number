const numbers = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
    100: "one hundred",
    200: "two hundred",
    300: "three hundred",
    400: "four hundred",
    500: "five hundred",
    600: "six hundred",
    700: "seven hundred",
    800: "eight hundred",
    900: "nine hundred",
};

module.exports = function toReadable(number) {
    let foo = {};
    for (let i = 0; i <= number; i++) {
        const splitedStr = `${i}`.split("");

        if (i < 20) {
            foo[i] = numbers[i];
        } else if (
            i === 20 ||
            i === 30 ||
            i === 40 ||
            i === 50 ||
            i === 60 ||
            i === 70 ||
            i === 80 ||
            i === 90 ||
            i === 100 ||
            i === 200 ||
            i === 300 ||
            i === 400 ||
            i === 500 ||
            i === 600 ||
            i === 700 ||
            i === 800 ||
            i === 900
        ) {
            foo[i] = numbers[i];
        } else if (i > 20 && i < 100) {
            const des = `${splitedStr[0]}0`;
            const ed = splitedStr[1];

            foo[i] = `${numbers[des]} ${numbers[ed]}`;
        } else if (
            (i > 100 && i < 120) ||
            (i > 200 && i < 220) ||
            (i > 300 && i < 320) ||
            (i > 400 && i < 420) ||
            (i > 500 && i < 520) ||
            (i > 600 && i < 620) ||
            (i > 700 && i < 720) ||
            (i > 800 && i < 820) ||
            (i > 900 && i < 920)
        ) {
            const hund = `${splitedStr[0]}00`;
            const des = `${splitedStr[1] + splitedStr[2]}`;
            const ed = `${splitedStr[2]}`;
            if (des === `0${splitedStr[2]}`) {
                foo[i] = `${numbers[hund]} ${numbers[ed]}`;
            } else {
                foo[i] = `${numbers[hund]} ${numbers[des]}`;
            }
        } else if (
            (i >= 120 && i < 200) ||
            (i >= 220 && i < 300) ||
            (i >= 320 && i < 400) ||
            (i >= 420 && i < 500) ||
            (i >= 520 && i < 600) ||
            (i >= 620 && i < 700) ||
            (i >= 720 && i < 800) ||
            (i >= 820 && i < 900) ||
            (i >= 920 && i < 1000)
        ) {
            const hund = `${splitedStr[0]}00`;
            const des = `${splitedStr[1]}0`;
            const ed = splitedStr[2];
            if (ed === "0") {
                foo[i] = `${numbers[hund]} ${numbers[des]}`;
            } else {
                foo[i] = `${numbers[hund]} ${numbers[des]} ${numbers[ed]}`;
            }
        }
    }
    return foo[number];
};
