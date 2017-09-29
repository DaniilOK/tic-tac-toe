class TicTacToe {
    constructor() {
    	this.table = [];
    	for (let i = 0; i < 9; i++)
    		this.table[i] = null;
    	this.moveX = true;
    }

    getCurrentPlayerSymbol() {
    	if (this.moveX)
    		return 'x';
    	else
    		return 'o';
    }

    tableIndex(rowIndex, columnIndex){
    	return rowIndex * 3 + columnIndex;
    }

    checkWinner(symbol){
    	let winnerRow = symbol + symbol + symbol;

    	//Столбцы
    	for (let i = 0; i < 9; i += 3){
    		if (this.table.slice(i, i + 3).join('') == winnerRow)
    			return true;
    	}

    	//Строки
    	for (let i = 0; i < 3; i++)
    		if (this.table[i] + "" + this.table[i + 3] + this.table[i + 6] == winnerRow)
    			return true;

    	//Диагонали
    	let str1 = "";
    	let str2 = "";
    	for (let i = 0, j = 0, k = 2; i < 3; i++,j++, k--){
    		str1 += this.table[this.tableIndex(i,j)];
    		str2 += this.table[this.tableIndex(i,k)];
    	}
    	if (str1 == winnerRow || str2 == winnerRow)
    		return true;

    	return false;
    }

    nextTurn(rowIndex, columnIndex) {
    	if (this.table[this.tableIndex(rowIndex, columnIndex)])
    		return;

    	let symbol;
    	if (this.moveX)
    		symbol = 'x';
    	else
    		symbol = 'o';

    	this.table[this.tableIndex(rowIndex, columnIndex)] = symbol;
    	this.moveX = !this.moveX;
    }

    isFinished() {
    	if (this.getWinner() || this.isDraw())
    		return true;
    	return false;
    }

    getWinner() {
    	if (this.checkWinner('x'))
    		return 'x';
    	if (this.checkWinner('o'))
    		return 'o';
    	return null;
    }

    noMoreTurns() {
    	for (let i = 0; i < 9; i++)
    		if (!this.table[i])
    			return false;
    	return true;
    }

    isDraw() {
    	if (this.noMoreTurns() && !this.getWinner())
    		return true;
    	return false;
    }

    getFieldValue(rowIndex, colIndex) {
    	return this.table[this.tableIndex(rowIndex, colIndex)];
    }
}

module.exports = TicTacToe;
