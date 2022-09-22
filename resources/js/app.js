window.onload = function()
{
    let fahDeg = document.getElementById("fahrenheit");
    let celDeg = document.getElementById("celsius");
    celDeg.oninput = function()
    {
        fahDeg.value = (celDeg.value * 9/5) + 32;
    };
    fahDeg.oninput = function()
    {
        celDeg.value = ((fahDeg.value - 32) * 5)/9;
    };


};