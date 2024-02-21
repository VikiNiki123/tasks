/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    //No elements
    if (numbers.length === 0) {
        return [];
    } else if (numbers.length === 1) {
        //One element
        return [numbers[0], numbers[0]];
    } else {
        //Multiple Elements
        return numbers.slice(0, 1).concat(numbers.slice(-1));
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((number: number): number => number * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((num: string): number => parseInt(num) || 0);
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    return amounts.map((amount: string) => {
        //Remove "$" symbol
        const stringNumbers = amount.startsWith("$") ? amount.slice(1) : amount;

        //Convertion
        const number = parseInt(stringNumbers);

        //Return 0 if no good
        return isNaN(number) ? 0 : number;
    });
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    return messages
        .map((message: string) => {
            if (message.endsWith("!")) {
                //Exclaimation Mark
                return message.toUpperCase();
            } else if (message.endsWith("?")) {
                //Question Mark
                return "";
            } else {
                return message;
            }
        })
        .filter((message) => message !== "");
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    return words.filter((word: string): boolean => word.length < 4).length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }
    //Every method returns a single boolean value
    const validColors = ["red", "blue", "green"];
    return colors.every((color) => validColors.includes(color));
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }

    const sum = addends.reduce((acc, val) => acc + val, 0);
    const joinedString = addends.join("+");
    return sum.toString() + "=" + joinedString;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const negativeIndex = values.findIndex(
        (value: number): boolean => value < 0
    );

    if (negativeIndex === -1) {
        const sum = values.reduce(
            (total: number, value: number) => total + value,
            0
        );
        return [...values, sum];
    }

    const neededNums = values.slice(0, negativeIndex);
    const sum = neededNums.reduce(
        (total: number, value: number) => total + value,
        0
    );

    return [
        ...values.slice(0, negativeIndex + 1),
        sum,
        ...values.slice(negativeIndex + 1)
    ];
}
