import $ from "jquery";
window.onload = function(){

//Массив для возможных ответов. 
var data = ["Maybe", "Yes", "No", "Try", "I think you do not need", "Can"];
  
//Функция для случайного подбора ответа из масиива.   
function bust(param){
   
  var elem = $(".string");  
  var random = Math.floor((Math.random() * data.length) + 0);
  
  if(param !== "" && monitoring(param)){
    elem.text(data[random]);
    elem.css({"color": "lightgreen"});
    
  }else {
    elem.text( "enter your question please" ); 
    elem.css({"color": "red"});
  }
  
};

var objData = { 
    
    "Hi": "Hello to you",
    "Hi Magic Ball": "Hi User",
    "Who are you?": "I am Magic ball",
    "Are you clever?": "I think yes",
    "What are you can?": "It is good question!I can everything!",
    "What are you answer to me?": "I will be try give ansver to you",
    "Bay": "Good bay!"
    
   
    
};

//Функция для проверки вопросов от пользователя и подбор соответсвующих ответов
function wordTest(word) {
  
    var elem = $(".string");
    var wordToDown = word.toLowerCase();
    
    var arr = Object.keys(objData);
    
    arr.filter(function(everyWord){
       
      var everyWordDown = everyWord.toLowerCase();
    
      if(everyWordDown === wordToDown || confirm( wordToDown, everyWordDown )){
          elem.text(objData[everyWord]);
    }
    
    
    });
};
//Функция позволяет вводить пользователю вопросы без пробела.
 function confirm(wordDown, everyDown) {
     
    var gluingWordDown = wordDown.replace( / /g, "" );
    var gluingEveryDown =  everyDown.replace( / /g, "" );
     
    if(gluingWordDown === gluingEveryDown){
         return true;
    }
     
 }

var arrWrongWords = ["wtf", "fack", "fucking", "damn"];
//Функция для фильтрации цензурных слов
function monitoring(word) {
    
  for(var i = 0; i < arrWrongWords.length;i++){
      if(word.indexOf(arrWrongWords[i]) >= 0){
          return false;
      }
  }
  return true;
}

 //функция для сброса вопроса.
 function reset(){
    
    $("#buttonReset").on("click", function(){
        $("#questions").val("");
    });
     
 };
 reset();
 
//Функция тултип для ввывода подсказок.
 function toolType(param1, param2) {
   
  var createElem = $("<p></p>").text(param2);
    $(param1).on("mousemove", function(event){
        
      $(".tableLeft").append(createElem);
         
       var x = event.pageX / 2;
       var y = event.pageY / 2;
         
       createElem.addClass("tooltype");
       createElem.css({"top": y + -220 + "px", 
                      "left": x + 0 + "px",
                      "visibility": "visible"});
       event.preventDefault();
    });
     
    $(param1).on("mouseout", function(){
        createElem.css({"visibility": "hidden"});
    });
 };
 
  var ball = $(".ball");
  var str = "The Magic Ball";
  
  var questions = $("#questions");
  var str1 = "Question entry field";
  
  var slider = $(".slider");
  var str2 = "The colors of the ball";
 
  toolType( ball, str );
  toolType( questions, str1 );
  toolType( slider, str2 );
 
 
//Двигаем треугольник по клику и скрываем треугольник по таймеру.
function moveDelta(elem) {
  var time;
   
    $(elem).on("click", function(){
       
       var str = $("#questions").val();
       bust( str );
       wordTest( str );
       
       var elem = $(".delta").animate({left: "13px"}, 2000, function(){
           
            elem.addClass( "addClass1" );
            
        });
        elem.removeClass( "addClass1" );
        time = setTimeout( interval, 12000 );
       
    });
    clearTimeout( time );
      
}  
var button = $("#button");
moveDelta(button);

//Двигаем треугольник по клику из клавиатуры (Enter) 
function moveDeltaKeyDown(elem){
  var time;
   
    $(elem).on("keydown", function(e){
        
       if(e.keyCode === 13){
       var str = $("#questions").val();
       bust( str );
       wordTest( str );
       
       var elem = $(".delta").animate({left: "13px"}, 2000, function(){
           
          elem.addClass( "addClass1" );
            
        });
        elem.removeClass( "addClass1" );
        time = setTimeout( interval, 12000 );
      }
    });
    
    clearTimeout( time );
    
}

var body = $("body");
moveDeltaKeyDown(body);


//Функция-интервал для скрытия треугоника.
function interval() {
    
    $(".delta").animate({left: "-200px"}, 2000, function(){
       //Функция callback для установки треугольника в исходящее положение.
       $(".delta").css({"left": "220px"});
    });
}

function enterColor() {
  
  var img = $("img");
   
    img.on("click", function(){
    var color = $(this).attr("alt");
    console.log(color);
       
    $(".ball").css({"background-color": color });
       
    });
    
};
enterColor();

};