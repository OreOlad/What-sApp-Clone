let $=el=>{
    return document.querySelectorAll(el);
}

let user=[
          "Coffin Dancer",
          "SoloLearn",
          "Anonymous",
          "Meme Man",
          "Arb",          
          "Alan Walker",
          "Marshmello",
          "Summie"          
];
let link=[
          "https://i.ibb.co/jM7rJw2/maxresdefault-2.jpg",
          "https://api.sololearn.com/Uploads/Avatars/1.jpg",
          "https://api.sololearn.com/Uploads/Avatars/0.jpg",
          "https://i.ibb.co/XyqfzjD/fetchimage-2.jpg",
          "https://api.sololearn.com/Uploads/Avatars/7038378.jpg",          
          "https://i.ibb.co/NsGd4jG/wp2383843-2.jpg",
          "https://i.ibb.co/26Tz1gx/wp4475355-2.jpg",
          "https://api.sololearn.com/Uploads/Avatars/12458983.jpg",
                            
];
let info=[
         ["Hi, go see outside","14:30","1"],
         ["Challenged you in python","13:51",""],
         ["Umm, hi.","13:45",""],
         ["Watsopp","13:20",""],
         ["Here's my proof","11:11",""],         
         ["I\'m Faded","10:20",""],
         ["I\'m so Alone","10:07",""],
         ["Typing...","08/06/2017",""]
];
let message;
let tab=[".t1", ".t2", ".t3"];
onload=()=>{
    

    $(".n1 .list")[0].onmouseover=()=>{
        $(".n1 .list")[0].style.clipPath="circle(100%)";
        $(".n1 .list")[0].style.opacity="1";
    }
    $(".n1 .list")[0].onmouseleave=()=>{
        $(".n1 .list")[0].style.clipPath="circle(30% at 100% 0%)";
        $(".n1 .list")[0].style.opacity="0";
    }
    
    for(let i in tab){
        $(tab[i])[0].onclick=()=>{
            $(".dash")[0].style.transform=`translateX(${i*100}%)`;
        }
    }
    
    $(".fa-search")[0].onclick=()=>{
        $(".searchbox")[0].style.clipPath="circle(100% at 50% 50%)";
        $(".n2")[0].style.transform="translateY(-101%)";
        setTimeout(()=>{
        $(".n2")[0].style.position="absolute";
        },200)
    }
    $(".close")[0].onclick=()=>{
        $(".searchbox")[0].style.clipPath="circle(0% at 50% 50%)";
        $(".n2")[0].style.transform="translateY(0%)";
        $(".n2")[0].style.position="";
    }
    
    for(let i=0;i<user.length;i++){
        message=`<div class="chat">
                    <span class="avatar">
                        <img src="${link[i]}">
                    </span>
                    
                    <span class="container ${user[i]}">
                        <span class="info">
                            <span>${user[i]}</span>
                            <span>${info[i][1]}</span>
                        </span>
                        
                        <span class="message">
                        <span>${info[i][0]}</span>
                        <span>${info[i][2]}</span>
                        </span>
                    </span>
                </div>`;
                
            $("section")[0].innerHTML+=message;
    }
    $(".container")[user.length-1].style.border="none";
    $(".message")[user.length-1].style=`
    color:var(--green2);
    font-weight:bolder;
    `;
    
    setTimeout(()=>{
    main.style.display="block";
    loader.style.display="none";
    },3000)    
}
