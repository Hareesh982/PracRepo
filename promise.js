function Wakeup(){
    return new Promise((resolve,reject) =>{
        let wake = true
        if(wake){
            resolve("Woke up")
        }
        else{
            reject("still asleep")
        }
    })
}

function TakeBath(){
    return new Promise((resolve,reject) =>{
        let bath = true
        if(bath){
            resolve("Took Bath")
        }
        else{
            reject("Didnt bath")
        }
    })
}

function Breakfast(){
    return new Promise((resolve,reject) => {
        let food = true
        if(food){
            resolve("BreakFast")
        }
        else{
            reject("Not hungry")
        }
    })
}

function GoToWork(){
    return new Promise((resolve,reject) => {
        let work = false
        if(work){
            resolve("Went for work")
        }
        else{
            reject("Took a leave")
        }
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




