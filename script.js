function search() {
  var query = $("#query").val();
  $("#result").html("");
  if (query == "" || query == " " || query == "") {
    alert("Enter a something to search dummy!");
  } else {
    $.getJSON(
      "https://en.wikipedia.org/w/api.php?action=query&format=json&gsrlimit=15&generator=search&origin=*&gsrsearch=" +
        query,
      function(data) {
        //get JSON data from Wiki
        console.log(data);
        $("#result").append(
          '<h4>Top 15 Search results for "' + query + '"</h4>'
        );
        $.each(data.query.pages, function(i) {
          var thing = data.query.pages;
          $("#result").append(
            '<li class="mdl-list__item"><a target="_blank" href="https://en.wikipedia.org/?curid=' +
              thing[i].pageid +
              '"<span class="mdl-list__item-primary-content"><i class="material-icons mdl-list__item-icon">link</i>' +
              thing[i].title +
              "</span> </a></li>"
          );
        });
      }
    );
  }
}
