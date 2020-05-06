var countyList = new Array(39);
var countyList = ["Adams","Asotin","Benton","Chelan","Clallam","Clark","Columbia","Cowlitz","Douglas","Ferry","Franklin","Garfield","Grant","Grays Harbor","Island","Jefferson","King","Kitsap","Kittitas","Klickitat","Lewis","Lincoln","Mason","Okanogan","Pacific","Pend Oreille","Pierce","San Juan","Skagit","Skamania","Snohomish","Spokane","Stevens","Thurston","Wahkiakum","Walla Walla","Whatcom","Whitman","Yakima"];

//cnty is input
//Acnty is output

function county(){
    var input = document.getElementById("cnty").value;
    var dis = new Array()
    for(i=0;i<countyList.length;i++){
        if(countyList[i].includes(input)){
            dis.unshift(countyList[i]);
           //document.getElementById("Acnty").innerHTML = countyList[i];
        }
    }
    document.getElementById("Acnty").innerHTML = dis;
   
}






function test1(){
  var i=0;
        var key = document.getElementById("cnty").value;
        while(i<countyList.length){
            if(countyList[i]==key){
                document.getElementById("Acnty").innerHTML = key;
                break;
            }
            i++;
        }
        if(i==10){
            document.getElementById("Acnty").value = "Not Found!";
        }
}



