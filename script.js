window.addEventListener("load", startGame);

let liv
//let point???

function startGame() {
    console.log("startGame");
    //---------remove forrige listeners-------//
    document.querySelector("#go_sprite").removeEventListener("click", startGame);
    document.querySelector("#restart_sprite").removeEventListener("click", startGame);
    //----add skjul
    document.querySelector("#intro").classList.add("skjul");

    //---add skjul win
    document.querySelector("#win").classList.add("skjul");
    //---add skjul game_over
    document.querySelector("#game_over").classList.add("skjul");
    //---remove skjul game og start
    document.querySelector("#game").classList.remove("skjul");
    document.querySelector("#start").classList.remove("skjul");
    //TODO--------Vis startskærm
    //TODO--------Start spilmusik
    //--------Play knap

    //---------Trans------------------//
    //---------klik play--->velKommen
    document.querySelector("#startknap_sprite").addEventListener("click", velKommen);

}

function velKommen() {
    console.log("VelKommen")

    //---------remove forrige listeners-------//
    document.querySelector("#startknap_sprite").removeEventListener("click", velKommen);

    //---------Add skjul start
    document.querySelector("#start").classList.add("skjul");
    //-------Remove skjul velKommen
    document.querySelector("#velkommen").classList.remove("skjul");
    //--------Vis intro tekst
    //--------Play knap

    //---------Trans------------------//
    //---------klik play--->scene
    document.querySelector("#playknap_sprite").addEventListener("click", sCene);


}

function sCene() {
    console.log("sCene")
    document.querySelector("#baggrund").play();
    //---------remove forrige listeners-------//
    document.querySelector("#playknap_sprite").removeEventListener("click", sCene);

    //---------Add skjul start
    document.querySelector("#velkommen").classList.add("skjul");
    //-------Remove skjul velKommen
    document.querySelector("#scene").classList.remove("skjul");
    //--------Vis intro tekst
    //--------Play animation

    //---------Trans------------------//
    //---------6 sec--->startIntro
    setTimeout(startIntro, 4800);
    //document.querySelector("#playknap2_sprite").addEventListener("click", startIntro);


}

function startIntro() {
    console.log("startIntro")
    document.querySelector("#gasp").play();

    //---------remove forrige listeners-------//
    document.querySelector("#playknap_sprite").removeEventListener("click", startIntro);

    //---------Add skjul velKommen
    document.querySelector("#scene").classList.add("skjul");
    //--------Remove skjul intro
    document.querySelector("#intro").classList.remove("skjul");
    //--------vis Regler
    //--------Vis Intro spg - Vil du hjælpe?
    //--------Nulstil point
    liv = 1;
    //--------Play knap

    //---------Trans------------------//
    //---------klik korrekt--->questOne
    document.querySelector("#jaknap_sprite").addEventListener("click", questOne);
    //---------klik forkert--->youLose
    document.querySelector("#nejknap_sprite").addEventListener("click", youLose);

}



//----------------------------------------------Spørgsmål-------------------------//

//--------------------------------------------One--------------//

function questOne() {
    console.log("questOne")

    //---------remove forrige listeners-------//
    document.querySelector("#jaknap_sprite").removeEventListener("click", questOne);

    //TODO-------Add skjul intro
    document.querySelector("#intro").classList.add("skjul");
    //TODO-------Remove skjul spg
    document.querySelector("#spg").classList.remove("skjul");
    //TODO-------Remove skjul spg_1
    document.querySelector("#spg_1").classList.remove("skjul");

    //---------Trans------------------//
    //---------klik korrekt--->aniOne
    document.querySelector("#svar_nej_sprite_1").addEventListener("click", aniOne);
    //---------klik forkert--->wrongOne
    document.querySelector("#svar_ja_sprite_1").addEventListener("click", wrongOne);

}

function wrongOne() {
    console.log("wrongOne")
    //---------remove forrige listeners-------//
    document.querySelector("#svar_ja_sprite_1").removeEventListener("click", wrongOne);

    liv--
    //TODO--------Buhhh lyd

    //---------Trans------------------//
    //---------if liv>0--->aniOne
    if (liv > 0) {
        aniOne();

    } else {
        youLose();
        console.log("tabte")
    }
    //---------else--->youLose
}

function aniOne() {
    console.log("aniOne")
    //---------remove forrige listeners-------//
    document.querySelector("#svar_nej_sprite_1").removeEventListener("click", aniOne);

    //TODO-----Animation start
    document.querySelector("#julie_sprite_1").classList.add("fade_out");
    //TODO-------Animationend → infoOne
    document.querySelector("#julie_sprite_1").addEventListener("animationend", infoOne);

}

