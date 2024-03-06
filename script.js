function fibonacci(num) {
if(num==1){
	return 0;
}
	if(num==2){
	return 1;
}
	 if (memo[num]) {
        return memo[num];
    }
	let memo[num] = fibonacci(num-1) + fibonacci(num-2);
	return memo[num];
}

module.exports = fibonacci;
