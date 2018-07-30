from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route('/')
def homepage(name=None):
    return render_template('rmc_home.html', name=name)

@app.route('/mm1')
def mm1(name=None):
    return render_template('mm1.html', name=name)

@app.route('/mm2')
def mm2(name=None):
    return render_template('mm2.html', name=name)

@app.route('/mm3')
def mm3(name=None):
    return render_template('mm3.html', name=name)

@app.route('/mm4')
def mm4(name=None):
    return render_template('mm4.html', name=name)

@app.route('/mm5')
def mm5(name=None):
    return render_template('mm5.html', name=name)

@app.route('/mm6')
def mm6(name=None):
    return render_template('mm6.html', name=name)

@app.route('/mm7')
def mm7(name=None):
    return render_template('mm7.html', name=name)

@app.route('/mm8')
def mm8(name=None):
    return render_template('mm8.html', name=name)

@app.route('/mm9')
def mm9(name=None):
    return render_template('mm9.html', name=name)

@app.route('/mm10')
def mm10(name=None):
    return render_template('mm10.html', name=name)

if __name__ == "__main__":
    app.run(debug=True)