function infoOne() {
    console.log("infoOne")
    //Remove animationend
    document.querySelector("#julie_sprite_1").removeEventListener("animationend", infoOne);
    //Remove fade_out
    document.querySelector("#julie_sprite_1").classList.remove("fade_out");

    //----------Add skjul spg_1
    document.querySelector("#spg_1").classList.add("skjul");
    //-------Remove skjul  info_boks_1
    document.querySelector("#info_boks_1").classList.remove("skjul");


    //---------Trans------------------//
    //-----klik videre--->questTwo
    document.querySelector("#info_sprite_1").addEventListener("click", questTwo);

}

//---------------------------------------Two--------------//

function questTwo() {
    console.log("questTwo")
    //---------remove forrige listeners-------//
    document.querySelector("#info_sprite_1").removeEventListener("click", questTwo);

    //------Add skjul spg_1
    document.querySelector("#info_boks_1").classList.add("skjul");
    //-------Remove skjul spg_2
    document.querySelector("#spg_2").classList.remove("skjul");

    //---------Trans------------------//
    //---------klik korrekt--->aniTwo
    document.querySelector("#svar_ja_sprite_2").addEventListener("click", aniTwo);
    //---------klik forkert--->wrongTwo
    document.querySelector("#svar_nej_sprite_2").addEventListener("click", wrongTwo);

}

function wrongTwo() {
    console.log("wrongTwo")
    //---------remove forrige listeners-------//
    document.querySelector("#svar_nej_sprite_2").removeEventListener("click", wrongTwo);

    liv--
    //TODO--------Buhhh lyd

    //---------Trans------------------//
    //---------if liv>0--->aniTwo------//
    if (liv > 0) {
        aniTwo();

    } else {
        youLose();
        console.log("tabte")
    }
    //---------else--->youLose------//
}

function aniTwo() {
    console.log("aniTwo")
    //---------remove forrige listeners-------//
    document.querySelector("#svar_ja_sprite_2").removeEventListener("click", aniTwo);

    //TODO-----Animation start
    document.querySelector("#julie_sprite_2").classList.add("fade_out");
    //TODO-------Animationend → infoTwo
    document.querySelector("#julie_sprite_2").addEventListener("animationend", infoTwo);
}

function infoTwo() {
    console.log("infoTwo")
    //Remove animationend
    document.querySelector("#julie_sprite_2").removeEventListener("animationend", infoOne);
    //Remove fade_out
    document.querySelector("#julie_sprite_2").classList.remove("fade_out");
    //---------remove forrige listeners-------//
    document.querySelector("#julie_sprite_2").removeEventListener("animationend", infoTwo);

    //----------Add skjul spg_2
    document.querySelector("#spg_2").classList.add("skjul");
    //-------Remove skjul  info_boks_2
    document.querySelector("#info_boks_2").classList.remove("skjul");


    //---------Trans------------------//
    //-----klik videre--->questThree
    document.querySelector("#info_sprite_2").addEventListener("click", questThree);
}


//---------------------------------------------Three--------------//

function questThree() {
    console.log("questThree")
    //---------remove forrige listeners-------//
    document.querySelector("#info_sprite_2").addEventListener("click", questThree);

    //------Add skjul spg_2
    document.querySelector("#info_boks_2").classList.add("skjul");
    //-------Remove skjul spg_3
    document.querySelector("#spg_3").classList.remove("skjul");

    //---------Trans------------------//
    //---------klik korrekt--->aniThree
    document.querySelector("#svar_ja_sprite_3").addEventListener("click", aniThree);
    //---------klik forkert--->wrongThree
    document.querySelector("#svar_nej_sprite_3").addEventListener("click", wrongThree);
}

function wrongThree() {
    console.log("wrongThree")
    //---------remove forrige listeners-------//
    document.querySelector("#svar_nej_sprite_3").removeEventListener("click", wrongThree);

    liv--
    //TODO--------Buhhh lyd

    //---------Trans------------------//
    //---------if liv>0--->aniThree
    if (liv > 0) {
        aniThree();

    } else {
        youLose();
        console.log("tabte")
    }
    //---------else--->youLose
}

function aniThree() {
    console.log("aniThree")
    //---------remove forrige listeners-------//
    document.querySelector("#svar_ja_sprite_3").removeEventListener("click", aniThree);

    //TODO-----Animation start
    document.querySelector("#julie_sprite_3").classList.add("fade_out");
    //TODO-------Animationend → infoThree
    document.querySelector("#julie_sprite_3").addEventListener("animationend", infoThree);
}

