var augmenter = document.getElementById('augmenter');
var couleur_vert = document.getElementById('coleur_en_vert');
var couleur_bleu = document.getElementById('couleur_de_base');
var masquer = document.getElementById('masquer_triangle');
var afficher = document.getElementById('afficher_le_triangle');
var rectangles = document.getElementById('rectangle');
var widths = 100;


augmenter.addEventListener('click', function(){
    widths += 10;
    rectangles.style.width = widths+'px';
    rectangles.style.height = widths+'px';
    console.log(widths);
    if( widths == 300)
    {
       alert("Vous avez atteint 300 px le triangle se redimentionne ");
       rectangles.style.width = '100px';
       rectangles.style.height ='100px';
    }
});

couleur_vert.addEventListener('click',function (){
    rectangles.style.backgroundColor = "#008000";
});

couleur_bleu.addEventListener('click',function () {
    rectangles.style.backgroundColor = "rgb(0,0,255)";
});

masquer.addEventListener('click', function(){
    rectangle.style.visibility = "hidden";
});

afficher.addEventListener('click', function(){
    rectangle.style.visibility = "visible";
});