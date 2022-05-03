
function loadXMLDoc(funct) {
    //Code to do XML HTTP request (see slides) goes here
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Run a function to handle XML data recv’d
            if(funct == 1)
            {
            myFunction1(this); //tree name
            }
            //myFunction2(this); //image
            else
            {
            buildWordLists(this);
            }
        }
    };
    xhttp.open("GET", '1.xml', true);
    xhttp.send(); 
}

//gets images, tree name from xml file and puts it in section
function myFunction1(xml) 
{
    var x, i, xmlDoc, txt;
    xmlDoc = xml.responseXML; //Response returned as XML data
   // txt = "";
    x = xmlDoc.getElementsByTagName("ThemeEntityAbridgedData");
  // txt = x[1].childNodes[1].innerHTML;
  // var imgLocation = x[1].childNodes[0].innerHTML;
    //console.log(imgLocation);

    //if no image of tree, use default image
    var tempImg = "https://www.nicepng.com/png/full/184-1848288_chorus-tree-minecraft-chorus-tree.png";

    for (i = 0; i< x.length; i++) {
     // txt += "<li>" + x[i].childNodes[1].innerHTML + "</li><br>";
        var txt = x[i].childNodes[1].innerHTML[0];
        var pic = x[i].childNodes[0].innerHTML;

        var id = x[i].childNodes[2].innerHTML;
       // var idURL = "https://w3.winona.edu/locations/api/entities/" + id;
       var idURL = "https://www.winona.edu/m/arboretum/about.asp?e="+ id + "&t=1";

        //id.responseXML.getElementsByTagName('status')[0].firstChild.nodeValue
       



        if (pic=="")
        {
            pic = tempImg;
        }
        //window.alert(txt);
        var uni = txt.charCodeAt(0)- 65;
        var tname = x[i].childNodes[1].innerHTML;

        var tnameNoSpace = tname.replace(/\s/g, '')

        // Create an "li" node:
        var node = document.createElement("div");
        node.className = "tree" + txt + " collapse in";
        node.id = tnameNoSpace;
        
        var samplePText = '<p class = "samplePText" id = "description' + tnameNoSpace + '">' + 'a tree is a perennial plant with an elongated stem, or trunk, usually supporting branches and leaves...</p>';
        node.innerHTML = 
        '<img src="' + pic + '" class="treeimage" alt="Tree">' +
        //event propogation takes you to arboretum tree link instead of collapsing
        '<a onClick="event.stopPropagation();"  href="' + idURL + '">'+'<div class="treetext">' + tname + samplePText + "</div>" + '</a>'; 
        
        //document.getElementsByTagName("div")

        document.getElementsByClassName("sec")[uni].appendChild (node);
        
        //window.alert("done");
        
    }
    //imgLoc2 = "<img src=" + imgLocation + ">";
    
   
   //replace empty section's text with coming soon
   fillEmptySections();
}

//creates A-Z and adds tree names in Left Menu and can click to to go to a certain tree
function buildWordLists(xml){
    var x, i, xmlDoc, txt;
    xmlDoc = xml.responseXML; //Response returned as XML data
    // txt = "";
    x = xmlDoc.getElementsByTagName("ThemeEntityAbridgedData");

    for (i = 0; i< x.length; i++) {
        // txt += "<li>" + x[i].childNodes[1].innerHTML + "</li><br>";
        var txt = x[i].childNodes[1].innerHTML[0];
        // window.alert(txt);
        var uni = txt.charCodeAt(0)- 65;
        

        // Create an "li" node:
        var Word_ul = document.createElement("ul");
        Word_ul.className = "tree_Word" + txt + " collapse in";
        

        var Word_li = document.createElement("li");
        Word_li.className = "tree_Name";

        var tName = x[i].childNodes[1].innerHTML;
        //for pointing to tree
        var tnameNoSpace = tName.replace(/\s/g, '')

        Word_li.innerHTML = '<li>' + '<a href="#'+ tnameNoSpace + '">' + tName + '</a>' + '</li>'; 
                            
        //document.getElementsByTagName("div")

        Word_ul.appendChild(Word_li);

        document.getElementsByClassName("listt")[uni].appendChild (Word_ul);
                            
        //window.alert("done");
    }
        //imgLoc2 = "<img src=" + imgLocation + ">";
                        
        // document.getElementById("newHTML").innerHTML = txt;
}
                    
