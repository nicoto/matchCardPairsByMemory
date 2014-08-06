// JavaScript Document
var colorSampler = [{
    'name': 'Coral',
    'hexcode': '#FF7F50'
}, {
    'name': 'Crimson',
    'hexcode': '#DC143C'
}, {
    'name': 'Magenta',
    'hexcode': '#FF00FF'
}, {
    'name': 'Olive',
    'hexcode': '#808000'
}, {
    'name': 'YellowGreen',
    'hexcode': '#9ACD32'
}, {
    'name': 'Teal',
    'hexcode': '#008080'
}, {
    'name': 'SlateBlue',
    'hexcode': '#6A5ACD'
}, {
    'name': 'Plum',
    'hexcode': '#DDA0DD'
}, {
    'name': 'Coral',
    'hexcode': '#FF7F50'
}, {
    'name': 'Crimson',
    'hexcode': '#DC143C'
}, {
    'name': 'Magenta',
    'hexcode': '#FF00FF'
}, {
    'name': 'Olive',
    'hexcode': '#808000'
}, {
    'name': 'YellowGreen',
    'hexcode': '#9ACD32'
}, {
    'name': 'Teal',
    'hexcode': '#008080'
}, {
    'name': 'SlateBlue',
    'hexcode': '#6A5ACD'
}, {
    'name': 'Plum',
    'hexcode': '#DDA0DD'
}]

// On document load event, automatically assign a randomly selected color from the array colorSampler to a pair of cards.
$(document).ready(function() {

    var colorArrayDup = colorSampler.slice(0);


    // Choose one color at random from colorSampler
    var rowCount = 0;
    var Count = colorSampler.length; // 20 
    for (var i = 0; i < Count; i++) {

        var riOfColor = Math.floor(Math.random() * colorSampler.length);

        // append the new div
        $('#container').append('<div class="card flip ' + colorSampler[riOfColor].name + '">&nbsp;</div>');

        //console.log('<div class="card flip ' + colorSampler[riOfColor].name + '">&nbsp;</div>');
        rowCount++;

        // remove it from the colorSampler array so we can't use it again
        colorSampler.splice(riOfColor, 1);

        // Insert a break statement after every 5 cells per row of cards
        if (rowCount == 5) {
            $('.container').append('<br class="clear" />');
            rowCount = 0;
        }
    }

    $("button").click(function() {
        var cardDivs = $('.card');
        // select all divs, remove class flip
        cardDivs.removeClass("flip"); //.css('background-color','black')
    });


    $("div").click(function() {
        //console.log($(this));

        $(this).addClass('flip');

        var activeCards = $('.card.flip');
        console.log(colorArrayDup);
        for (var i = 0; i < colorArrayDup.length; i++) {

            // Look for a pair of cards in the flipped state that have the same color class.
            var currentColor = $('.flip.' + colorArrayDup[i].name).length; // the length of whatever, 

            if (activeCards.length == 1) {
                return false;
            } else if (activeCards.length == 2) {
                if (currentColor == activeCards.length) {
                    //var pair = $('.card.'+colorArrayDup[i].name).removeClass('flip').addClass('match');
                    console.log("Two cards selected, bravo.");
                    $('.flip').removeClass('flip').css('background-color', colorArrayDup[i].name).addClass('match');
                    //Check to see if the game is won.
                    var pairsSelected = $('.match').length;
                    if (colorArrayDup.length == pairsSelected) {
                        alert("Congratulations, you've succeeded at pairing all colors!");
                        console.log("Congratulations, you've succeeded at pairing all colors!");
                    }

                } else {
                    console.log("Sorry, card colors do not match.");
                    setTimeout((function() {
                        activeCards.removeClass('flip');
                    }), 2000);
                }
            }
        }

        var revealColor = $(this),
            doColorsMatch = revealColor.is(function() { // Find matches function

                // Choose all the selectors of cards with class .flip

                if (activeCards.length == 1) {
                    return false;
                }
            });
    });

}); // end document.ready function