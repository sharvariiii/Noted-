// Name: newtab.js 
// Description: Linked with newtab.html to display the new tab's content
 
var colors = [
    '#FFF5E7',
    '#EEFFFC',
    '#E6F4FF',
    '#F9FFEA',
    '#FFEFFD',
];

var images = [
    'cat-ballet.svg',
    'cat-banana.svg',
    'Ghost.svg',
    'jacket.svg',
    'pudding.svg'
];

var messages = [
    'Changing your day,<br/>a tab at a time',
    'This tab is the tab<br/>to rule them all',
    'Someone as wonderful as you<br/>deserves the world',
    'I believe in you to have<br/>a pleasant day',
    'Have a wonderful day!',
    'Your friends are lucky<br/>to know you',
    'You\'re the bestest human I know',
    'Thank you for always<br/>having my back',
    'Every day, I learn<br/>something new from you',
    'Some of my best memories<br/>are because of you',
    'You always give me<br/>incredible advice, thanks',
    'I always look forward to<br/>seeing you again',
    'Nothing can stop you from<br/>reaching your goals',
    'Did you get a cup of water? Hydrate!',
    'You\'re easily one of the<br/>nicest people I know',
    'You\'re better than an<br/>hour of cute cat videos',
    'It\'s always a party<br/>when you\'re around',
    'Whatever you\'re working on<br/>is going to be great',
    'Peek-a-boo!',
    'I\'m so glad you\'re here,<br/>please don\'t leave yet',
    'My favorite place to be<br/>is wherever you are',
    'It\'s impossible to be<br/>upset around you',
    'I admire you for<br/>following your dreams',
    'You are nothing less than<br/>special and amazing',
    'You could never disappoint me<br/>or anyone else, ever',
    'All of your hard work is<br/>already paying off',
    'Everything is so much clearer<br/>with you here',
    'You\'re going to do<br/>something amazing today',
    'You\'re much braver than you feel,<br/>stay strong',
    'I almost forgot to say -<br/>thanks for being you',
    'You are the finest part<br/>of my life',
    'You just keep getting better<br/>and better...and better',
    'Even if things aren\'t<br/>working out yet, they will',
    'I believe in you, because<br/>you believe in you',
    'You are fantabulous!',
    'You\'re a beautiful gift<br/>to those around you',
    'Any team would be lucky<br/>to have you on it',
    'The potential inside<br/>of you is incredible',
    'You\'re loyal, kind and<br/>true to yourself',
    'Even if I tried, I couldn\'t<br/>say a bad word about you',
    'You\'re one in a million<br/>and I appreciate that',
    'Jokes are funnier when<br/>you tell them to me',
    'You\'re more exciting than all<br/>my Facebook friends combined',
    'You\'re like sunshine<br/>on a rainy day',
    'You\'re my hero and<br/>I\'ll always believe in you',
    'You\'re brave, strong<br/>and fearless, go get \'em',
    'You\'re an amazing friend,<br/>thank you for being you',
    'I could listen to you laugh<br/>all day, it\'s wonderful',
    'Your smile is contagious,<br/>I just can\'t stop smiling',
    'You\'re glowing today<br/>(and that\'s a good thing)',
    'Talking to you is easily<br/>the highlight of my day',
    'I\'m sure I\'ve said it before,<br/>but you\'re marvelous',
    'You\'re wonderful and<br/>you always will be',
    'You\'re perfect the<br/>way you are - don\'t change',
    'It\'s rare to meet someone<br/>as talented as you',
    'I\'m proud of you<br/>(and I always will be)',
    'You\'re looking rather<br/>nice today, as always',
    'Sit down and have a break,<br/>you deserve it',
    'Your smile is simply radiant,<br/>I absolutely love it',
    'People never mean nasty things,<br/>they\'re just stressed',
    'Since you\'ve been in the room,<br/>everything feels brighter',
    'I\'m glad to have you around,<br/>honestly, you\'re my favorite',
    'Don\'t overthink things, you\'ll<br/>waste that pretty face',
    'The glass is always half full,<br/>never half empty',
    'The glass isn\'t half empty or half full,<br/>it has exactly how much water<br/>it was meant to have',
    'Feeling down? I\'ve got enough<br/>smiles for both of us',
    'Now that you\'re here,<br/>today\'s going to be<br/>a great day',
    'What\'s your favourite ice cream?<br/>I\'ll buy it for you',
    'Don\'t worry, I\'m here for you<br/>and I always will be',
    'Be brave, be strong and be honest,<br/>I believe in you',
    'Whatever makes you happy,<br/>go and do it right now',
    'You are the essence of my magic',
    'Today is a new day,<br/>make every second count',
    'You\'re my shining light<br/>in the dark',
    'You\'re busy today?<br/>That\'s great news,<br/>go get \'em',
    'Let\'s make every moment<br/>together count',
    'Remember that time you opened<br/>a new tab? That was great',
    'It\'s okay to rest now,<br/>put your feet up and relax',
    'I really like the way you smile',
    'Who needs coffee<br/>when they have you?',
    'No rose could ever<br/>smell as sweet as you',
    'You\'re my sunshine<br/>on a cloudy day',
    'Your courage is admirable,<br/>never ever give up',
    'You\'re doing great,<br/>I\'m so proud of you',
    'You\'re willingness to grow<br/>and be better is admirable',
    'You\'re so pretty<br/>I can\'t stop blushing',
    'It\'s okay to be sad, let\'s<br/>find a way to cheer you up',
    'Do my jokes make you laugh?<br/>They make me smile',
    'I always get the urge to<br/>smile more when you\'re around',
    'Surround yourself with<br/>people who love you (like me)',
    'Today\'s going to be great',
    'Feeling fed up? You can always<br/>talk to me about it',
    'I wonder what exciting things<br/>you\'re searching for today',
    'I believe you can do anything,<br/>never give up',
    'Sometimes things are tough,<br/>but I know you can get through this',
    'I\'m always so excited<br/>when you open a new tab',
];

var getRandomElement = function (array) {
    return array[Math.floor((Math.random()*array.length))];
}

window.addEventListener('load', function () {
    document.getElementById('container').style.backgroundColor = getRandomElement(colors);
    document.getElementById('image-container').style.backgroundImage = 'url(icons/' + getRandomElement(images) + ')';
    document.getElementById('message-container').innerHTML = getRandomElement(messages);
});