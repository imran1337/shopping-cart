// item quantity increase function
  function handleItemQuantityPrice(idName, inputName, productId, productPrice,isIncrease) {
      document.getElementById(idName).addEventListener("click", function () {
      let itemQuantityCount = parseInt(document.getElementById(inputName).value);
      if (isIncrease == false) {
            itemQuantityCount > 0 ? document.getElementById(inputName).value = --itemQuantityCount : null;
          } else {
            document.getElementById(inputName).value = ++itemQuantityCount;
          }
      productMoneyUpdater(productId, itemQuantityCount, productPrice);
      checkOutPrizeUpdater();
    });
  }
// item increase
  handleItemQuantityPrice("firstItemIncrease","firstItemInputValue","phonePrize","1219",true);
  handleItemQuantityPrice("secondItemIncrease","secondItemInputValue","casePrize","59",true);
  //item decrease
  handleItemQuantityPrice("firstItemDecrease","firstItemInputValue","phonePrize","1219",false);
  handleItemQuantityPrice("secondItemDecrease","secondItemInputValue","casePrize","59",false);
  // multiply to price update
  function productMoneyUpdater(productPriceId, itemInputVale, productPrice) {
    document.getElementById(productPriceId).innerText = itemInputVale * parseInt(productPrice);
  }
  // checkout working area
  function checkOutPrizeUpdater() {
      let phoneTotalPrice = parseInt(document.getElementById('phonePrize').innerText) + parseInt(document.getElementById('casePrize').innerText);
      document.getElementById('subTotal').innerText = phoneTotalPrice
      // taxCalculator
      const taxValue = (5 / 100).toFixed(2);
      let generatedTaxValue = parseFloat((taxValue * parseInt(document.getElementById('subTotal').innerText)).toFixed(2));
      document.getElementById('checkOutTax').innerText = generatedTaxValue;
      // taxWithTotal calculator
      document.getElementById('totalWithTax').innerText = phoneTotalPrice + generatedTaxValue;
  }
  // click to item remove || not remove display none done
  function itemsRemove(itemRemoveIdName,deleteParentId,productQuantity,productPrice) {
      document.getElementById(itemRemoveIdName).addEventListener('click', (event) => {
          document.getElementById(productQuantity).innerText = 0;
          document.getElementById(productPrice).innerText = 0;
          checkOutPrizeUpdater();
          document.getElementById(deleteParentId).style.display = 'none';
      })
  }
  itemsRemove("firstRemove",'cartItemOne','firstItemInputValue','phonePrize')
  itemsRemove('secondRemove','cartItemTwo','secondItemInputValue','casePrize')
  // checkout Button || click to check out
  document.getElementById('checkOut').addEventListener('click', function (event) {
    document.getElementById('phonePrize').innerText = 0;
          document.getElementById('casePrize').innerText = 0;
          document.getElementById("firstItemInputValue").value = 0;
          document.getElementById("secondItemInputValue").value = 0;
          checkOutPrizeUpdater();
          alert('Check Out Successful!')
  })