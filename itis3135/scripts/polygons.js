
function validateEntry(entry){
    entry= Math.round(entry);
   if(!isNaN(entry)&& entry >0 && entry<=10){
    return entry;
   }else{
    return false;
   }

  
}
function getShape(numSides){
    const polygonNames=["","Henagon","Digon","Triangle","Quadrilateral","Pentagon","Hexagon","Heptagon","Octagon","Nonnagon", "Decagon"];
    return polygonNames[numSides];
}
function polygon(){
    let numSides=document.getElementById('numSides').value;
    numSides= validateEntry(numSides);
    if(numSides!==false){
        let polygonName=getShape(numSides);
        alert('the polygon with ' + numSides+' sides is a '+polygonName );
    }else{
        alert('Invalid entry.');
        document.getElementById('numSides').value="";
    }
}