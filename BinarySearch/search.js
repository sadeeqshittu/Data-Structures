
//specification for bineary search algorithm.
function search(target, arr){
	// ensures that that the given is sorted so that bineary search is efficient worst case that this is O(nlogn)
	 arr = arr.sort((a,b)=> a-b)
	let start  = 0;
	let end = arr.length - 1;
	while(start <= end){
		let mid = Math.floor((start + end)/2);
		if (arr[mid] == target) {
			return arr[mid];
		}if(arr[mid] < target){
			start = mid + 1
		} else{
			end = mid - 1;
		}
	}
	return -1;
}

module.exports = search;