let sec = 0;
let min = 1;
let schuss_a =3;
let h = 0;
let h_n = 0;
let score = 0;
let highscore = 0;
let zeit_i;
let lauft = false;
let ziel_x=0;
let ziel_y=0;
let start_x=0;
let start_y=0;
let hase_random_id;
let standort;
function start_fenster(){
    let hintergrund = document.createElement("div");
    hintergrund.id = "hintergund";
    hintergrund.style.position = "fixed";
    hintergrund.style.height= 1000+"px";
    hintergrund.style.width = 2000+"px";
    hintergrund.style.top = 0+"px";
    hintergrund.style.left = 0+"px";
    hintergrund.style.backgroundImage = "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(41,159,200,1) 72%, rgba(11,164,186,1) 100%)";
    document.body.appendChild(hintergrund);


    let start_button = document.createElement("div");
    start_button.id = "knopf";
    start_button.addEventListener("click" , spiel_start);
    start_button.style.height = 125 +"px";
    start_button.style.width = 300+"px";
    start_button.style.top = 350+"px";
    start_button.style.left =700+"px";
    start_button.style.backgroundColor = "red";
    start_button.style.backgroundImage = "linear-gradient(45deg, rgba(36,0,0,1) 6%, rgba(115,9,10,1) 72%, rgba(121,9,9,1) 100%)";
    start_button.style.borderWidth = 10+"px";
    start_button.style.borderStyle = "dotted";
    start_button.style.borderColor = "yellow";
    start_button.style.borderRadius = 20+"px";
    start_button.style.position = "fixed";
    start_button.innerHTML = "Start"
    start_button.style.fontSize = 100+"px";
    start_button.style.color = "#b4c829";
    start_button.style.textAlign = "center";
    document.body.appendChild(start_button);
}

function spiel_start(){
    
    let der_knopf =document.getElementById("knopf");
    der_knopf.remove();

    let wiese = document.createElement("div");
    wiese.id = "wiese";
    wiese.addEventListener("click" , schuss);
    wiese.style.width = 100+"%";
    wiese.style.height = 80 +"%";
    wiese.style.position = "fixed";
    wiese.style.bottom = 0+"px";
    wiese.style.left = 0+"px";
    wiese.style.backgroundImage = "linear-gradient(0deg, rgba(0,100,0,1) 6%, rgba(50,160,10,1) 72%, rgba(50,200,50,1) 100%)"
    document.body.appendChild(wiese);

    let busch1 = document.createElement("div");
    busch1.id = "busch1";
    busch1.style.width = 20+"%";
    busch1.style.height = 20 +"%";
    busch1.style.position = "fixed";
    busch1.style.bottom = 50+"%";
    busch1.style.left = 20+"%";
    busch1.style.backgroundRepeat = "no-repeat";
    busch1.style.backgroundImage = "url(resources/images.png)"
    document.body.appendChild(busch1);

    let busch2 = document.createElement("div");
    busch2.id = "busch2";
    busch2.style.width = 20+"%";
    busch2.style.height = 20 +"%";
    busch2.style.position = "fixed";
    busch2.style.bottom = 30+"%";
    busch2.style.left = 45+"%";
    busch2.style.backgroundRepeat = "no-repeat";
    busch2.style.backgroundImage = "url(resources/images.png)"
    document.body.appendChild(busch2);

    let loch = document.createElement("div");
    loch.id = "loch";
    loch.style.width = 20+"%";
    loch.style.height = 20 +"%";
    loch.style.position = "fixed";
    loch.style.bottom = 50+"%";
    loch.style.left = 60+"%";
    loch.style.backgroundRepeat = "no-repeat";
    loch.style.backgroundImage = "url(resources/images.png)"
    document.body.appendChild(loch);

    let mauer = document.createElement("div");
    mauer.id = "mauer";
    mauer.style.width = 1500+"px";
    mauer.style.height = 100+"px";
    mauer.style.left = 150+"px";
    mauer.style.bottom = 0 +"px";
    mauer.style.backgroundImage = "url(resources/mauer.png)";
    mauer.style.backgroundRepeat = "repeat";
    mauer.style.position = "fixed";
    document.body.appendChild(mauer);

    let kreis = document.createElement("div");
     kreis.id = "kreis"
    kreis.style.height = 100+"px";
    kreis.style.width =100 +"px";
    kreis.style.position = "fixed";
    kreis.style.borderRadius = 50+"%";
    kreis.style.borderWidth = 10+"px";
    kreis.style.borderStyle = "solid";
    kreis.style.borderColor = "red";

    document.body.appendChild(kreis);

    let kill_score = document.createElement("div");
    kill_score.id = "kill_score";
    kill_score.style.width = 30+"%";
    kill_score.style.height = 10+"%";
    kill_score.style.right = 0+"px";
    kill_score.style.top = 0 +"px";
    kill_score.style.color = "#b4c829";
    kill_score.style.fontSize = 30+"px";
    kill_score.innerHTML =  "Score: "+score;
    kill_score.style.position = "fixed";
    document.body.appendChild(kill_score);

    let zeit = document.createElement("div");
    zeit.id = "zeit";
    zeit.style.width = 30+"%";
    zeit.style.height = 10+"%";
    zeit.style.left = 10+"%";
    zeit.style.top = 0 +"px";
    zeit.style.color = "#b4c829";
    zeit.style.fontSize = 30+"px";
    zeit.innerHTML =  min+":"+sec;
    zeit.style.position = "fixed";
    document.body.appendChild(zeit);
    zeit_i = setInterval(countdown, 1000);
    
    hase_move = setInterval(tick,10);
    


    let foreground = document.createElement("div");
    foreground.id = "foreground";
    foreground.addEventListener("mousemove",function(event){visier(event)});
    foreground.addEventListener("click",function(event){schuss(event)});
    foreground.style.width = 100+"%";
    foreground.style.height = 100+"%";
    foreground.style.left = 0+"px";
    foreground.style.bottom = 100 +"px";
    foreground.style.position = "fixed";
    document.body.appendChild(foreground);

    

     hotbar();
}

