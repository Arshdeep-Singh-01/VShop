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

var param = this.getUrlParams();


document.getElementById('get-Avatar').onclick = function () {
    let newLink = location.href;
    console.log(newLink);
    newLink += 'avatar.html';
    var x = document.getElementById("username").value;
    console.log(x);
    let finalLink = newLink + "?username=" + x;
    
    // alert(finalLink);
    location.href = finalLink;
}