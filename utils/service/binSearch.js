
let arr = ["Fred", "Alex", "Diana", "Byron" , "Carol"];

function binarySearch(arr,key){

    // 二分法必须要求数组是有顺序的，因此需要先排序
    var arr = arr.sort();
    console.log('排序后的字符串：', arr);

	var low=0; //数组最小索引值
    var high=arr.length-1; //数组最大索引值
    
	while(low<=high){
        var mid=Math.floor((low+high)/2); // 求中间值，floor是向下取整；(最小+最大)/2是求平均数，本实例总共5个数据，平均数为2.5，中间数为2，从2开始查找
        
        // 如果目标字符串正好在中间位置2，第一步就找到了
		if(key==arr[mid]){
			return mid;
        }
        
        // 字符串可以直接比较：javascript字符串在进行大于(小于)比较时，会根据第一个不同的字符的ascii值码进行比较
        else if(key>arr[mid]){

            console.log('大于',key, arr[mid], mid, "Byron" > "Alex");

			low=mid+1;
		}else{
            console.log('小于', key, arr[mid], mid, "Byron" < "Carol");
			high=mid-1;
        }
        
	}
	return -1;
}

let result = binarySearch(arr, "Byron");

console.log('目标字符串在查找字符串的位置：', result);