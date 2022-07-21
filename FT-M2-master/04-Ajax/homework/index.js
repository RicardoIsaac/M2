var ListaAmigos=()=> {
   var list= $("#lista")
   list.empty();
   $.ajax({
    url:"http://localhost:5000/amigos",
    type:"GET",
    success:(data)=>{
        for (let i = 0; i < data.length; i++) {
            list.append(`<li>${data[i].name}</li>`)
            
        }
    },
   })
  };
  $( "#boton" ).click(ListaAmigos);
////////////////////////////////////
  $( "#search" ).click(()=> {
    var id=$("#input").val();
    $.get(`http://localhost:5000/amigos/${id}`, data=>{
        $(`#amigo`).text(data.name)
    })
  })
////////////////////////////////////
$("#delete").click(()=>{
var del= $("#inputDelete").val();
$.ajax({
    url:`http://localhost:5000/amigos/${del}`,
    type:"DELETE",
    success:()=>{
        $(`#success`).text("Ese men nunca fue tu amigo")
        ListaAmigos();
    },
   })

})


