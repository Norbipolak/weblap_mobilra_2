/*
Csináltunk egy div-et ami megkapott egy class container-xl-t és még kapott egy p-xl-t 
Ebben van egy grid-col-2-es div és mivel a container-nek van egy padding-je, ezért ez nem tökéletesen ebbe lesz bent 
hanem egy mindenhol annyival bejebb a container-ben mint a padding-nek a nagysága!!!!!!! 

A grid-col-2-ben van ugye kér div 
Az elsőben lesz egy div, image-holder-class-val és ebben van egy img, mivel az image-holder img az background-size: 100% ezért teljesen kitölti 
azt a részt és nem lesz rés a grid-col-2-ben lévő 2 div-ben, a második div-ben pedig rakunk szövegeket, attól fűggően, hogy milyen nagyságuak 
ezek h1,2,3,4-esek vagy ha hosszabb akkor p, de ezeknek csak top-bottom padding-jeik vannak 
Ezért ha azt szeretnénk, hogy eltávolodjon a kép és a szövegek egymástól kell adni egy grid-gap-et!!!!!!!!!!!!

2-dik div-ben a szövegek mellett vannak még select-mezők, ezeknek adunk class-t és megformázzuk őket pl. mint egy button-t

input:focus, button:focus, select:focus {
    outline: 0;
}
Ezeket azért csináljuk, mert alapból, ezek a dolgok, ha focus-ban vannak, tehát bele van kattintva, ezek kapnak egy fekete border-t
és mi ezt nem szeretnénk, ezért van ez az outline: 0; !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

.select-input-ot, amit kapott a select azt megformázzuk az inputs.css-ben 
.select-input {
    border: 1px solid #d0d0d0;
    padding: 8px 15px;
    font-size: 20px;  
}
hasonló, mint a .text-input, csak itt nincsen background-color, mert ennek fehér a select-nek a belseje 

fontos!!!!!!!!!!!!!!!!
ha van egy input mezőnk, ami type="number", és azt szeretnénk, hogy ennek az értéke 1-től induljon, akkor van egy olyan attributum az inputnál, 
hogy min és ezt be tudjuk állítani nullára, ez ha mondjuk ternékeket akarunk eladni ez jó 
-> 
<input type="number" class="number-input" min="1">
<input type="number" class="select-input" value="1" style="width: 60px;">

ha meg azt akarjuk, hogy a kezdőérték legyen 1, akkor megadhatunk neki egy value 1-et is, de a min-vel is 1 lesz a kezdőérték 

<a>Clear</a>
hogyha, ennek az a-nak megadnánk egy href-et akkor megváltozna a színe és kapna egy alúlvonást 
nagyon, fontos, hogy ez nem csak arra jó, hogy átvigyen minket egy másik oldalra a href
hanem pl. href="#section"
ha így van megadva, akkor ha rákattintunk a link-re, akkor oda fog minket vinne ugyanazon a weboldalon, aminek meg van adva html-ben 
az id section!!!!!!!!!!!!!!!!!!!!!!

ha egy google map-ot szeretnénk belerakni a weboldalunk-ba, akkor az meg iframe-vel kell!!!!!!!
->
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.2690257800617!2d-122.41991
608467311!3d37.77492957975787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e5b6e3d25a5%
3A0x40202b2ad71b400!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1649272200250!5m2!1sen!2sus"
width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>

Mire jó még az iframe, fontos!!!!! elmagyarazas2!!!!!!!!!!!!!!!
**********
így néz ki most a html
<div class="container-xl p-xl">
        <div class="grid-col-2 gap-xl">
            <div class="img-holder">
                <img src="images/coffee-bag-01-600x839.jpg">
            </div>

            <div>
                <h1>Columbia Dark Roast</h1>
                <h3>$19.00 - $27.00</h3>

                <h4>NOTES</h4>
                <p>
                    Earthy - Chocolate - Blackberry - Cherry 
                </p>

                <h5>SIZE</h5>
                <select class="select-input">
                    <option>Choose an option</option>
                    <option>500 g</option>
                    <option>800 g</option>
                </select>

                <h5>ROAST</h5>
                <select class="select-input">
                    <option>Whole Bean</option>
                    <option>Mild Roast</option>
                    <option>Dark Roast</option>
                </select>

                <div class="divider height-20"></div>

                <a>Clear</a>

                <div class="divider height-20"></div>

                <input type="number" class="select-input" value="1" style="width: 60px;">

                <div class="divider height-20"></div>

                <button class="black-btn uppercase">add to cart</button>
            </div>
        </div>
    </div>

fontos, hogy azért használtunk ilyen sok divider-t, mert amugy bemennének az input mező, button stb egymás mellé, mi meg azt szeretnénk 
hogy ezek egymás alatt legyenek 
divider az ugye clear: both meg mindig adtunk neki egy height-20-at, hogy legyen egy kis hely az elemek között!!!!!

most jön az a rész, amikor van egy addiotional information, ami alá van húzva 
alatta meg pár dolog így 

                                                            ADDITIONAL INFORMATION
                                                          ---------------------------

                        SIZE                                        ROAST                                   HARVEST 
                     500g, 800g                              Whole Bean, Mild Roast stb.                 October - December 

                      COUNTRY                                      REGION                                   ALTITUDE
                     Ethiopian                                     valami                                    valami

és ez már egy külön részben van szóval, ennek is csinálunk egy container-xl-t, ami végig legyen center-text!! 
a két container közé is tettük egy <div class="container-xl center-text"> hogy elkülönöljenek egymástól 

az az érdekes, hogyan csináljuk meg ezt az aláhúzást, de ez lehet simán egy text-decoration: underline 
    <div class="container-xl center-text">
        <h3 class="uppercase underline">Additional information</h3>
    </div>

settings-ben csináltunk egy 
.underline {
    text-decoration: underline;
}

de ez nem teljesen jó, mert az oldalon ott kicsit hosszabb vonal az underline meg csak addig húzza alá ameddig a szöveg van 
weboldal, meg még az hogy ne olyan közel legyen a vonal, hanem messzebb a szövegtől 
-> 
  ADDITIONAL INFORMATION
---------------------------
nekünk az underline-val 
-> 
ADDITIONAL INFORMATION
----------------------
lehetne egy border-bottom-vel 
.underline {
    border-bottom: 1px solid black;
}
de így meg az a probléma, hogy egészet aláhúzza, ugye ez az additional information ez középen van 
                                                    ADDITIONAL INFORMATION
--------------------------------------------------------------------------------------------------------------------------------
úgy van a honlapon megcsinálva, hogy ez egy ul belüli li lesz nem pedig egy h3-as tag 
<div class="container-xl center-text">
    <ul>
        <li>Additional information</li>
    </ul>
</div>
csinálunk az ul-nek egy olyan class-t, hogy underline-ul és az azon belüli li-nek megadtuk a következőket 
.underline-ul li{
    border-bottom: 2px solid black;
    max-width: 300px;
    list-style: none;
}
így alá lett húzva, de a max-width miatt már nem középen van, mert ugye adtunk neki egy width-et 
de ezt meg középre tudjuk tenni azzal, hogy margin: auto;!!!!!!!!! 
és még azt is meg tudjuk csinálni, hogy a vonal kicsit távolabb kerüljön a szövegtől, hogy adunk neki egy height-ot és egy line-heightot 
a szöveg középre kerül vertikálisan és a border-bottom meg a legalján lesz 
.underline-ul li{
    border-bottom: 2px solid black;
    max-width: 220px;
    list-style: none;
    margin: auto;
    height: 35px;
    line-height: 35px;
}

az ilyen design-elem az csak ezzel a mérettel fog müködni, mert azért van ez a max-width-je, hogy a szövegnek megfelelő szélességű legyen 
fontos itt 
vertikálisan középre helyezés - height, line height 
horizontálisan középre helyezés - margin 
alehetőségek, hogy lehet egy elemet vertikálisan és horizontálisan is középre helyezni elmagyarazas_2!!!!!!!!!!!!

    <div class="divider height-80"></div>

    <div class="container-xl center-text">
        <ul class="underline-ul">
            <li>Additional information</li>
        </ul>
    </div>

    <div class="divider height-80"></div>

    de amugy ezt az egész dolgot meg lehetett vonal úgy csinálni, hogy egy h3-as tag-ben van nem ul li-ben 
    ->
    <div class="container-xl center-text">
    <h3 class="underline-h3">Additional information</h3>
</div>
.underline-h3 {
    border-bottom: 2px solid black;
    max-width: 220px;
    margin: auto;
    height: 35px;
    line-height: 35px;
    text-align: center; 
}

*****************************
Ez alatt van egy szürke vonal 
.light-grey-line {
    border-bottom: 1px solid var(--light-grey);
}
csak majd kell divider-hogy legyen ott is hely az additional information után 
    <div class="container-xl center-text">
        <ul class="underline-ul">
            <li>Additional information</li>
        </ul>

        <div class="divider height-20"></div>

        <div class="light-grey-line"></div>
    </div>

szóval így tudunk csinálni egy sima vonalt, hogy egy div ami ugye felveszi a teljes szélességet és annak megadunk egy class-ban 
egy border-bottom-ot, ami jelen esetben egy szürke vonal var(--light-grey)
.light-grey-line {
    border-bottom: 1px solid var(--light-grey);
    margin: 20px 0;
}
ha ennek van egy marrgin-ja akkor nem kell a divider!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    <div class="divider height-80"></div>

    <div class="container-xl center-text">
        <ul class="underline-ul">
            <li>Additional information</li>
        </ul>

        <div class="light-grey-line"></div>
    </div>

Ezután van egy grid-col-3, azoknak a dolgoknak ami felül írtam, size roast harvest stb meg alatta country region altitude 
        <div class="grid-col-3">
            <div>
                <h4 class="uppercase">size</h4>
                500g, 800g
            </div>
            <div>
                <h4 class="uppercase">roast</h4>
                Whole Bean, Mild Roast, Dark Roast
            </div>
            <div>
                <h4 class="uppercase">harvest</h4>
                October - December
            </div>

            <div>
                <h4 class="uppercase">country</h4>
                Ethiopian 
            </div>
            <div>
                <h4 class="uppercase">region</h4>
                Halo Beriti Woreda, Gadeb District 
            </div>
            <div>
                <h4 class="uppercase">altitude</h4>
                1800-2200 meters
            </div>
        </div>
    </div>

ha nem lenne benne egy h4-esbe akkor azok a dolgok ugye egymás melett lennének
<div>
    altitude
    1800-2200 meters
</div>

de mi azt akarjuk, hogy két sorban ezért kell így 
->
            <div>
                <h4 class="uppercase">altitude</h4>
                1800-2200 meters
            </div>

És akkor így ugyanugy néz ki, mint az oldalon csak annyi, hogy a karaktereknek, amik nem a h4-esek, azoknak nem fekete a színük hanem szürke 
viszont csak ugy tudjuk megcsináni, hogy ezt be kell rakni egy p-be és annak adni egy class-t 

        <div class="grid-col-3">
            <div>
                <h4 class="uppercase">size</h4>
                <p class="color-dark-grey">
                    500g, 800g
                </p>
            </div>
            <div>
                <h4 class="uppercase">roast</h4>
                <p class="color-dark-grey">
                    Whole Bean, Mild Roast, Dark Roast
                </p>
            </div>
            <div>
                <h4 class="uppercase">harvest</h4>
                <p class="color-dark-grey">
                    October - December
                </p>
            </div>

            <div>
                <h4 class="uppercase">country</h4>
                <p class="color-dark-grey">
                    Ethiopian 
                </p>
            </div>
            <div>
                <h4 class="uppercase">region</h4>
                <p class="color-dark-grey">
                    Halo Beriti Woreda, Gadeb District
                </p> 
            </div>
            <div>
                <h4 class="uppercase">altitude</h4>
                <p class="color-dark-grey">
                    1800-2200 meters
                </p>
            </div>
        </div>
    </div>

és ezzel, hogy beleraktuk egy p-be automatikusan kapott egy kis padding-et is
********************
a következő dolog az egy négyoszthatós grid lesz, csak még annyi, hogy felette van valami kiírva egy h3-ba 
de mindenekelőtt csinálunk egy container-t 

<div class="container-xl">
<h3 class="uppercase center-text">Related Products</h3>

<div class="grid-col-4"></div>
</div>
a related products az középen van, ezért kell a center-text és nagybetűs, ezért kell az uppercase class!!
ez az egész nagyon hasonló, mint a index-html-en a negyoszthatós grid, azokban vannak képek 
alatta meg van szöveg és ha fölémegyünk a képnek, akkor megjelenik a selected-options

ez teljesen ugyanaz csak más termékekkel, bemásoljuk index-ről 
->

    <div class="container-xl">
        <h3 class="uppercase center-text">Related Products</h3>

        <div class="grid-col-4 gap-md">
            <div class="coffee-bag center-text">
                <div class="img-holder">
                    <img src="images/coffee-bag-01-600x839.jpg">
                </div>
                <div class="coffee-information">
                    <h4>Columbia Dark Roast</h4>
                    <div>$19 - $27</div>
                    <div class="select-options font-lg color-light-brown">
                        Select Options
                    </div>
                </div>
            </div>
            <div class="coffee-bag center-text">
                <div class="img-holder">
                    <img src="images/coffee-bag-02-600x839.jpg">
                </div>
                <div class="coffee-information">
                    <h4>Swiss Decaf Coffee</h4>
                    <div>$19 - $27</div>
                    <div class="select-options font-lg color-light-brown">
                        Select Options
                    </div>
                </div>
            </div>
            <div class="coffee-bag center-text">
                <div class="img-holder">
                    <img src="images/coffee-bag-03-600x839.jpg">
                </div>
                <div class="coffee-information">
                    <h4>French Roast</h4>
                    <div>$19 - $27</div>
                    <div class="select-options font-lg color-light-brown">
                        Select Options
                    </div>
                </div>
            </div>
            <div class="coffee-bag center-text">
                <div class="img-holder">
                    <img src="images/coffee-04-600x839.jpg">
                </div>
                <div class="coffee-information">
                    <h4>Breakfast Blend</h4>
                    <div>$19 - $27</div>
                    <div class="select-options font-lg color-light-brown">
                        Select Options
                    </div>
                </div>
            </div>
        </div>
    </div>

csak annyi, hogy az oldalon más képek vannak 
megnézzük, hogy néz ki mobilnézetben 
- az első dolog, hogy amikor felül van egy kétoszthatós grid, akkor ami a második divben vannak szövegek meg button, select, input 
az ha húzzuk befele, akkor nem megy össze, nem úgy mint a másikfelében levő kép, mert az egy div-ben van, és akkor az összemegy 
-> 
erre megoldás, hogy majd valamilyen px képszélességnél a 2-es grid bemegy majd 1-esbe 
és akkor a kép alatt lesz majd a szöveg stb. meg itt majd középre helyezünk mindent 
ezt a grid.css-ben csináljuk a media screen-vel, ahol már csináltunk ilyeneket másik grid-ekre 

@media screen and (max-width: 720px) {
    .mobile-center {
        text-align: center;
    }

    .grid-col-2 {
        grid-template-columns: 1fr;
    }

    .grid-col-4 {
        grid-template-columns: 1fr;
    }

    .grid-col-3 {
        grid-template-columns: 1fr;
    }
}

a két felső dolgot csináltuk 
a grid bemegy 720px-nél egyoszthattóba 
és lehet olyat csinálni, hogy ide a media screen-be csinálunk egy class-t, ami majd csak 720px-nél fog elkészülni az osztály 
tehát, ha annál kisebb akkor bemennek a dolgok középre 
és akkor megadjuk a grid-col-2-ben lévő második div-nek ezt a class-t!!!!!!!!!!!!!!!!!!!!!

<div class="mobile-center">
                <h1>Columbia Dark Roast</h1>
                <h3>$19.00 - $27.00</h3>

                <h4>NOTES</h4>
                <p>
                    Earthy - Chocolate - Blackberry - Cherry 
                </p>

                <h5>SIZE</h5>
                <select class="select-input">
                    <option>Choose an option</option>
                    <option>500 g</option>
                    <option>800 g</option>
                </select>

                <h5>ROAST</h5>
                <select class="select-input">
                    <option>Whole Bean</option>
                    <option>Mild Roast</option>
                    <option>Dark Roast</option>
                </select>

                <div class="divider height-20"></div>

                <a>Clear</a>

                <div class="divider height-20"></div>

                <input type="number" class="select-input" value="1" style="width: 60px;">

                <div class="divider height-20"></div>

                <button class="black-btn uppercase">add to cart</button>
            </div>
****************************************************
Hogy van, amikor rámegyünk ezekre a dolgokra itt kicsit feljebb a négyoszthatós grid-nél a .coffee-bag-re 
<div class="coffee-bag center-text">
    <div class="img-holder">
        <img src="images/coffee-04-600x839.jpg">
    </div>
    <div class="coffee-information">
        <h4>Breakfast Blend</h4>
        <div>$19 - $27</div>
        <div class="select-options font-lg color-light-brown">
            Select Options
        </div>

.coffee-bag {
    cursor: pointer;
    position: relative;
}

.coffee-bag:hover, .select-options {
    opacity: 1;
    bottom: 0px; 

    meg akkor így fog feljebb jönni a select-options-ös dolog, hogy az opacity 0-ból lesz 1 
    meg a bottom -10px-ből lesz nulla!!!!! 
    és ez akkor lesz, hogyha felé megyünk a coffee-bag felé megyünk ahol a kép van akkor jelenik meg alul a select options!!!! 
}
.select-options {
    opacity: 0;
    transition: all 0.5 ease;
    position: absolute;
    bottom: -10px;
    left: 0;
    right: 0;
    margin: auto;
}
.coffee-information {
    height: 80px;
}

A coffee-bag-en belül van egy ilyen tag-ünk (div) ami megkapta a select-options class-t és hogyha a coffee-bag felé visszük a kurzort, akkor 
ennek a select option-nek 1 lesz az opacity-je egyébként pedig alapból nulla 
.coffee-bag:hover, .select-options
Ez azt jelenti, hogyha a coffee-bag felé visszük a kurzort akkor a select-option-nel csinál valamit!!!!!!!!!!!
.coffee-bag:hover
így ugye simán a coffee-bag-vel csinálna valamit!!!! 
ha meg ott van mögötte a class, mint itt a .select-option akkor meg azzal 
fontos még 
alapból az select-option-nek a bottom: -10px volt és nullára megy fel ezért jön lentről felfele!!!!!!!!!!!!!!!!!!!!!!
****************************************************************************************************************
megcsináljuk ezeket amiket csináltunk css-ben scss-ben is!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*/ 