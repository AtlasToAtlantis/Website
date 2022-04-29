function readfileautomatically () {
    var client = new XMLHttpRequest();
    client.open('GET', '/MCC Teams.txt');
    client.onreadystatechange = function()
    {
        if( client.responseText != '' )
        {
            var txt = client.responseText.split("\n");
            document.getElementById("line1").innerHTML = txt[0];
            document.getElementById("line3").innerHTML = txt[2];
        }
    }
    client.send();
    
}
