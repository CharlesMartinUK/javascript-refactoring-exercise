//var txr = []; got rid on unnecessary global

function processTransactions(transActions) {

    

    if(!validateTransactions(transActions)) {
        throw new Error("Undefined collection of transactions")
    }

    //let txCount = {}
	
	/*
    const numberOfTransactions = transActions.length;

    for(var i = 0; i < numberOfTransactions; i++) {
        const transaction = transActions[i];
        txCount[transaction] ? txCount[transaction] += 1 : txCount[transaction] = 1;
    }*/
	/*
	transActions.forEach( (item,index) => {
		txCount[item] ? txCount[item] += 1 : txCount[item] = 1;
	})
	*/
	let txCount = transActions.reduce( (item, cv) => {
		return (item[cv] ? ++item[cv]  : (item[cv] = 1), item)
	},{})
	

    txCount = sortByAmountThenName(txCount);
    
	/*
	var txr = []; // move global variable here
    // Place them back in array for returning
    Object.keys(txCount).forEach( (key, index) => {
        txr[index] = `${key} ${txCount[key]}`;
    });
	*/
	
    return Object.keys(txCount).map( (key) => `${key} ${txCount[key]}` );
}

function sortByAmountThenName(txCount) {
	
    let sortedKeys = Object.keys(txCount).sort( (itemOne, itemTwo) => {
        return  txCount[itemTwo] - txCount[itemOne] || itemOne > itemTwo || -(itemOne < itemTwo)}
    );
	
	
    let sortedResults = {};
    for(let objectKey of sortedKeys) {
        sortedResults[objectKey] = txCount[objectKey];
    }
	

    return sortedResults;
	
	//return Object.keys(sortedKeys).map( (key) => txCount[key] )
}


function validateTransactions(transactions) {
	/*
    if(transactions === undefined) {
        return false;
    } 

    return true;*/
	return transactions === undefined ? false : true;
}

module.exports = processTransactions;