function countdown(){
    
    if (sec == 0){
        if(min == 0){
            clearInterval(zeit_i);
            ende();
            
        }else{
        min = min-1;
        sec = sec+60;
        }
        
        
    }else{
    sec = sec-1;
    document.getElementById("zeit").innerHTML = min+":"+sec;
    hasen_spawn();
    }
    
}

function visier(e){
    let x = e.clientX;
    let y = e.clientY;
    let kreis = document.getElementById("kreis");
    kreis.style.left = x-50+"px";
    kreis.style.top = y-50+"px";
    
    
}

function hotbar(){

    let patrone1 = document.createElement("div");
    patrone1.id = "patrone1";
    patrone1.style.width = 20+"px";
    patrone1.style.height = 60+"px";
    patrone1.style.left = 55+"%";
    patrone1.style.bottom = 20 +"px";
    patrone1.style.backgroundImage = "url(resources/patrone.png)";
    patrone1.style.backgroundSize = 20+"px"+" "+60+"px";
    patrone1.style.backgroundRepeat = "no-repeat";
    patrone1.style.position = "fixed";
    document.body.appendChild(patrone1);
    
    let patrone2 = document.createElement("div");
    patrone2.id = "patrone2";
    patrone2.style.width = 20+"px";
    patrone2.style.height = 60+"px";
    patrone2.style.left = 50+"%";
    patrone2.style.bottom = 20 +"px";
    patrone2.style.backgroundImage = "url(resources/patrone.png)";
    patrone2.style.backgroundSize = 20+"px"+" "+60+"px";
    patrone2.style.backgroundRepeat = "no-repeat";
    patrone2.style.position = "fixed";
    document.body.appendChild(patrone2);

    let patrone3 = document.createElement("div");
    patrone3.id = "patrone3";
    patrone3.style.width = 20+"px";
    patrone3.style.height = 60+"px";
    patrone3.style.left = 45+"%";
    patrone3.style.bottom = 20 +"px";
    patrone3.style.backgroundImage = "url(resources/patrone.png)";
    patrone3.style.backgroundRepeat = "no-repeat";
    patrone3.style.backgroundSize = 20+"px"+" "+60+"px";
    patrone3.style.position = "fixed";
    document.body.appendChild(patrone3);

    let reload = document.createElement("div");
    reload.id = "reload";
    reload.addEventListener("click",function(event){reload_event(event)});
    reload.style.width = 50+"px";
    reload.style.height = 50+"px";
    reload.style.left = 50+"px";
    reload.style.bottom = 25 +"px";
    reload.style.backgroundImage = "url(resources/reload.png)";
    reload.style.backgroundRepeat = "no-repeat";
    reload.style.backgroundSize = 50+"px"+" "+50+"px";
    reload.style.position = "fixed";
    document.body.appendChild(reload);
}

