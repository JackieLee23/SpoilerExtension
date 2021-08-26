chrome.storage.sync.get('spoilerText', function(data) {
  alert("hello");
  function markSpoilers() {
    console.log("Marking spoilers");
    console.log(document);
    var h1s = document.querySelectorAll('[id=video-title]');

    console.log(h1s);
    var spoilerString = data.spoilerText;
    var caseSensitive = false;

    for (var i = 0; i < h1s.length; i++) {
      var title = h1s[i].innerHTML;
      //console.log(title);
      if (!caseSensitive) {
        title = title.toLowerCase();
      }

      if (title.includes(spoilerString) && spoilerString != "") {
        h1s[i].innerHTML = "Potential Spoiler!";
      }
    }
  }

  window.onload = function(){
    markSpoilers();
  };
  window.onscroll = function() {
    markSpoilers();
  };
});
