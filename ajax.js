
		$(function(){

	$("#special").click (function(){
		var title=$("#title").val();
		console.log(title);

		$.ajax({
			type: 'GET',
			url: 'http://www.omdbapi.com/?s='+title,

			success: function(response) {
				var str="";
				var key=[];
				var movie=response.Search;
				console.log(response);
				if(response.totalResults > 0){
					key=Object.keys(movie[0]);
			//for(var i=0;i<response.totalResults;i++){
				$.each(movie,function(i,val){
					$.each(key,function(k,v){
						if(typeof(movie[i])!="undefined"){
							if(key[k]=="Poster"){
								if(movie[i].Poster =="N/A"){
									str +='<img src="na.jpg" width="300" height="300"><hr>';	
								}else{
									str +='<img src="'+ movie[i].Poster +'" width="300" height="300"><hr>';
								}
							}else{	
								str +=key[k]+" : "+movie[i][key[k]]+'<br>';
							}
						}
					});
				});
			}
			$("#data").html(str);
		}
		
	});
	});	

	});