function infoThree() {
    console.log("infoThree")
    //Remove animationend
    document.querySelector("#julie_sprite_3").removeEventListener("animationend", infoOne);
    //Remove fade_out
    document.querySelector("#julie_sprite_3").classList.remove("fade_out");
    //---------remove forrige listeners-------//
    document.querySelector("#julie_sprite_3").removeEventListener("animationend", infoThree);
    //----------Add skjul spg_3
    document.querySelector("#spg_3").classList.add("skjul");
    //-------Remove skjul  info_boks_3
    document.querySelector("#info_boks_3").classList.remove("skjul");

    //---------Trans------------------//
    //-----klik videre--->questFour
    document.querySelector("#info_sprite_3").addEventListener("click", questFour);

}

//-----------------------------------------Four--------------//

function questFour() {
    console.log("questFour")
    //---------remove forrige listeners-------//
    document.querySelector("#info_sprite_3").removeEventListener("click", questFour);

    //------Add skjul spg_3
    document.querySelector("#info_boks_3").classList.add("skjul");
    //-------Remove skjul spg_4
    document.querySelector("#spg_4").classList.remove("skjul");

    //---------Trans------------------//
    //---------klik korrekt--->aniFour
    document.querySelector("#svar_ja_sprite_4").addEventListener("click", aniFour);
    //---------klik forkert--->wrongFour
    document.querySelector("#svar_nej_sprite_4").addEventListener("click", wrongFour);

}

function wrongFour() {
    console.log("wrongFour")
    //---------remove forrige listeners-------//
    document.querySelector("#svar_nej_sprite_4").removeEventListener("click", wrongFour);

    liv--
    //TODO--------Buhhh lyd

    //---------Trans------------------//
    //---------if liv>0--->aniFour
    if (liv > 0) {
        aniFour();

    } else {
        youLose();
        console.log("tabte")
    }
    //---------else--->youLose
}

function aniFour() {
    console.log("aniFour")
    //---------remove forrige listeners-------//
    document.querySelector("#svar_ja_sprite_4").removeEventListener("click", aniFour);

    //TODO-----Animation start
    document.querySelector("#julie_sprite_4").classList.add("fade_out");
    //TODO-------Animationend → infoFour
    document.querySelector("#julie_sprite_4").addEventListener("animationend", infoFour);
}

function infoFour() {
    console.log("infoFour")
    //Remove animationend
    document.querySelector("#julie_sprite_4").removeEventListener("animationend", infoOne);
    //Remove fade_out
    document.querySelector("#julie_sprite_4").classList.remove("fade_out");
    //---------remove forrige listeners-------//
    document.querySelector("#julie_sprite_4").removeEventListener("animationend", infoFour);
    //----------Add skjul spg_4
    document.querySelector("#spg_4").classList.add("skjul");
    //-------Remove skjul  info_boks_4
    document.querySelector("#info_boks_4").classList.remove("skjul");


    //---------Trans------------------//
    //-----klik videre--->questFive
    document.querySelector("#info_sprite_4").addEventListener("click", questFive);

}

//-----------------------------------------------Five--------------//

function questFive() {
    console.log("questFive")
    //---------remove forrige listeners-------//

    //------Add skjul spg_4
    document.querySelector("#info_boks_4").classList.add("skjul");
    //-------Remove skjul spg_5
    document.querySelector("#spg_5").classList.remove("skjul");

    //---------Trans------------------//
    //---------klik korrekt--->aniFive
    document.querySelector("#svar_ja_sprite_5").addEventListener("click", aniFive);
    //---------klik forkert--->wrongFive
    document.querySelector("#svar_nej_sprite_5").addEventListener("click", wrongFive);

}

function wrongFive() {
    console.log("wrongFive")
    //---------remove forrige listeners-------//
    document.querySelector("#svar_nej_sprite_5").removeEventListener("click", wrongFive);

    liv--
    //TODO--------Buhhh lyd

    //---------Trans------------------//
    //---------if liv>0--->aniFive
    if (liv > 0) {
        aniFive();

    } else {
        youLose();
        console.log("tabte")
    }
    //---------else--->youLose
}

function aniFive() {
    console.log("aniFive")
    //---------remove forrige listeners-------//
    document.querySelector("#svar_ja_sprite_5").removeEventListener("click", aniFive);

    //TODO-----Animation start
    document.querySelector("#julie_sprite_5").classList.add("fade_out");

    //TODO-------Animationend → infoFive
    document.querySelector("#julie_sprite_5").addEventListener("animationend", infoFive);
}