function createSections(){
    txt = "";
    for (var i = 0; i< 26; i++) {
        var chr = String.fromCharCode(65 + i);
        //txt += '<section class ="sec">'  + '<p class = "sectext"> <a href="#>' + chr + '"</a>' + chr + '</p>' + "</section><br>";
        txt += '<a href=".tree' +  chr + '" data-toggle="collapse">' + '<section class ="sec" id = "sec' + chr + '"><p class = "sectext">' + chr + '</p>' + "</section></a>";
    }
    document.getElementById("newHTML").innerHTML = txt;                    
}

function createLists(){
    txt = "";
    for (var i = 0; i< 26; i++) {
        var chr = String.fromCharCode(65 + i);
        //txt += '<section class ="sec">'  + '<p class = "sectext"> <a href="#>' + chr + '"</a>' + chr + '</p>' + "</section><br>";
        txt += '<li class = "listt">' + '<a href=".tree_Word'+ chr + '" data-toggle="collapse">' +chr + '</a>' + '</li>';
    }
    document.getElementById("menulist").innerHTML = txt;                    
}

function createWrodLists(){

}

function Search() {
    var input, filter, ulparent, liparent, ul, li, a, i, Word_ul_name, txt;

    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    var q = "tree_Word" + filter[0] + " collapse in";
    ul = document.getElementById("menulist");
    li = ul.getElementsByTagName("li");
    //ulchild = ul.getElementsByClassName(q)[0].childNodes[0].childNodes[0].childNodes[0];
    //console.log(ulchild.innerHTML);
    //lichild = ulchild.getElementsByTagName("a");
    //console.log(lichild);
    if (filter.length == 1 || filter.length == 0)
    {
        console.log("go in");
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            //  console.log("1: " + a.innerHTML);
            //  console.log("2: " + a.innerHTML.toUpperCase().indexOf(filter));
            if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }
    else
    {
        for (i = 0; i < ul.getElementsByClassName(q).length; i++) {
            var q = "tree_Word" + filter[0] + " collapse in"
         
             
            a = ul.getElementsByClassName(q)[i].childNodes[0].childNodes[0].childNodes[0];
            console.log(ul.getElementsByClassName(q).length);
            //  console.log("1: " + a.innerHTML);
            //  console.log("2: " + a.innerHTML.toUpperCase().indexOf(filter));
            if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                ul.getElementsByClassName(q)[i].childNodes[0].style.display = "none";
                
            }
        }
    }
}

function fillEmptySections()
{       
        var node = document.createElement("p");
        node.className = "emptyP";
        node.innerHTML = "Coming Soon!";
        document.getElementsByClassName("sec")[20].appendChild (node);

        var node = document.createElement("p");
        node.className = "emptyP";
        node.innerHTML = "Coming Soon!";
        document.getElementsByClassName("sec")[21].appendChild (node);

        var node = document.createElement("p");
        node.className = "emptyP";
        node.innerHTML = "Coming Soon!";
        document.getElementsByClassName("sec")[23].appendChild (node);

        var node = document.createElement("p");
        node.className = "emptyP";
        node.innerHTML = "Coming Soon!";
        document.getElementsByClassName("sec")[25].appendChild (node);

        treeDescriptionXML();
    }

    //Changes description of tree, read from XML file, AMERICAN FILBERT TREE TEST
    function treeDescriptionXML(funct) {
        //Code to do XML HTTP request (see slides) goes here
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) 
            {
                // Run a function to handle XML data recv’d
                treePara(this); //tree name
            }
        };
        xhttp.open("GET", '280.xml', true);
        xhttp.send(); 
    }

    function treePara(xml) 
{
    var x, i, xmlDoc, txt;
    xmlDoc = xml.responseXML; //Response returned as XML data
   // txt = "";
   x = xmlDoc.getElementsByTagName("Description");
   
   var descrpt = x[0].innerHTML;
   var first15 = descrpt.split(' ').slice(0, 15).join(' ');
   first15 += "...";
   

   i = xmlDoc.getElementsByTagName("Locations");
   console.log(first15);  

   var tname = i[0].childNodes[0].childNodes[1].innerHTML;
   var tnameNoSpace = tname.replace(/\s/g, '');
//    console.log(tname);
    var id = "description" + tnameNoSpace;
   
   var para = document.getElementById(id);
   para.innerHTML = first15;

}



// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

