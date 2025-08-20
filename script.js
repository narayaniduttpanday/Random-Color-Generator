alert("Welcome user , enjoy changing your colors");
const getColor = () => {
    //Hex Codes for colors
    const randomNumber = Math.floor(Math.random() * 1677215 ); //to generate a random number such that , it can be converted into a hexadecimal number
    const randomHexCode = "#" + randomNumber.toString(16);
    // console.log(randomNumber,randomHexCode);
    document.body.style.backgroundColor = randomHexCode;

    document.getElementById("colorcode").innerText = randomHexCode;
    navigator.clipboard.writeText(randomHexCode);
}


//eventCall
document.getElementById("btn").addEventListener("click",getColor)

//initial call
getColor();