function infoFive() {
    console.log("infoFive")
    //Remove animationend
    document.querySelector("#julie_sprite_5").removeEventListener("animationend", infoOne);
    //Remove fade_out
    document.querySelector("#julie_sprite_5").classList.remove("fade_out");
    //---------remove forrige listeners-------//
    document.querySelector("#julie_sprite_5").removeEventListener("animationend", infoFive);


    //----------Add skjul spg_5
    document.querySelector("#spg_5").classList.add("skjul");

    //-------Remove skjul  info_boks_5
    document.querySelector("#info_boks_5").classList.remove("skjul");



    //---------Trans------------------//
    //-----klik videre--->questSix
    document.querySelector("#info_sprite_5").addEventListener("click", questSix);


}

//---------------------------------------------Six--------------//

function questSix() {
    console.log("questSix")
    //---------remove forrige listeners-------//
    document.querySelector("#info_sprite_5").removeEventListener("click", questSix);
    //------Add skjul spg_5
    document.querySelector("#info_boks_5").classList.add("skjul");
    //-------Remove skjul spg_6
    document.querySelector("#spg_6").classList.remove("skjul");

    //---------Trans------------------//
    //---------klik korrekt--->aniSix
    document.querySelector("#svar_ja_sprite_6").addEventListener("click", aniSix);

    //---------klik forkert--->wrongSix
    document.querySelector("#svar_nej_sprite_6").addEventListener("click", wrongSix);

}

function wrongSix() {
    console.log("wrongSix")
    //---------remove forrige listeners-------//
    document.querySelector("#svar_nej_sprite_6").addEventListener("click", wrongSix);


    liv--
    //TODO--------Buhhh lyd


    //---------Trans------------------//
    //---------if liv>0--->aniSix
    if (liv > 0) {
        aniSix();

    } else {
        youLose();
        console.log("tabte")
    }
    //---------else--->youLose
}

function aniSix() {
    console.log("aniSix")
    //---------remove forrige listeners-------//
    document.querySelector("#svar_ja_sprite_6").removeEventListener("click", aniSix);

    //TODO-----Animation start
    document.querySelector("#julie_sprite_6").classList.add("fade_out");

    //TODO-------Animationend → infoSix
    document.querySelector("#julie_sprite_6").addEventListener("animationend", youWin);

}

//function infoSix() {
//console.log("infoSix")
//---------remove forrige listeners-------//

//document.querySelector("#julie_sprite_6").removeEventListener("animationend", infoSix);

//----------Add skjul spg_6
//document.querySelector("#spg_6").classList.add("skjul");

//-------Remove skjul  info_boks_6
//document.querySelector("#info_boks_6").classList.remove("skjul");



//---------Trans------------------//
//-----klik videre--->youWin
//document.querySelector("#info_sprite_6").addEventListener("click", youWin);


//}

//---------------------------------------youWin-------------------------//
function youWin() {
    console.log("youWin")
    document.querySelector("#winlyd").play();

    //---------remove forrige listeners-------//
    document.querySelector("#julie_sprite_6").removeEventListener("animationend", youWin);
    //-----Remove fade_out
    document.querySelector("#julie_sprite_6").classList.remove("fade_out");

    //----Add skjul spg_6
    document.querySelector("#spg_6").classList.add("skjul");

    //------Add skjul game
    // document.querySelector("#info_boks_6").classList.add("skjul");

    document.querySelector("#spg").classList.add("skjul");


    //-------Remove skjul win
    document.querySelector("#win").classList.remove("skjul");


    //---------Trans------------------//
    //--------Klik Restart--->startIntro
    document.querySelector("#restart_sprite").addEventListener("click", startGame);
}

//--------------------------------------youLose-------------------------//
function youLose() {
    console.log("youLose")
    document.querySelector("#gameover").play();

    //---------remove forrige listeners-------//
    document.querySelector("#nejknap_sprite").removeEventListener("click", youLose);
    //----Add skjul spg_6
    document.querySelector("#spg_6").classList.add("skjul");
    //----Add skjul spg_5
    document.querySelector("#spg_5").classList.add("skjul");
    //----Add skjul spg_4
    document.querySelector("#spg_4").classList.add("skjul");
    //----Add skjul spg_3
    document.querySelector("#spg_3").classList.add("skjul");
    //----Add skjul spg_2
    document.querySelector("#spg_2").classList.add("skjul");
    //----Add skjul spg_1
    document.querySelector("#spg_1").classList.add("skjul");
    //------Add skjul game
    document.querySelector("#spg").classList.add("skjul");
    //-------Remove skjul game_over
    document.querySelector("#game_over").classList.remove("skjul");

    //---------Trans------------------//
    //--------Klik Restart--->startIntro
    document.querySelector("#go_sprite").addEventListener("click", startGame);
}
