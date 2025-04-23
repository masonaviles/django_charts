from django.shortcuts import render, redirect

def login_view(request):
    if request.method == "POST":
        # Dummy logic, no password check
        username = request.POST.get("username")
        if username:
            request.session["user"] = username
            return redirect("dashboard")
    return render(request, "core/login.html")

def logout_view(request):
    request.session.flush()
    return redirect("login")
