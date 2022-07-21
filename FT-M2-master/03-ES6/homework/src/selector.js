var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl)) resultSet.push(startEl)
  for (let a = 0; a < startEl.children.length; a++) {
  var result =traverseDomAndCollectElements(matchFunc,startEl.children[a])
    resultSet=[...resultSet,...result]
  }
  return resultSet 
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
    if(selector[0]==="#"){return "id"}
  if(selector[0]==="."){return "class"}
  for(let x=1;x<selector.length;x++){
    if(selector[x]==="."){return "tag.class"}
  }
  return "tag"
};
selectorTypeMatcher
// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);// recibimos uno // id, class, tag.class, tag
  var matchFunction;
  if (selectorType === "id") { 
    matchFunction=function(element){
return "#"+element.id ===selector;
    }
   
  } else if (selectorType === "class") {
    matchFunction=function(element){
      for (let i = 0; i < element.classList.length; i++) {
        if("."+element.classList[i]===selector){return true}
      }
      return false
          }
    
  } else if (selectorType === "tag.class") {
    matchFunction=function(element){
      let [t,c]=selector.split(".");
      return matchFunctionMaker(t)(element) && matchFunctionMaker("."+c)(element)
    }
    
  } else if (selectorType === "tag") {
    matchFunction=function(element){
    return element.tagName===selector.toUpperCase();
    }
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
