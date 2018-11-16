// USER STORY -----------
    // user selects a quote topic from drop-down menu
    // user then clicks the submit button
    // user is shown a random quote from the selected topic displayed on screen
    // they can then click a button to go back and make another quote

// JS MECHANICS -----------
    // 1. store the quotes as strings in a set of arrays. there are 3 groups of quotes, separated by topic, so we will need 3 x arrays containing our strings. each array contains 5 quotes/strings. 15 quotes in total!

    // 2. a form, using the select/option(drop-down) will enable user to select their quote topic.

    // 3. selecting a topic, should enable access to the corresponding array 

    // 4. after the topic is selected, the submit button should iterate of the corresponding array and randomly select a quote from the list of 5 quotes.

    // 5. the reset button should clear the current quote entry and revert back to a default state, so the user can start again

    const quoteApp = {};


    $(function () {
        quoteApp.init();

// smooth scroll effect to get to quote generator.
// SOURCE (to learn about using hash with JQuery animate methods!: https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll

        $('a').on('click', function(e) {
            if (this.hash !== "") {
                e.preventDefault();
                const hash = this.hash;
                $('html, body').animate ({
                    scrollTop: $(hash).offset().top
                }, 800, function() {
                    window.location.hash = hash;
                });
            }
        });

// add smooth scroll effect to move from submit button to see result.

        $('#result-button').on('click', function() {
            $('html, body').animate({scrollTop: $('#result-box').offset().top}, 800);
        });
    });
  
// list of quotes stored in 3 separate arrays by category:

    quoteApp.motivation = [
        "Opportunity does not knock. It presents itself when you beat down the door.",
        "You’re what makes guys like me wanna coach.",
        "Don’t just stand by and watch it happen.",
        "You may never know how proud I am of you.",
        "Clear eyes, full hearts, can’t lose."
    ]

    quoteApp.quitting = [
        "You’re not quitting this team. I’m not gonna let you quit. I know you. You quit this team, you’re gonna hate yourself. You wanna be pissed? Fine, go ahead. You be pissed I don’t give a damn. But you’re not quitting this team.",
        "Listen to me. I said you need to strive to better than everyone else. I didn’t say you needed to be better than everyone else. But you gotta try. That’s what character is. It’s in the trying.",
        "Don’t quit on me. Don’t quit on yourself.",
        "Don’t just stand by and watch it happen.",
        "You get one chance in life, fellas. You can either take advantage of it, or you can piss it away. You do the latter, and you’re gonna regret it the rest of your lives.",
    ]

    quoteApp.defeated = [
        "Every man at some point in his life is gonna lose a battle. He’s gonna fight and he’s gonna lose. But what makes him a man, is that in the midst of that battle he does not lose himself.",
        "You listen to people that love you and you listen to people that you trust. Most of all, you listen to yourself.",
        "Suck it up. That’s what being a man is.",
        "You can’t beat yourself up because you’re taking chances on things.",
        "I can’t give you any answers. You gotta make the answers."
    ]

// initialize the app:
    quoteApp.init = function() {
        quoteApp.formSubmit();
        // quoteApp.resetForm();
    }

// listen for form to be submitted:
    quoteApp.formSubmit = function() {
        $('form').on('submit', function(e) {
            e.preventDefault();

        // capture the value of the topic, store it as a variable
            const topic = $('select').val();
            const quoteArray = quoteApp[topic];
           
           
                       
        // get a random quote from selected array:
            const randomQuote = quoteArray[Math.floor(Math.random() * quoteArray.length)];
            console.log(randomQuote);

        // display random quote onto page:          
            $('.quote-block').html(`<p>"${randomQuote}"</p>`);
                                 
        });      
    }

   
    

  


    







    



