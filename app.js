function countZeros(arr){
    let count = 0
    for(i=0; i<arr.length;i++){
        if(arr[i] === 0){
            count ++
        }
    }
    return count
}

function countZerosBetter(arr){
    let firstZero = arr.findIndex(num => num === 0);
    if (firstZero === -1) {
        return 0;
    } else {
        return arr.length - firstZero;
}
}
const arr = [1, 1, 1, 1, 0, 0];
console.log(countZeros(arr))
function sortFrequency(arr,num){
    count = 0
    for(i = 0; i < arr.length; i++){
        if(arr[i] === num){
            count ++
        }
    }
    return count
}

const arr = [1, 2, 2, 2, 3, 4, 4, 4, 5];
console.log(sortFrequency(arr, 2));


function sortFrequency(arr,num){
    function findStartIndex(arr, num) {
        let start = 0;
        let end = arr.length - 1;
        let startIndex = -1;
    
        while (start <= end) {
            let mid = Math.floor((start + end) / 2);
    
            if (arr[mid] === num) {
                startIndex = mid;
                end = mid - 1; 
            } else if (arr[mid] < num) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    
        return startIndex;
    }

    function findLastIndex(arr,num){
        let start = 0;
        let end = arr.length -1;
        let endIndex = -1
        while (start <= end) {
            let mid = Math.floor((start + end) / 2);
            if (arr[mid] === num) {
                endIndex = mid;
                start = mid + 1; 
            } else if (arr[mid] < num) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }

        return endIndex;
    }

    let startIndex = findStartIndex(arr, num);
    let endIndex = findLastIndex(arr, num)

    if (startIndex === -1 || endIndex === -1) {
        return -1;
    }

    return endIndex - startIndex + 1;
}

const arr = [1, 1, 2, 2, 2, 3, 4, 5, 5, 5, 5];
console.log(sortFrequency(arr,5))

function sortedFrequency(arr, num) {
    let firstIdx = findFirst(arr, num);
    if (firstIdx == -1) return firstIdx;
    let lastIdx = findLast(arr, num);
    return lastIdx - firstIdx + 1;
  }
  
  function findFirst(arr, num, low = 0, high = arr.length - 1) {
    if (high >= low) {
      let mid = Math.floor((low + high) / 2)
      if ((mid === 0 || num > arr[mid - 1]) && arr[mid] === num) {
        return mid;
      } else if (num > arr[mid]) {
        return findFirst(arr, num, mid + 1, high)
      } else {
        return findFirst(arr, num, low, mid - 1)
      }
    }
    return -1
  }
  
  function findLast(arr, num, low = 0, high = arr.length - 1) {
    if (high >= low) {
      let mid = Math.floor((low + high) / 2)
      if ((mid === arr.length - 1 || num < arr[mid + 1]) && arr[mid] === num) {
        return mid;
      } else if (num < arr[mid]) {
        return findLast(arr, num, low, mid - 1)
      } else {
        return findLast(arr, num, mid + 1, high)
      }
    }
    return -1
  }