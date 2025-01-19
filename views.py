from flask import Blueprint, render_template

views = Blueprint('views', __name__)

@views.route("/")
def home():
    return render_template('index.html')

@views.route("/about")
def about():
    return render_template('about.html')

@views.route("/events")
def events():
    return render_template('events.html')


from flask import render_template, request, redirect, url_for, flash

@views.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        # Formularfelder abrufen
        name = request.form.get('name')
        phone = request.form.get('phone')
        email = request.form.get('email')
        event_type = request.form.get('event_type')
        event_location = request.form.get('event_location')
        guest_count = request.form.get('guest_count')
        desired_service = request.form.get('desired_service')
        event_date = request.form.get('event_date')
        message = request.form.get('message')
        
        # Hier kannst du die Daten speichern oder per E-Mail versenden
        
        flash('Vielen Dank für Ihre Nachricht! Wir melden uns bei Ihnen.', 'success')
        return redirect(url_for('views.contact'))  # Nach dem Absenden zurück zur Seite
        
    return render_template('contact.html')


@views.route("/booking")
def booking():
    return render_template('contact.html')
