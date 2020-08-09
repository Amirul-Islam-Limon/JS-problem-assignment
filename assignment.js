// first problem assignment

function feetToMile(foot){
    let result = foot * 0.000189394;
    if(result < 1){
        let mile = result.toFixed(4)
        return mile;
    }
    else{
        let mile = result.toFixed(2);
        return mile;
    }
}

let mile = feetToMile(52)
console.log(mile);



// second problem assingment 

function woodCalculator(chair, table, bed){
    let totalChairWood = chair * 1;
    let totalTableWood = table * 3;
    let totalBedWood = bed * 5;
    let totalWood = totalChairWood + totalTableWood + totalBedWood;
    return totalWood;
}

let totalWood = woodCalculator(12, 4, 4);
console.log(totalWood);




// third problem assignment 

function brickCalculator(totalBuilding){
    if(totalBuilding > 0 && totalBuilding <= 10){
        let totalBrick = totalBuilding * 15 * 1000;
        return totalBrick;
    }
    else if(totalBuilding > 10 && totalBuilding <= 20){
        let secondTenBuilding = totalBuilding - 10;
        let secondTenBuildingBrick = secondTenBuilding * 12 * 1000;

        let firstTenBuildingBrick = 10 * 15 * 1000;
        let totalBrick = firstTenBuildingBrick + secondTenBuildingBrick;
        return totalBrick;
    }
    else if(totalBuilding > 0){
      
        let firstTenBuildingBrick = 10 * 15 * 1000;
        let secondTenBuildingBrick = 10 * 12 * 1000;

        let thirdPartOfBuilding = totalBuilding - 20;
        let thirdPartOfBuildingBrick = thirdPartOfBuilding * 10 * 1000;
        
        let totalBrick = firstTenBuildingBrick + secondTenBuildingBrick + thirdPartOfBuildingBrick;
        return totalBrick;
    }
    else{
        return "Your are doing a mistake. Please checkout!"
    }
}

let calculatBrick = brickCalculator(21);
console.log(calculatBrick);




// fout assignment

function tinyFriend(friendsList){
    let tinyFriend =friendsList[0]
    for(let i = 0; i < friendsList.length; i++){
        let element = friendsList[i];
        if(element.length < tinyFriend.length){
            tinyFriend = element
        }
    }
    return tinyFriend;
}

let mybudy =["amirul Islam", "Limon", "Limon Ahmed", "soya", "sopna", "shiti"]
let tinybudy = tinyFriend(mybudy);
console.log(tinybudy);

