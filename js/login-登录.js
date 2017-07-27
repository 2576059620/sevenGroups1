		var isPwd=true;
				$(".eys_transform").click(function(){
					if (isPwd) {
						$(".username").attr("type","text");
					}else{
						$(".username").attr("type","password");
					}
					isPwd = !isPwd;
				})