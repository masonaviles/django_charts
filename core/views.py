from django.shortcuts import render
import json

def dashboard(request):
    chart_data = {
        "labels": ["Alpha", "Beta", "Gamma"],
        "values": [30, 55, 15]
    }
    return render(request, "core/dashboard.html", {
        "chart_data": json.dumps(chart_data)
    })
