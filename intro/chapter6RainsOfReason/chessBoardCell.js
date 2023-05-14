function solution(cell1, cell2) {
    // checking constraints
    if (
        cell1.length === 2 &&
        cell2.length === 2 && // checking cells length = 2
        1 <= cell1[1] &&
        cell1[1] <= 8 && // checking alphabets from A to H
        1 <= cell2[1] &&
        cell2[1] <= 8
    ) {
        // checking alphabets from A to H

        // initialize variable to subtract from chess column element
        const letterA = "A";
        const letterCodeA = letterA.charCodeAt(0);

        // getting chess alphabet element
        const cellColumn1 = cell1.charAt(0);
        const cellColumnCode1 = cellColumn1.charCodeAt(0);
        const column1 = cellColumnCode1 - letterCodeA + 1; // for letter A = 1
        const row1 = parseInt(cell1.charAt(1));

        // getting chess alphabet element
        const cellColumn2 = cell2.charAt(0);
        const cellColumnCode2 = cellColumn2.charCodeAt(0);
        const column2 = cellColumnCode2 - letterCodeA + 1;

        const row2 = parseInt(cell2.charAt(1));

        // when two same numbers add, there result is always even
        return (column1 + row1) % 2 === (column2 + row2) % 2;
    }
}
