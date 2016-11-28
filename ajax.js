 
  var page=1;  
  
 function  SearchFunction(page) {
$(function(){
		var movie;
		var img="";
		var title=$("#title").val();
		console.log(title);
		$.ajax({
		type: 'GET',
		url: 'http://www.omdbapi.com/?s='+title+'&page='+page,
	success: function(response) {
			var key=[];
			movie=response.Search;
			console.log(response);
			$("#data").html("");
		if(response.totalResults > 0){
			key=Object.keys(movie[0]);
			movie.sort(function(a, b){return b.Year - a.Year});
			$.each(movie,function(i,val){
				$.each(key,function(k,v){
					if(typeof(movie[i])!="undefined"){
						if(key[k]=="Poster"){
							if(movie[i].Poster =="N/A"){
		      					img="images/NotAvailable.jpg";	
							}else{
								img=movie[i].Poster;	
							}
					    $("#data").append("<div class= col-sm-4 >"+"<ul>"+"<li><div class="+"panel-heading"+">"+"<b>Title:</b> "+movie[i].Title+"</li>"+"<li>"+"<b>Year:</b> "+movie[i].Year+"</li>"+"<li>"+"<b>Type:</b> "+movie[i].Type+"</li>"+"<li>"+"<b>imdbID:</b> "+movie[i].imdbID+"</li></div>"+
					     "<li><img src="+img+" class="+"img-thumbnail"+" width="+"300"+" height="+"375"+"><hr></li>"+"</ul>"+"</div>");
						}
					}
				});
			});
        }else{
			$("#data").append("<div id="+"label"+"><h1>Movie Not Found!</h1></div>");
			}
       }
    });
  });
};
$("#special").click (function(){
 		SearchFunction();
    });
$("#left").click (function(){
 		page-=1;
 		SearchFunction(page);
 	});
$("#right").click (function(){
		page+=1;
		SearchFunction(page);
	});


