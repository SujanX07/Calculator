function si(){
    let principle = document.getElementById('p').value;
    let rate = document.getElementById('r').value;
    let time = document.getElementById('t').value;

    let si = (principle*rate*time)/100;
    document.getElementById('result').innerHTML = si;
}