function Wakeup(){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            let wake = true
            if(wake){
                resolve("Woke up")
            }
            else{
                reject("still asleep")
            }
        },2000)
        
    })
}

function TakeBath(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            let bath = true
            if(bath){
                resolve("Took Bath")
            }
            else{
                reject("Didnt bath")
            }
        }, 2000);
        
    })
}

function Breakfast(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let food = false
            if(food){
                resolve("BreakFast")
            }
            else{
                reject("Not hungry")
            }
        }, 2000);
        
    })
}

function GoToWork(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let work = true
            if(work){
                resolve("Went for work")
            }
            else{
                reject("Took a leave")
            }
        }, 2000);
        
    })
}

async function MorningRoutine() {
    try{
        let wake =await Wakeup()
        console.log(wake);
        
        let bath =await TakeBath()
        console.log(bath);

        try{
            let food =await Breakfast()
            console.log(food);
        }
        catch (error){
            console.log(error);   
        }
        
        let work =await GoToWork()
        console.log(work);
    }
    catch(error){
        console.log(error);
    }
    
}

MorningRoutine().finally(()=>console.log("routine completed"))






