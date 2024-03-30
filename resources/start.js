let sec = 0;
let min = 1;
let schuss_a =3;
let h = 0;
let h_n = 0;
let score = 0;
let heigscor = 0;
let zeit_i;
let lauft = false;
let ziel_x=0;
let ziel_y=0;
let start_x=0;
let start_y=0;
let hase_ausge;
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
    start_button.id = "konpf";
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
    
    let der_knopf =document.getElementById("konpf");
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

    let keirsi = document.createElement("div");
     keirsi.id = "kreis"
    keirsi.style.height = 100+"px";
    keirsi.style.width =100 +"px";
    keirsi.style.position = "fixed";
    keirsi.style.borderRadius = 50+"%";
    keirsi.style.borderWidth = 10+"px";
    keirsi.style.borderStyle = "solid";
    keirsi.style.borderColor = "red";

    document.body.appendChild(keirsi);

    let kill_scor = document.createElement("div");
    kill_scor.id = "kill_scor";
    kill_scor.style.width = 30+"%";
    kill_scor.style.height = 10+"%";
    kill_scor.style.right = 0+"px";
    kill_scor.style.top = 0 +"px";
    kill_scor.style.color = "#b4c829";
    kill_scor.style.fontSize = 30+"px";
    kill_scor.innerHTML =  "Score: "+score;
    kill_scor.style.position = "fixed";
    document.body.appendChild(kill_scor);

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
    zeit_i = setInterval(zeitt, 1000);
    
    hase_move = setInterval(tick,10);
    


    let forground = document.createElement("div");
    forground.id = "forground";
    forground.addEventListener("mousemove",function(event){visir(event)});
    forground.addEventListener("click",function(event){schuss(event)});
    forground.style.width = 100+"%";
    forground.style.height = 100+"%";
    forground.style.left = 0+"px";
    forground.style.bottom = 100 +"px";
    forground.style.position = "fixed";
    document.body.appendChild(forground);

    

     hotbar();
}

function zeitt(){
    
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

function visir(e){
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

    let relod = document.createElement("div");
    relod.id = "relod";
    relod.addEventListener("click",function(event){reloaden(event)});
    relod.style.width = 50+"px";
    relod.style.height = 50+"px";
    relod.style.left = 50+"px";
    relod.style.bottom = 25 +"px";
    relod.style.backgroundImage = "url(resources/reload.png)";
    relod.style.backgroundRepeat = "no-repeat";
    relod.style.backgroundSize = 50+"px"+" "+50+"px";
    relod.style.position = "fixed";
    document.body.appendChild(relod);
}

function reloaden(){
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
    hase.addEventListener("mousemove",function(event){visir(event)});
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
        document.getElementById("kill_scor").innerHTML = "Score: "+score;
    }
}

function ende(){
    document.getElementById("wiese").remove();
    document.getElementById("busch1").remove();
    document.getElementById("busch2").remove();
    document.getElementById("loch").remove();
    document.getElementById("mauer").remove();
    document.getElementById("kreis").remove();
    document.getElementById("kill_scor").remove();
    document.getElementById("zeit").remove();
    document.getElementById("forground").remove();
    document.getElementById("patrone1").remove();
    document.getElementById("patrone2").remove();
    document.getElementById("patrone3").remove();
    document.getElementById("relod").remove();
    clearInterval(hase_move);
    

    let Erneut_button = document.createElement("div");
    Erneut_button.id = "konpf";
    Erneut_button.addEventListener("click" , spiel_erneut);
    Erneut_button.addEventListener("click" , spiel_start);
    Erneut_button.style.height = 125 +"px";
    Erneut_button.style.width = 300+"px";
    Erneut_button.style.top = 350+"px";
    Erneut_button.style.left =700+"px";
    Erneut_button.style.backgroundColor = "red";
    Erneut_button.style.backgroundImage = "linear-gradient(45deg, rgba(36,0,0,1) 6%, rgba(115,9,10,1) 72%, rgba(121,9,9,1) 100%)";
    Erneut_button.style.borderWidth = 10+"px";
    Erneut_button.style.borderStyle = "dotted";
    Erneut_button.style.borderColor = "yellow";
    Erneut_button.style.borderRadius = 20+"px";
    Erneut_button.style.position = "fixed";
    Erneut_button.innerHTML = "Erneut"
    Erneut_button.style.fontSize = 100+"px";
    Erneut_button.style.color = "#b4c829";
    Erneut_button.style.textAlign = "center";
    document.body.appendChild(Erneut_button);

    let entscor = document.createElement("div");
    entscor.id = "entscor";
    entscor.style.height = 125 +"px";
    entscor.style.width = 300+"px";
    entscor.style.top = 50+"px";
    entscor.style.left =700+"px";
    entscor.style.position = "fixed";
    entscor.style.fontSize = 50+"px";
    entscor.style.textAlign = "center";
    entscor.style.color = "#b4c829";
    entscor.innerHTML = "Punkte: "+score;
    document.body.appendChild(entscor);

    let heigscor_a = document.createElement("div");
    heigscor_a.id = "heigscor_a";
    heigscor_a.style.height = 125 +"px";
    heigscor_a.style.width = 300+"px";
    heigscor_a.style.top = 150+"px";
    heigscor_a.style.left =700+"px";
    heigscor_a.style.position = "fixed";
    heigscor_a.style.fontSize = 50+"px";
    heigscor_a.style.textAlign = "center";
    heigscor_a.style.color = "#b4c829";
    heigscor_a.innerHTML = "Heigscor: "+heigscor;
    document.body.appendChild(heigscor_a);
    let has_ub = document.getElementsByClassName("hase");
    let anzal = has_ub.length;
    for (let t = 0; t <= anzal; t++) {
        const element = has_ub[0];
        element.remove();
    }
    
}

