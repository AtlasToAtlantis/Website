var txt, line;
var r1,r2,r3,r4,o1,o2,o3,o4,y1,y2,y3,y4,l1,l2,l3,l4,lb1,lb2,lb3,lb4,b1,b2,b3,b4,p1,p2,p3,p4,m1,m2,m3,m4,pi1,pi2,pi3,pi4;
function readfileautomatically() {
    var client = new XMLHttpRequest();
    client.open('GET', 'http://127.0.0.1:5500//mcc teams.txt');
    client.onreadystatechange = function(){
        txt = client.responseText;
        line = txt.split(",");
        document.getElementById("Red").innerHTML = line[0] + line[1] + line[2] + line[3] + line[4];
        document.getElementById("Orange").innerHTML = line[5] + line[6] + line[7] + line[8] + line[9];
        document.getElementById("Yellow").innerHTML = line[10] + line[11] + line[12] + line[13] + line[14];
        document.getElementById("Lime").innerHTML = line[15] + line[16] + line[17] + line[18] + line[19];
        document.getElementById("Green").innerHTML = line[20] + line[21] + line[22] + line[23] + line[24];
        document.getElementById("Light Blue").innerHTML = line[25] + line[26] + line[27] + line[28] + line[29];
        document.getElementById("Blue").innerHTML = line[30] + line[31] + line[32] + line[33] + line[34];
        document.getElementById("Purple").innerHTML = line[35] + line[36] + line[37] + line[38] + line[39];
        document.getElementById("Magenta").innerHTML = line[40] + line[41] + line[42] + line[43] + line[44];
        document.getElementById("Pink").innerHTML = line[45] + line[46] + line[47] + line[48] + line[49];
        r1 = String(line[1]);

    }
    //var text = 'Hello\n.\nWorld\n.\n.\n.itsme'
    client.send();
    
}
  var options = {
    width: (window.innerWidth-216)/4,
    height: (((window.innerWidth-216)/4)*0.5625),
    channel: a,//need to look at
    // only needed if your site is also embedded on embed.example.com and othersite.example.com
    parent: ["127.0.0.1"]
};
var player = new Twitch.Player("r1", options);
