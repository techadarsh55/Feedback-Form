$(window).on('load', function(){

	$('#interviewerinfo').hide();
	$('#friendinfo').hide()
	$('#socialpresent').hide();
	$('#socialmedia').hide();
	//$('#socialmedialink').hide()
	//$('#googlereviews').hide()
	$('#formsubmit').hide();	
	$('#table').hide()

});

var star = 0
function starval(obj) {
	var x = $(obj).val();
	star = x;

}
var x = false
function checkfunction() {
		if(x == false){
		
		$('#socialmedialink').show()
		x = true;
	}
	else{
		$('#socialmedialink').hide()
		x = false;
		}
	}
var y = false
function checkfunction1() {
		if(y == false){
		
		$('#googlereviews').show()
		y = true;
	}
	else{
		$('#googlereviews').hide()
		y = false;	
	}
	}
$('#referfriend').on('change', function(){
		var ans = $(this).val();
		if(ans == 'yes')
		{
			$('#friendinfo').show();
		}		
		if(ans=='no')
		{
			$('#friendinfo').hide();
		}	
	});

$('#next1').click(function(e){
	var name = $('#name').val();
	var location = $('#location').val()
	var email = $('#email').val()
	var phone = $('#phone').val()
	
	if (email =='' || phone =='' || name=='' || location==''){
		/*document.getElementById().innerHTML = '';*/
		$('#name').css("border", "2px #ff9292 solid");
		$('#location').css("border", "2px #ff9292 solid");
		$('#email').css("border", "2px #ff9292 solid");
		$('#phone').css("border", "2px #ff9292 solid");
		e.preventDefualt();
	}
	else{
		$('#userinfo').hide();
		$('#interviewerinfo').show();
		document.getElementById('show2').style.fontSize = '25px'
		$('#show2').css('background-color','#009fff');	
	}
});


count = 0

	$('#add-refer').click(function(){
		count++
		$('#table').show();
		var name = $('#friendname').val();
		var contact = $('#contact').val();
		var location = $('#friendlocation').val();
		/*if(name=='' || contact=='' || location==''){
			e.preventDefualt()
			$('#table').hide();
		}*/
		

		if(count==1){
			$('#emptybin').hide();
			table = "<table class='table' style='overflow: auto;' id='table'><thead><tr><th scope='col'>#</th><th scope='col'>Name</th><th scope='col'>Contact</th><th scope='col'>location</th></tr></thead><tbody id='tbody'></tbody></table>"
			$('#resultarea').append(table)
			count++
			}

		
			var form = '<tr> <td id="id'+count+'">'+count+'</td> <td>'+name+'</td> <td>'+contact+'</td> <td>'+location+'</td> </tr>'
			$('#tbody').append(form)
			$('#friendname').val('');
			$('#contact').val('');
			$('#friendlocation').val('');
		
		});
//next2
$('#next2').click(function(e){
	var interviwername2 = $('#interviewername').val();
	var rating = star
	var refer = $('#referfriend').val()
	var friendname = $('#id1').val()
	var contact = $('#contact').val()
	var friendloc = $('#friendlocation').val()

	if (interviwername2 =='select interviewer name' || refer ==''){
		$('#interviewername').css("border", "2px #ff9292 solid");
		$('#referfriend').css("border", "2px #ff9292 solid");
		e.preventDefualt()
	}


 	/*if(refer=='yes'){
	if(friendname == null){
		$('#friendname').css("border", "2px #ff9292 solid");
		$('#contact').css("border", "2px #ff9292 solid");
		$('#friendlocation').css("border", "2px #ff9292 solid");
		e.preventDefualt()
		}

		
		
	}*/
	else{
			$('#interviewerinfo').hide();
			$('#socialpresent').show();
			document.getElementById('show2').style.fontSize = '25px'
			$('#show3').css('background-color','#0078ff');
		}	

	if(refer=='yes'){
		if(friendname == null){
			$('#friendname').css("border", "2px #ff9292 solid");
			$('#contact').css("border", "2px #ff9292 solid");
			$('#friendlocation').css("border", "2px #ff9292 solid");
			e.preventDefualt()
			}

		/*else{
			$('#interviewerinfo').hide();
			$('#socialpresent').show();
			document.getElementById('show2').style.fontSize = '25px'
			$('#show3').css('background-color','#0078ff');
		}	*/
	}
	if (refer=='no'){
		$('#interviewerinfo').hide();
		$('#socialpresent').show();
		document.getElementById('show2').style.fontSize = '25px'
		$('#show3').css('background-color','#0078ff');
	}

	
});

//next 3
$('#next3').click(function(e){
	var social = x
	var facebook = $('#facebookid').val()
	var instagram = $('#instagramid').val()
	var linkedin = $('#linkedin').val()

	if (social == true){
		if (facebook=='' && instagram =='' && linkedin ==''){

			$('#facebookid').css("border", "2px #ff9292 solid");
			$('#instagramid').css("border", "2px #ff9292 solid");
			$('#linkedin').css("border", "2px #ff9292 solid");
			e.preventDefualt();
		}
		else{
			$('#socialpresent').hide();
			$('#socialmedia').show();
			document.getElementById('show2').style.fontSize = '25px'
			$('#show4').css('background-color','#0051ff');
		}	
	}
	else{

		$('#socialpresent').hide();
		$('#socialmedia').show();
		document.getElementById('show2').style.fontSize = '25px'
		$('#show4').css('background-color','#0051ff');
	}
});

function feeddata() {
	var name1 = $('#name').val()
	var email1 = $('#email').val()
	var phone1 = $('#phone').val()
	var location1 = $('#location').val()
	var interviwername1 = $('#interviewername').val()
	var rating1 = star
	var refer1 = $('#referfriend').val()
	var refername = $('#friendname').val()
	var refercontact = $('#contact').val()
	var referloc = $('#friendlocation').val()
	var facebook1 = $('#facebookid').val()
	var instagram1 = $('#instagramid').val()
	var linkedin1 = $('#linkedinid').val()

	$.ajax({
		url:'feedbackdata',
		type:'POST',
		data:{name:name1, email:email1, phone: phone1, location: location1, interviwername: interviwername1, rating: rating1, refer: refer1, refername: refername, refercontact: refercontact, referloc: referloc, facebook:facebook1, instagram:instagram1, linkedin:linkedin1},
		
		success:function(data){
			console.log(data)
		},
		error: function(data){
			
			console.log(data)
		}
	})
}

$('#submitform').click(function(){
	$('#socialmedia').hide();
	$('#formsubmit').show();
	feeddata()
	setTimeout(function(){
   	window.location.reload();
	}, 5000);		
});
//pre1 
$('#per1').click(function(e){		
		$('#userinfo').show();
		$('#interviewerinfo').hide();
		document.getElementById('show2').style.fontSize = '25px'
		$('#show2').css('background-color','#aaacad');
});
//pre 2
$('#per2').click(function(e){
		$('#interviewerinfo').show();
		$('#socialpresent').hide();
		document.getElementById('show2').style.fontSize = '25px'
		$('#show3').css('background-color','#aaacad');
	});

$('#per3').click(function(e){

		$('#socialpresent').show();
		$('#socialmedia').hide();
		document.getElementById('show2').style.fontSize = '25px'
		$('#show4').css('background-color','#aaacad');
});