function spiel_erneut(){
    document.getElementById("entscor").remove();
    document.getElementById("heigscor_a").remove();
    sec = 0;
    min = 1;
    schuss_a =3;
    h = 0;
    h_n = 0;
    if(heigscor < score){
        heigscor= score;
    }
    score = 0;
}

function bewegung(hase_id){
        let richtig = false;
        let enfenrung =100;
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
                ergebnis_X= parseFloat(ergebnis_X) + parseFloat(enfenrung);
                break;
            case 4:
                ergebnis_X= parseFloat(ergebnis_X)+ parseFloat(enfenrung);
                ergebnis_Y=parseFloat(ergebnis_Y)+ parseFloat(enfenrung);
                break;

            // case 2:
            //     ergebnis_Y=parseFloat(ergebnis_Y)- parseFloat(enfenrung);
            //     break;

            case 0:
                ergebnis_Y=parseFloat(ergebnis_Y)- parseFloat(enfenrung);
                ergebnis_X=parseFloat(ergebnis_X)- parseFloat(enfenrung);
                break;

            case 1:
                ergebnis_X=parseFloat(ergebnis_X)- parseFloat(enfenrung);
                break;

            case 2:
                ergebnis_X=parseFloat(ergebnis_X)- parseFloat(enfenrung);
                ergebnis_Y=parseFloat(ergebnis_Y)+ parseFloat(enfenrung);
                break;

            // case 6:
            //     ergebnis_Y=parseFloat(ergebnis_Y)+ parseFloat(enfenrung);
            //     break;

            case 5:
                ergebnis_X=parseFloat(ergebnis_X)+ parseFloat(enfenrung);
                ergebnis_Y=parseFloat(ergebnis_Y)- parseFloat(enfenrung);
                break;
        
            default:
                break;
        }
        // if (x1<0 ){
        //     a_hase.style.left = 50+"px";
        // }
        // if(x1>1200){
        //     a_hase.style.left = 1150+"px";
        // }
        // if(y1>700){
        //     a_hase.style.bottom = 650+"px";
        // }
        // if(y1<100){
        //     a_hase.style.bottom = 150+"px";
        // }
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
            return ergebnis_X+";"+ergebnis_Y+";"+hase_id+";"+x1+";"+y1;
        }
}

function tick(){
    if (lauft == false){
        let has_ub = document.getElementsByClassName("hase");
        let hasenpl =has_ub[Math.floor(Math.random()*has_ub.length)]
        let zeil =bewegung(hasenpl.id).split(";");
        ziel_x = zeil[0];
        ziel_y = zeil[1];
        hase_ausge = zeil[2];
        start_x = zeil[3];
        start_y = zeil[4];
        standort = start_x;
        lauft = true;
    }else{
    let hohe = 0.05;
    let p;
    let q;
    let ergebins_1 =parseFloat( start_y-start_x**2);
    let ergebins_2 =parseFloat(ziel_y-ziel_x**2);
    let ergebins_3 = parseFloat(ergebins_1-ergebins_2);
    let ergebins_4 = parseFloat(start_x-ziel_x);
    p = parseFloat(ergebins_3/ergebins_4);
    q= parseFloat((start_x**2+start_x*p-start_y)/-1);
    let y = parseFloat(hohe*(standort**2+p*standort+q)*-1+start_y*(1+hohe));
    

    let neupos= document.getElementById(hase_ausge);
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
