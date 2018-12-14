var win = 0;
var losses = 0;
var math = randomMath();
// var math = 

    function randomMath() {
        return Math.floor(Math.random() * (75)) + 25;
    }
    function moreMath() {
        return Math.floor(Math.random() * (19)) + 1;
    }

$("#number-to-guess").text(math);



var counter = 0;
var numberOptions = [moreMath(), moreMath(), moreMath(), moreMath()];
for (var i = 0; i < numberOptions.length; i++){
    
    var imageAarnost = $("<img>");

    imageAarnost.addClass("aarnostImg");

    imageAarnost.attr("src", "assets/images/Aarnost.png");


    imageAarnost.attr("data-aarnostvalue", numberOptions[i]);

    $("#halflings").append(imageAarnost);
}

$(".aarnostImg").on("click", function(){

    var aarnostValue =($(this).attr("data-aarnostvalue"));
    aarnostValue = parseInt(aarnostValue);

  counter += aarnostValue;
    $("#height").text(counter);
    // alert("The halflings are " + counter + " tall!");

        if (counter === math) {
            win++;
            alert ("You open the door, THERE IS ANOTHER DOOR!");
            math = randomMath();

            $("#number-to-guess").text(math);
            $("#wins").text(win);
            counter = 0;
            var numberOptions = [moreMath(), moreMath(), moreMath(), moreMath()];
            $(".aarnostImg").each(element => {
                $(this).attr("data-aarnostValue", moreMath())
            });

        }
        else if (counter >= math) {
            losses++;
            alert("they all fall over!");
            math = randomMath();
            $("#number-to-guess").text(math);
            $("#loss").text(losses);
            counter = 0;
            var numberOptions = [moreMath(), moreMath(), moreMath(), moreMath()];
            $(".aarnostImg").each(element => {
                $(this).attr("data-aarnostValue", moreMath())
            });

        }
});