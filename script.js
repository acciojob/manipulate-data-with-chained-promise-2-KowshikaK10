function getElement(){
	return new Promise(resolve=>{
		let arr=[1,2,3,4]
		resolve(arr);
	})
}
function evenNum(arr){
	return new Promise(resolve=>{
		setTimeout(()=>{
			let filteredArr=arr.filter(num=>num%2==0);
			document.getElementById('output').textContent=`Even Numbers are= ${filteredArr}`
			resolve(filteredArr);
		},1000);		
	})
}
function multiplyEven(numbers){
	return new Promise(resolve=>{
		setTimeout(()=>{
			let mulArr=numbers.map(num=>num*2);
			document.getElementById('output').textContent=`Multiply Numbers are = ${mulArr}`
			resolve(mulArr);
		},2000);		
	})
}
getElement()
.then(evenNum)
.then(multiplyEven)
