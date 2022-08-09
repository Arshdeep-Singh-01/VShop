let avatar = document.getElementById('set-avatar');
let changeAvatar = document.getElementById('change-btn');

if(avatar==null){
  console.log("null found");
}

// avatar rotation
// var rot = 10;
// setInterval(function () {rot+=1; rot%=360; avatar.setAttribute('rotation', {x: 0, y: rot, z: 0})}, 100);


// changing avatar

// let card_img = document.getElementById("avatar-card-img");
// let form = document.getElementById('radio-btns');

let name = "https://d1a370nemizbjq.cloudfront.net/bee1e7e8-ee80-4538-ab08-e5ed5994770c.glb";
let vari = 1;

viewAvatar = function(val){
    // var val = document.querySelector('input[name = btnradio]:checked').value;
    console.log(val);
switch(val){
    case 1:
          vari = 1;
          name = "https://d1a370nemizbjq.cloudfront.net/bee1e7e8-ee80-4538-ab08-e5ed5994770c.glb";
          avatar.setAttribute("gltf-model", "https://d1a370nemizbjq.cloudfront.net/bee1e7e8-ee80-4538-ab08-e5ed5994770c.glb");
          console.log("match-1");
          // card_img.setAttribute("src","https://cdn.glitch.global/e9dd7bae-64ae-4a58-a806-212727a4bffa/avatar-1.png?v=1658435257904");
          break;
      
    case 2:
      vari = 2;
          name = "https://d1a370nemizbjq.cloudfront.net/31a643b0-2eca-49ca-b763-0b06fad75087.glb";
          avatar.setAttribute("gltf-model", "https://d1a370nemizbjq.cloudfront.net/31a643b0-2eca-49ca-b763-0b06fad75087.glb");
          console.log("match-2");
          // card_img.setAttribute("src","https://cdn.glitch.global/e9dd7bae-64ae-4a58-a806-212727a4bffa/avatar-2.png?v=1658435266734");   
          break;
      
    case 3:
      vari = 3;
          name = "https://d1a370nemizbjq.cloudfront.net/a85a845c-16d9-4418-b08e-61b96aa5b442.glb";
          avatar.setAttribute("gltf-model", "https://d1a370nemizbjq.cloudfront.net/a85a845c-16d9-4418-b08e-61b96aa5b442.glb");
          console.log("match-3");
          // card_img.setAttribute("src","https://cdn.glitch.global/e9dd7bae-64ae-4a58-a806-212727a4bffa/avatar-3.png?v=1658435271876");
          break;
      
    case 4:
      vari= 4;
          name = "https://d1a370nemizbjq.cloudfront.net/85646932-6466-46be-a150-19c11ced0d6a.glb";
          avatar.setAttribute("gltf-model", "https://d1a370nemizbjq.cloudfront.net/85646932-6466-46be-a150-19c11ced0d6a.glb");
          console.log("match-4");
          // card_img.setAttribute("src","https://cdn.glitch.global/e9dd7bae-64ae-4a58-a806-212727a4bffa/avatar-4.png?v=1658435278769");
          break;
      
    default:
      vari=5;
          avatar.setAttribute("gltf-model", "https://d1a370nemizbjq.cloudfront.net/bee1e7e8-ee80-4538-ab08-e5ed5994770c.glb");
          console.log("default");
          // card_img.setAttribute("src","https://cdn.glitch.global/e9dd7bae-64ae-4a58-a806-212727a4bffa/avatar-1.png?v=1658435257904");
          break;
  }
  // rot = 0;
  // avatar.setAttribute('rotation', {x: 0, y: 320, z: 0})
}

getUrlParams =  function () {
      var match;
      var pl = /\+/g;  // Regex for replacing addition symbol with a space
      var search = /([^&=]+)=?([^&]*)/g;
      var decode = function (s) { return decodeURIComponent(s.replace(pl, ' ')); };
      var query = window.location.search.substring(1);
      var urlParams = {};
  
      match = search.exec(query);
      while (match) {
        urlParams[decode(match[1])] = decode(match[2]);
        match = search.exec(query);
      }
      return urlParams;
  }
  
var par = this.getUrlParams();

let myroom = document.getElementById('goto-room');
myroom.onclick = () =>{
    let plink = location.href;
    let newLink = plink.substring(0,47);    // to be changed if used in server
    var params = this.getUrlParams();
    console.log(params);

//     alert(newLink);
    var x = document.getElementById("roomID").value;
    console.log(x);
    let finalLink = newLink + "/scene.html?username=" + par.username + "&room=" + x + "&avatar=" + name;
//     alert(finalLink);
      location.href = finalLink;
}