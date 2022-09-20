var validMountainArray = function(arr) {
    let max = arr[0], i, maxIndex = 0, isIncreasing = true, isDecreasing = true;
    for (i = 0; i< arr.length;i++) {
        if (arr[i] > max) {
            max = arr[i];
            maxIndex = i;
        }
    }
    if (maxIndex === 0) {
        isIncreasing = false;
        return false;
    } else if (maxIndex === 1) {
        isIncreasing = true;      
    } else {
       for (i = 0 ;i < maxIndex; i++) {
            if (arr[i] >= arr[i + 1]) {
                isIncreasing = false;
                return false;
            }
        } 
    }
    if (maxIndex === arr.length - 1) {
        isDecreasing = false;
        return false;
    } else {
        for (i = maxIndex; i < arr.length; i++) {
            if (arr[i] <= arr[i + 1]) {
                isDecreasing = false;
                return false;
            }
        }

    }
    
    if (isIncreasing && isDecreasing) {
        return true;
    } else {
        return false;
    }
};
