let arr = [1,2,3,[4,5]]

let new_arr = [...arr]

new_arr[3][0] = "hello"

console.log(arr);
console.log(new_arr);




// function DeepClone(obj){
//     if(obj == null || typeof obj !== "object"){
//         return obj
//     }
//     if(Array.isArray(obj)){
//         let clone_arr = []
//         for(let i=0;i<obj.length;i++){
//             clone_arr[i] = DeepClone(obj[i])
//         }
//         return clone_arr
//     }
//     let clone_obj = {}
//     for(let key in obj){
//         if(obj.hasOwnProperty(key)){
//             clone_obj[key] = DeepClone(obj[key])
//         }
//     }
//     return clone_obj
// }

// obj = {
//     "name" : "hareesh",
//     "age" : 24,
//     "details" : {
//         "address":"sindhanur",
//         "post" : "budiwal"
//     }
// }
// console.log(DeepClone(obj))



