let characount = 0;

//クリーチャーシャッフル
var creature = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var a = creature.length;

var creatureimg = ["images/rival/enemycreature/01.jpg",
    "images/rival/enemycreature/02.jpg",
    "images/rival/enemycreature/03.jpg",
    "images/rival/enemycreature/04.jpg",
    "images/rival/enemycreature/05.jpg",
    "images/rival/enemycreature/06.jpg",
    "images/rival/enemycreature/07.jpg",
    "images/rival/enemycreature/08.jpg",
    "images/rival/enemycreature/09.jpg",
    "images/rival/enemycreature/10.jpg",];

var charaimg = ["images/rival/enemychara/01.jpg", "images/rival/enemychara/02.jpg",
    "images/rival/enemychara/03.jpg", "images/rival/enemychara/04.jpg",
    "images/rival/enemychara/05.jpg", "images/rival/enemychara/06.jpg",
    "images/rival/enemychara/07.jpg", "images/rival/enemychara/08.jpg",
    "images/rival/enemychara/09.jpg", "images/rival/enemychara/10.jpg"]

creatureids = ["01cre", "02cre", "03cre", "04cre", "05cre", "06cre", "07cre", "08cre", "09cre", "10cre",]

creatureimgids = ["01img", "02img", "03img", "04img", "05img", "06img", "07img", "08img", "09img", "10img",]

while (a) {
    var j = math.floor(math.random() * a);
    var t = creature[--a];
    creature[a] = creature[j];
    creature[j] = t;
}



function burn(no) {
    var list_element = document.getElementById(creatureids[no]);
    list_element.remove();
    var i = 1;
    while (1) {
        if (creature[i] == 0) {
            creature[i] = no;
            break;
        } else {
            i++;
        }
    }
}

function quit() {
    characount++;

    var elem = document.getElementById("chara");
    elem.src = charaimg[characount];

}

function call() {
    var newcre = creature[0];
    for (var i = 0; i < 9; i++) {
        creature[i] = creature[i + 1];
    }
    creature[9] = 0;

    var mark = document.getElementById("mark");

    switch (newcre) {
        case 1:
            mark.insertAdjacentHTML('beforebegin', '<div class="creature" id="01cre">< img src = "images/rival/enemycreature/01.jpg" id = "01img" class= "untap" ><br><button onclick="tap(0)">タップ/アンタップ</button><button onclick="burn(0)">除去</button></div>');
            break;
        case 2:
            mark.insertAdjacentHTML('beforebegin', '<div class="creature" id="02cre">< img src = "images/rival/enemycreature/02.jpg" id = "02img" class= "untap" ><br><button onclick="tap(1)">タップ/アンタップ</button><button onclick="burn(1)">除去</button></div>');
            break;
        case 3:
            mark.insertAdjacentHTML('beforebegin', '<div class="creature" id="03cre">< img src = "images/rival/enemycreature/03.jpg" id = "03img" class= "untap" ><br><button onclick="tap(2)">タップ/アンタップ</button><button onclick="burn(2)">除去</button></div>');
            break;
        case 4:
            mark.insertAdjacentHTML('beforebegin', '<div class="creature" id="04cre">< img src = "images/rival/enemycreature/04.jpg" id = "04img" class= "untap" ><br><button onclick="tap(3)">タップ/アンタップ</button><button onclick="burn(3)">除去</button></div>');
            break;
        case 5:
            mark.insertAdjacentHTML('beforebegin', '<div class="creature" id="05cre">< img src = "images/rival/enemycreature/05.jpg" id = "05img" class= "untap" ><br><button onclick="tap(4)">タップ/アンタップ</button><button onclick="burn(4)">除去</button></div>');
            break;
        case 6:
            mark.insertAdjacentHTML('beforebegin', '<div class="creature" id="06cre">< img src = "images/rival/enemycreature/06.jpg" id = "06img" class= "untap" ><br><button onclick="tap(5)">タップ/アンタップ</button><button onclick="burn(5)">除去</button></div>');
            break;
        case 7:
            mark.insertAdjacentHTML('beforebegin', '<div class="creature" id="07cre">< img src = "images/rival/enemycreature/07.jpg" id = "07img" class= "untap" ><br><button onclick="tap(6)">タップ/アンタップ</button><button onclick="burn(6)">除去</button></div>');
            break;
        case 8:
            mark.insertAdjacentHTML('beforebegin', '<div class="creature" id="08cre">< img src = "images/rival/enemycreature/08.jpg" id = "08img" class= "untap" ><br><button onclick="tap(7)">タップ/アンタップ</button><button onclick="burn(7)">除去</button></div>');
            break;
        case 9:
            mark.insertAdjacentHTML('beforebegin', '<div class="creature" id="09cre">< img src = "images/rival/enemycreature/09.jpg" id = "09img" class= "untap" ><br><button onclick="tap(8)">タップ/アンタップ</button><button onclick="burn(8)">除去</button></div>');
            break;
        case 10:
            mark.insertAdjacentHTML('beforebegin', '<div class="creature" id="10cre">< img src = "images/rival/enemycreature/10.jpg" id = "10img" class= "untap" ><br><button onclick="tap(9)">タップ/アンタップ</button><button onclick="burn(9)">除去</button></div>');
            break;
    }


}

function tap(newcre) {
    var element = document.getElementById(creatureimgids[newcre]);
    element.classList.toggle('tap');
    element.classList.toggle('untap');
}