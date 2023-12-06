
//Todo 01: inserting

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

arr[3] = 15
arr.push(16)
arr.unshift(17)

arr.push([101, 102])
arr.push(...[101, 102])


//Todo 02: removing

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

arr[3] = undefined;
delete arr[5]
arr.pop();
arr.shift();


//Todo: splice (position, deletecount, insert) with curd

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

arr.splice(0, 0, 'first')
arr.splice(arr.length, 0, 'last')
arr.splice(5, 0, 'specific')

var deleteElement = arr.splice(3, 1, 0)
    deleteElement = arr.splice(0, 4)
    deleteElement = arr.splice(5, 2)

console.log("deleted : ", deleteElement)