function reload_event(){
    schuss_a = 3;
    for (let i = 1; i <= schuss_a; i++) {
        document.getElementById("patrone"+i).style.backgroundImage = "url(resources/patrone.png)";
    }
}

function schuss(){
    if(schuss_a== 0){

    }else{
        document.getElementById("patrone"+schuss_a).style.backgroundImage = "url(resources/patrone_leer.png)";
        schuss_a--;
        
    }
}

function hasen_spawn(){
    if(h < 4){
    h++;
    h_n++;
    let hase = document.createElement("div");
    hase.id = "hase"+h_n;
    hase.className = "hase";
    hase.addEventListener("mousemove",function(event){visier(event)});
    hase.addEventListener("click",function(event){kill(hase,event)});
    hase.addEventListener("click",function(event){schuss(event)});
    hase.style.width = 50+"px";
    hase.style.height = 50+"px";
    hase.style.left = Math.floor(Math.random()*1200)+"px";
    hase.style.bottom = Math.floor(Math.random()*700)+100+"px";
    hase.style.backgroundImage = "url(resources/hase.png)";
    hase.style.backgroundSize = 50+"px"+" "+50+"px";
    hase.style.backgroundRepeat = "no-repeat";
    hase.style.position = "fixed";
    document.body.appendChild(hase);
    }
}

function kill(hase,event){
    if(schuss_a != 0){
        hase.remove();
        score++;
        h--;
        document.getElementById("kill_score").innerHTML = "Score: "+score;
    }
}

function ende(){
    document.getElementById("wiese").remove();
    document.getElementById("busch1").remove();
    document.getElementById("busch2").remove();
    document.getElementById("loch").remove();
    document.getElementById("mauer").remove();
    document.getElementById("kreis").remove();
    document.getElementById("kill_score").remove();
    document.getElementById("zeit").remove();
    document.getElementById("foreground").remove();
    document.getElementById("patrone1").remove();
    document.getElementById("patrone2").remove();
    document.getElementById("patrone3").remove();
    document.getElementById("reload").remove();
    clearInterval(hase_move);
    

    let retry = document.createElement("div");
    retry.id = "knopf";
    retry.addEventListener("click" , spiel_erneut);
    retry.addEventListener("click" , spiel_start);
    retry.style.height = 125 +"px";
    retry.style.width = 300+"px";
    retry.style.top = 350+"px";
    retry.style.left =700+"px";
    retry.style.backgroundColor = "red";
    retry.style.backgroundImage = "linear-gradient(45deg, rgba(36,0,0,1) 6%, rgba(115,9,10,1) 72%, rgba(121,9,9,1) 100%)";
    retry.style.borderWidth = 10+"px";
    retry.style.borderStyle = "dotted";
    retry.style.borderColor = "yellow";
    retry.style.borderRadius = 20+"px";
    retry.style.position = "fixed";
    retry.innerHTML = "Erneut"
    retry.style.fontSize = 100+"px";
    retry.style.color = "#b4c829";
    retry.style.textAlign = "center";
    document.body.appendChild(retry);

    let endscore = document.createElement("div");
    endscore.id = "endscore";
    endscore.style.height = 125 +"px";
    endscore.style.width = 300+"px";
    endscore.style.top = 50+"px";
    endscore.style.left =700+"px";
    endscore.style.position = "fixed";
    endscore.style.fontSize = 50+"px";
    endscore.style.textAlign = "center";
    endscore.style.color = "#b4c829";
    endscore.innerHTML = "Punkte: "+score;
    document.body.appendChild(endscore);

    let highscore_a = document.createElement("div");
    highscore_a.id = "highscore_a";
    highscore_a.style.height = 125 +"px";
    highscore_a.style.width = 300+"px";
    highscore_a.style.top = 150+"px";
    highscore_a.style.left =700+"px";
    highscore_a.style.position = "fixed";
    highscore_a.style.fontSize = 50+"px";
    highscore_a.style.textAlign = "center";
    highscore_a.style.color = "#b4c829";
    highscore_a.innerHTML = "Highscore: "+highscore;
    document.body.appendChild(highscore_a);
    let hasen = document.getElementsByClassName("hase");
    let anzal = hasen.length;
    for (let t = 0; t <= anzal; t++) {
        const element = hasen[0];
        element.remove();
    }
    
}

