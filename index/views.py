from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
# Create your views here.

def home(request):

	return render(request, 'feedback.html')

@csrf_exempt
def feedbackdata(request):
	if request.method=="POST":
		name = request.POST.get('name')
		email = request.POST.get('email')
		phone = request.POST.get('phone')
		location = request.POST.get('location')
		interviwer = request.POST.get('interviwername')
		rating = request.POST.get('rating')
		refer = request.POST.get('refer')
		refername = request.POST.get('refername')
		refercontact = request.POST.get('refercontact')
		referloc = request.POST.get('referloc')
		facebookid = request.POST.get('facebook')
		instagramid = request.POST.get('instagram')
		linkedinid = request.POST.get('linkedin')
		
		print(name, email, location, phone, interviwer, rating, refer, refername, refercontact, referloc, facebookid,instagramid, linkedinid)

	return HttpResponse("")
	return render(request,'feedback.html')

def control(request):

	return render(request, 'admin.html')

@csrf_exempt
def search(request):
	if request.method=="POST":

		location = request.POST.get('location')
		start = request.POST.get('start')
		end = request.POST.get('end')

		print(location, start, end)
	return render(request,'admin.html')

@csrf_exempt
def socialcreate(request):
	if request.method=="POST":

		location = request.POST.get('socialapp')
		start = request.POST.get('setlocation')
		end = request.POST.get('url')
		status = request.POST.get('status')

		print(location, start, end, status)
	return render(request,'admin.html')

