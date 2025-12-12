from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def main():
    title = "KC-Monopoly-Clicker-Website"
    header = "Welcome to KC-Monopoly-Clicker-Website"
    content = "This is the main page of the Clicker Game."
    footer = "© 2025 Carson V"
    return render_template("index.html", title=title, header=header, content=content, footer=footer)

if __name__ == '__main__':
    app.run(debug=True)