// USER STORY -----------
    // user selects a quote topic from drop-down menu
    // user then clicks the submit button
    // they are shown a random quote from that topic displayed on screen
    // they can then click an option to select another quote

// JAVASCRIPT MECHANICS -----------
    // 1. store the quotes as strings in a set of arrays. 
    //there are 3 types/categories of quotes, so we will need 
    //3 x arrays containing our strings. each array contains 5 quotes/strings. 15 quotes in total!

    // 2. a form, using the select/option(drop-down) will allow user to select their quote topic.
    // Is it really best to use a dropdown? There are only three choices --- it would be the correct decision for scale buuuut i would consider radio buttons in this situation :)


    // 3. upon selection of a topic, the corresponding array will trigger to be made available 
    // what do you meant "trigger to be made available?" im not trying to be annoying but maybe be more clear. Upon selection of a topic the code will return the corresponding array is much stronger verbage and will help focus your dev efforts :)


    // 4. after the topic is selected, the submit button should iterate of the corresponding array and randomly select a string from the list of 5.
    // this is good! There are a lot of ways to return a random element from an array. 

    // 5. the reset button should allow for a click to clear the current quote entry and revert back to a default state
    // i like this too. "State" you will encounter very very soon. 

   


$(function() {

// Batches of Quotes stored in 3 separate arrays by category:

    const motivationQuotes = [
        "Opportunity does not knock. It presents itself when you beat down the door.",
        "You’re what makes guys like me wanna coach.",
        "Don’t just stand by and watch it happen.",
        "You may never know how proud I am of you.",
        "Clear eyes, full hearts, can’t lose."
    ]

    const quittingQuotes = [
        "You’re not quitting this team. I’m not gonna let you quit. I know you. You quit this team, you’re gonna hate yourself. You wanna be pissed? Fine, go ahead. You be pissed I don’t give a damn. But you’re not quitting this team.",
        "Listen to me. I said you need to strive to better than everyone else. I didn’t say you needed to be better than everyone else. But you gotta try. That’s what character is. It’s in the trying.",
        "Don’t quit on me. Don’t quit on yourself.",
        "Don’t just stand by and watch it happen.",
        "You get one chance in life, fellas. You can either take advantage of it, or you can piss it away. You do the latter, and you’re gonna regret it the rest of your lives.",
    ]

    const defeatedQuotes = [
        "Every man at some point in his life is gonna lose a battle. He’s gonna fight and he’s gonna lose.But what makes him a man, is that in the midst of that battle he does not lose himself.",
        "You listen to people that love you and you listen to people that you trust. Most of all, you listen to yourself.",
        "Suck it up. That’s what being a man is.",
        "You can’t beat yourself up because you’re taking chances on things.",
        "I can’t give you any answers. You gotta make the answers."
    ]



    // add event listener to the value of the user's 'option' they have chosen (in the select drop-down field):
    // need to connect: 
    // 1. 'motivation' to 'motivationQuotes' array
    // 2. 'quitting' to 'quittingQuotes' array
    // 3. 'defeated' to 'defeatedQuotes' array



    // add event listener to the submit button
    // write a function that will iterate over the array that has been selected via the top

    // add event listener to the reset button
    // write a function that will reload the page, clearing content back to default user state


    // this pseudocode is generally looking good! :)

    // my only advice is to get more _agile_ with  your milestones; by that I mean  --- the logic for selecting one array via the user interface is 100% reusable for the other arrays so if you perfect that you may not have to do it three times :)

    //function giveQuoteType(selectedType){
      //  if selected type === blah blah
        //return array

        // AH IVE SAID TOO MUCH ;)
    //}

    



});