```
function calculaPrecoTotal(quantidade) {
  let maca;
  if(quantidade < 12){
    maca = 1.30
  } else {
    maca = 1
  }
  return maca * quantidade
}