/*Toggle the sidebar on and off by clicking on the menu button*/
function ToggleSidebar() {
    if (document.getElementById("sidebar").style.width === "200px") {
        document.getElementById("sidebar").style.width = "0px";
        document.getElementById("content").style.paddingLeft = "0px";
    } else {
        document.getElementById("sidebar").style.width = "200px";
        document.getElementById("content").style.paddingLeft = "200px";
    }
};

/*Rotate variable number of robot master sprite tiles in content container around central point to mimic mega man stage select screens*/
$(window).on('load resize', function () {
    var start = 0;
    var tiles = $('.sprite-tile'), container = $('.sprite-tile-container'), width = container.width(), height = container.height();
    var angle = start || Math.PI*1.5, step = (2*Math.PI) / tiles.length; //define the rotation angles and variable step
    var radius = width/4.5; //define radius for the circle based of the size of the container
    tiles.each(function() {
        var x = Math.round(width/2 + radius * Math.cos(angle) - $(this).width()/2);
        var y = Math.round(height/2 + radius * Math.sin(angle) - $(this).height()/2);
        $(this).css({
            left: x + 'px',
            top: y + 'px'
        }); //rotate and place each tile
        angle += step; //set next angle
    });
});

/*Set active robot master and overlay profile on art-container*/
function toggleProfile(obj){
    var profile = obj.id;
    var current = document.querySelectorAll('.active')[0];
    var robot = document.getElementById(profile);
    current.className = current.className.replace(' active', '');
    robot.className += ' active';
    robot.style.background = 'url(/static/rmfullpic/' + profile + '.png) no-repeat top center';
    robot.style.backgroundColor = '#313036';
  }