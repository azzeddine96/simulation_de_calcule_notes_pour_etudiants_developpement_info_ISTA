
var btn = document.getElementById("btn");

btn.onclick = function () {
    'use strict';
    //notes des modules
    let note1=parseFloat(document.getElementById("note1").value) ;
    let note2=parseFloat(document.getElementById("note2").value) ; 
    let note3=parseFloat(document.getElementById("note3").value) ;
    let note4=parseFloat(document.getElementById("note4").value) ;
    let note5=parseFloat(document.getElementById("note5").value) ;
    let note6=parseFloat(document.getElementById("note6").value) ;
    let note7=parseFloat(document.getElementById("note7").value) ;
    let note8=parseFloat(document.getElementById("note8").value) ;
    let note9=parseFloat(document.getElementById("note9").value) ;
    let note10=parseFloat(document.getElementById("note10").value) ;
    let note11=parseFloat(document.getElementById("note11").value) ;
    let note12=parseFloat(document.getElementById("note12").value) ;
    //note du 1er annee 
    let note13=parseFloat(document.getElementById("note13").value) ;
    //note du EFF
    let note14=parseFloat(document.getElementById("note14").value) ;

    //calcule
    let Anne2=parseFloat((note1*2+note2*2+note3*2+note4*1+note5*2+note6*3+note7*2+note8*3+note9*3+note10*3+note11*3+note12)/27) ;
    let note15=parseFloat((note13+Anne2*3+note14)/9) ;

    

    //affichage
    document.getElementById("note15").value=Anne2.toFixed(2) ;
    document.getElementById("note16").value=note15.toFixed(2) ;
      
};


