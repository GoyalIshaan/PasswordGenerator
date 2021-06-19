symb = ['@', '#', '$', '%', '=', ':', '?', '.', '/', '|', '~', ''];

function doornot() {
    choice=[true, false];
    index = Math.floor(Math.random()*2);
    return choice[index];
}

function letter_symbol(name) {
    if (doornot()) {
        name = name.replace('a', '@');
        name = name.replace('A', '@');
    }

    if (doornot()) {
        name = name.replace('h', '#');
        name = name.replace('h', '#');
    }

    if (doornot()) {
        name = name.replace('o', '0');
        name = name.replace('O', '0');
    }

    if (doornot()) {
        name = name.replace('s', '$');
        name = name.replace('S', '$');
    }

    name = name.replaceAll(' ', '_');

    return name;
}

function create(name, details) {
    password = letter_symbol(name);
    if (doornot()) {
        password += symb[Math.floor(Math.random()*symb.length)];
    }
    password += details[Math.floor(Math.random()*details.length)];
    password = password.replaceAll(' ', '_');
    return password;
}

document.getElementById("btn").addEventListener("click", function(){
    var name = document.getElementById("name").value;
    var bd = document.getElementById("birth-date").value;
    var liking = document.getElementById("liking").value;
    var phn = document.getElementById("phoneNumber").value;
    var num = document.getElementById("passNumb").value;

    var details = [bd, liking, phn];

   var  p=""

    for (let i = 0; i < num; i++) {
        var g = create(name, details)
        if (i===0){
            p = g;
        }
        p = (p +" ,  " + g);
        document.getElementById("result").innerHTML = p;
    }
    document.getElementById("resHead").innerHTML = "Your Passwords Are - ";
    document.getElementById("again").innerHTML = "(Click The Submit Button Again To Generate New Passwords)";
});
