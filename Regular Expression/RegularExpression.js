function getdata()
{
    var str = document.getElementById("text1").value;
    var reg = /[0-9]E00/;
    if(reg.test(str))
    {
        alert("accept");
    }
    else{
        document.getElementById("lbl").style.visibility = "visible";
    }
}