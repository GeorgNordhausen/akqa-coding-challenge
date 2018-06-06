/*function updateInput(ish){
    var test = document.getElementById("fieldname").value = ish;
    alert(test);
}*/


/*var sel = document.getElementById('shirt');
  sel.onchange = function() {
      console.log(this.value);
     //var show = document.getElementById('show');
     //show.innerHTML = this.value;
  }
*/
  var items = document.getElementsByClassName('item');

  for (var i=0; i<items.length; i++) {
    //console.log(items[i]);
    items[i].onchange = function() {
      console.log(this.value);

      var row = this.parentElement.parentElement.childNodes;

      var price = row[2];
      var qty = this.value;
      console.log(price.innerText);
      console.log(qty.innerText);

      //row[4].innerText = Number(price) * Number(qty);
      console.log(Number(price.innerText) * Number(this.value));
      row[4].innerText = '$'+Number(price.innerText) * Number(this.value);
      //console.log(row);
    }

    var trashes = document.getElementsByClassName('trash');

    for (var i=0; i<trashes.length; i++) {
      /*var row = trashes[i].parentElement.parentElement.childNodes;
      console.log(row[2]);
      console.log(row[4]);*/
      trashes[i].onclick = function() {
        //console.log(this.nextElementSibling);
        console.log(this.nextElementSibling);
        this.parentElement.parentElement.remove();
      }
    }




  }
