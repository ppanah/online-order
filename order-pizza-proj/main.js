  // image gallery
  var lastImg = 1; //Set initial thumbnail and preview
   document.getElementById(0).src = document.getElementById(lastImg).src;
   document.getElementById(lastImg).className = "thumb selected";
   function preview(event) {
       const img = event.target;
       document.getElementById(lastImg).className = "thumb normal";
       img.className = "thumb selected";
       document.getElementById(0).src = img.src;
       lastImg = img.id
   }

  const thumbnailsList = document.querySelector('#thumbnails_list')
  thumbnailsList.addEventListener('click', preview)

  function addQty(){
    var QtyInput = document.getElementById('quantity');
    var newVal = QtyInput.value<100 ?parseInt(QtyInput.value)+1: 100;
    document.getElementById('quantity').value=newVal;
  }

  function deleteQty(){
    var QtyInput = document.getElementById('quantity');
    var newVal = QtyInput.value>1 ? parseInt(QtyInput.value)-1: 1;
    document.getElementById('quantity').value=newVal;
  }

  function pay(){
    var QtyVal= parseInt(document.getElementById('quantity').value);
    var total = 99 * QtyVal;
    var alertText = `You should pay total amount of
    ${QtyVal} * 99 USD = ${total} USD`
    alert(alertText);

  }
