//No se puede:
//Usar el método .forEach , .map , .reduce, filter


//1 ) Crea tu propia función forEach que funcione igual a Array.forEach. Algo asi:
function miForEach(array, callback){
	for (var i = 0; i < array.length; i++) {
		callback(array[i]);
	}
}

miForEach([1,2,3], showForEach);
function showForEach(item){
    console.log(item);
  }



//2 ) Crea tu propia función map que funcione igual a Array.map. Algo asi:
var newArray =[];
function miMap(array, callback){
    for (var i = 0; i < array.length; i++) {
		callback(array[i]);
	}
}

miMap([2,4,6,8,10],newMap);

function newMap(item){
  var div = (item)/2;
  newArray.push(div)
  console.log(newArray);
}

//3 ) Crea tu propia función filter que funcione igual a Array.filter. Algo asi:
var evenNumbers  = [];
function miFilter(array,filter){
    for(var i = 0; i<array.length; i++)
		callback(array[i]);
    }
myFilter([1,2,3,4,5,6,7,8,9,10],filter);

function filter(item){
        if((item)%2===0){
            evenNumbers.push(item);
            console.log(evenNumbers);
        }

      }



//4 ) Crea tu propia función reduce que funcione igual a Array.reduce. Algo asi:
var getSum = 0;
function miReduce(array, reduce){
    for(var i = 0; i<array.length; i++)
		callback(array[i]);
    }
myReduce([2,4,6,8,10],reduce);

function reduce(item){
        getSum += (item);
				console.log(getSum);
    }



 /*1 ) Crea tu propia función sort que funcione igual a Array.sort. Algo asi:
function miSort(arreglo, callback){
    }

mySort(['naranja','Naranja'],function(){});
var numbers = [4,5,3,6,9,7,8,1,2];
function sort(array){
  var leng = numbers.length;
lowest must be higher than the highest data point when you start
  var numberInit =numbers[0];
  var numberPos = 0;
  var newNumbers = [];
  for (var i = 0; i < leng; i++){
    for (var j = 1; j < leng; j++){
      var check = numbers[j];
      if (check > numberInit){
        numberInit = check;
        numberPos = j;
      }
      else {

      }
  }
    newNumbers.push(numberInit)
  }
  console.log(newNumbers);
}
*/
