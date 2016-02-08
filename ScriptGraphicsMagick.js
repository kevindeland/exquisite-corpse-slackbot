var gm = require('gm');
var chalk = require('chalk');

var arg = null;

if (process.argv[2]) {
    arg = process.argv[2];
} else {
    arg = 'resize';
}


var functions = {
    
    'resize': function() {
        gm('./images/otter_middle.png')
            .resizeExact(1000, 40) // ! ignores aspect ratio
            .autoOrient()
            .write('./images/temp/testing.png', function (err) {
                if (!err) console.log(' hooray! ');
            });
    },

    'weird': function() {

        gm('./images/tops/bear_top.png')
            .flip()
            .magnify()
            .rotate('green', 45)
            .blur(7, 3)
            .crop(300, 300, 150, 130)
            .edge(3)
            .write('./images/temp/crazytest.png', function (err) {
                if(err) console.log(chalk.red(err));
                if (!err) console.log('crazytown has arrived');
            });
    }
}

functions[arg]();
