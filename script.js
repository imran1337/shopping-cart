// captureId
function captureId(idName) {
  return document.getElementById(idName);
}
// item quantity increase function
function itemQuantityIncrease(idName, inputName, phoneId, phonePrice) {
    captureId(idName).addEventListener("click", function () {
    let itemQuantityCount = parseInt(captureId(inputName).value);
    captureId(inputName).value = ++itemQuantityCount;
    priceIncrease(phoneId, itemQuantityCount, phonePrice);
    checkOutPrizeUpdater()
  });
}
itemQuantityIncrease("firstItemIncrease","firstItemInputValue","PhonePrize","1219");
itemQuantityIncrease("secondItemIncrease","secondItemInputValue","casePrize","59");
// item quantity decrease function
function itemQuantityDecrease(idName, inputName, phoneId, phonePrice) {
    captureId(idName).addEventListener("click", function () {
        let itemQuantityCount = parseInt(captureId(inputName).value);
        if (itemQuantityCount > 0) {
        captureId(inputName).value = --itemQuantityCount;
        priceIncrease(phoneId, itemQuantityCount, phonePrice);
        checkOutPrizeUpdater()
        }
      });
}
//item decrease
itemQuantityDecrease("firstItemDecrease","firstItemInputValue","PhonePrize","1219");
itemQuantityDecrease("secondItemDecrease","secondItemInputValue","casePrize","59");
// multiply to price update
function priceIncrease(phonePriceId, itemInputVale, phonePrice) {
  captureId(phonePriceId).innerText = itemInputVale * parseInt(phonePrice);
}
// checkout working area
function checkOutPrizeUpdater() {
    let phoneTotalPrice = parseInt(captureId('PhonePrize').innerText) + parseInt(captureId('casePrize').innerText);
    captureId('subTotal').innerText = phoneTotalPrice
    // taxCalculator
    const taxValue = (5 / 100).toFixed(2);
    let generatedTaxValue = parseFloat((taxValue * parseInt(captureId('subTotal').innerText)).toFixed(2));
    captureId('checkOutTax').innerText = generatedTaxValue;
    // taxWithTotal calculator
    captureId('totalWithTax').innerText = phoneTotalPrice + generatedTaxValue;
}
// click to item remove || not remove display none done
function itemsRemove(itemRemoveIdName,rmParentId,phoneQuantity,phonePrice) {
    captureId(itemRemoveIdName).addEventListener('click', (event) => {
        captureId(phoneQuantity).innerText = 0;
        captureId(phonePrice).innerText = 0;
        checkOutPrizeUpdater();
        captureId(rmParentId).style.display = 'none';
    })
}
itemsRemove("firstRemove",'cartItemOne','firstItemInputValue','PhonePrize')
itemsRemove('secondRemove','cartItemTwo','secondItemInputValue','casePrize')