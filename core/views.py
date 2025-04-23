from django.shortcuts import render, redirect

def dashboard(request):
    if not request.session.get("user"):
        return redirect("login")
    
    chart_data = {
        "labels": ["Red", "Blue", "Yellow"],
        "values": [12, 19, 3],
    }
    return render(request, "core/dashboard.html", {"chart_data": chart_data})
