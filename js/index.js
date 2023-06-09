
let subOrder = [] ;


makeSub = () => {

    let subPrice = 0

    let subName = document.getElementById("subName").value;

    //Get Radio Options
    let selectedBread = document.getElementsByName("breadRadio");
    let breadValue;

    for(let i = 0; i < selectedBread.length; i++){
        if (selectedBread[i].checked){
            breadValue = selectedBread[i].value
            subPrice = subPrice + +selectedBread[i].dataset.cost
        }
    }

    

    let selectedToppings = document.getElementsByName("toppings")
    let toppingArray = [] ;
    
    for(let i = 0; i < selectedToppings.length; i++){

        if(selectedToppings[i].checked){
            toppingArray.push(selectedToppings[i].value) 
            subPrice = subPrice + +selectedToppings[i].dataset.cost
        }



    }

    let selectedSauce = document.getElementsByName("sauceRadio")
    let sauceValue;

    for(let i = 0; i < selectedSauce.length; i++){
        if (selectedSauce[i].checked){
            sauceValue = selectedSauce [i].value
            subPrice = subPrice + +selectedSauce[i].dataset.cost
        }

        
    }

    subOrder.push({
        subName: subName,
        subBread: breadValue,
        subToppings: toppingArray,
        subSauce: sauceValue,
        fullCost: subPrice

        
    })

    
    console.log(subOrder)

    document.getElementById("subForm").reset();


    
    



}