function spiel_erneut(){
    document.getElementById("endscore").remove();
    document.getElementById("highscore_a").remove();
    sec = 0;
    min = 1;
    schuss_a =3;
    h = 0;
    h_n = 0;
    if(highscore < score){
        highscore = score;
    }
    score = 0;
}

function bewegung(hase_id){
        let richtig = false;
        let entfernung = 100;
        let a_hase = document.getElementById(hase_id);
        let left_wert =a_hase.style.left.split("px");
        let bottom_wert =a_hase.style.bottom.split("px");
        let x1 =left_wert[0];
        let y1 =bottom_wert[0];
        let num = Math.floor(Math.random()*6);
        let ergebnis_X= x1;
        let ergebnis_Y= y1;
        switch (num) {
            case 3:
                ergebnis_X= parseFloat(ergebnis_X) + parseFloat(entfernung);
                break;
                
            case 4:
                ergebnis_X= parseFloat(ergebnis_X)+ parseFloat(entfernung);
                ergebnis_Y=parseFloat(ergebnis_Y)+ parseFloat(entfernung);
                break;

            case 0:
                ergebnis_Y=parseFloat(ergebnis_Y)- parseFloat(entfernung);
                ergebnis_X=parseFloat(ergebnis_X)- parseFloat(entfernung);
                break;

            case 1:
                ergebnis_X=parseFloat(ergebnis_X)- parseFloat(entfernung);
                break;

            case 2:
                ergebnis_X=parseFloat(ergebnis_X)- parseFloat(entfernung);
                ergebnis_Y=parseFloat(ergebnis_Y)+ parseFloat(entfernung);
                break;

            case 5:
                ergebnis_X=parseFloat(ergebnis_X)+ parseFloat(entfernung);
                ergebnis_Y=parseFloat(ergebnis_Y)- parseFloat(entfernung);
                break;
        
            default:
                break;
        }

        if (ergebnis_X >0) {
            if(ergebnis_X<1200){
                richtig = true;
            }
        }
        if (ergebnis_Y >100) {
            if(ergebnis_Y<700){
                richtig = true;
            }
        }
        
        if(richtig== true){
            return ergebnis_X +";"+ ergebnis_Y +";"+ hase_id +";"+ x1 +";"+ y1;
        }
}


function tick(){
    if (lauft == false){
        let hasen = document.getElementsByClassName("hase");
        let hase_random = hasen[Math.floor(Math.random()*hasen.length)]
        let ziel_raw = bewegung(hase_random.id).split(";");
        ziel_x = ziel_raw[0];
        ziel_y = ziel_raw[1];
        hase_random_id = ziel_raw[2];
        start_x = ziel_raw[3];
        start_y = ziel_raw[4];
        standort = start_x;
        lauft = true;
    }else{
    let hoehe = 0.05;
    let p;
    let q;
    let ergebins_1 =parseFloat( start_y-start_x**2);
    let ergebins_2 =parseFloat(ziel_y-ziel_x**2);
    let ergebins_3 = parseFloat(ergebins_1-ergebins_2);
    let ergebins_4 = parseFloat(start_x-ziel_x);
    p = parseFloat(ergebins_3/ergebins_4);
    q= parseFloat((start_x**2+start_x*p-start_y)/-1);
    let y = parseFloat(hoehe*(standort**2+p*standort+q)*-1+start_y*(1+hoehe));
    

    let neupos= document.getElementById(hase_random_id);
    if (neupos == null){
        lauft = false;
    }else{
    neupos.style.left=standort+"px";
    neupos.style.bottom=y+"px";
    if(start_x < ziel_x){
        if(standort >= ziel_x){
            lauft = false;
        }
        standort++;
    }else{
        if(standort <= ziel_x){
            lauft = false;
        }
        standort--;
    }
    }

    }
    
}
