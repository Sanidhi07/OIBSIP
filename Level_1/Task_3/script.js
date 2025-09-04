document.getElementById("convertBtn").addEventListener("click",convertTemp);
function convertTemp()
{
    const tempIn=document.getElementById("temp").value;
    const unit=document.getElementById("unit").value;
    const result=document.getElementById("result");

    if(tempIn === "" || isNaN(tempIn))
    {
        result.innerHTML="⚠️ Please enter a valid number!";
        return;
    }

    let temp=parseFloat(tempIn);
    let converted= "";
    if(unit === "celsius")
    {
        converted = `${(temp * 9/5 + 32).toFixed(2)} &deg;F | ${(temp + 273.15).toFixed(2)} K`;

    }else if(unit === "fahrenheit")
    {
            converted = `${((temp - 32) * 5/9).toFixed(2)} &deg;C | ${(((temp - 32) * 5/9) + 273.15).toFixed(2)} K`;

    }else if(unit === "kelvin")
    {
            converted = `${(temp - 273.15).toFixed(2)} &deg;C | ${((temp - 273.15) * 9/5 + 32).toFixed(2)} &deg;F`;

    }
    result.innerHTML= `Converted: ${converted}`;
}