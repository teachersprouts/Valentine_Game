var drone;

exports.valentine = function()
{
    drone = new Drone(self);
    drone.chkpt("Start");

    //Build_Lobby();
    Build_Box(16);
    Build_Entrance();
    Build_Lobby();
   

}

function Build_Entrance()
{
    drone.move("Start");
    drone.left(3).back(10).box("251:14",7, 1, 10);
    drone.move("Start");
    drone.up(1).left(1).box(0,3,3,1).back(10).down(2).box(89,3,1,10).up(1).box("95:14",3,1,10);

    drone.move("Start").up(1);
    drone.left(3).back(2);

    for(var i = 0; i < 4; i++)
    {
    
        drone.box(191,1,3,1).up(3).box(154,1,1,1).up(1).box(169,1,1,1).up(1).box(44,1,1,1);
        drone.right(6).down(5);
        drone.box(191,1,3,1).up(3).box(154,1,1,1).up(1).box(169,1,1,1).up(1).box(44,1,1,1);
        drone.left(6).back(2).down(5);

    }

}

function Build_Lobby()
{

}

function Build_Box(width)
{
    drone.left(width-1);
    drone.box0("95:14", (width*2)-1,width+6,(width*2)-1);

    Build_Heart(width-2);
}

function Build_Heart(loop)
{ 
    drone.move("Start");
    drone.down(2);
    for(var i = 0; i < loop; i++){

        var wide = (i*2) + 1;
        drone.box("251:14",wide, 1, 1);
        drone.up(1).left(1);

    
    }
    drone.chkpt("left");

    for(var i = loop; i > 3; i=i-2)
    {
        //var wide = (i/2) + 1;
        drone.box("251:14",i,5,1);
        drone.up(1).right(1);
    }

    drone.move("left");
    drone.right(loop+1);

    for(var i = loop; i > 3; i=i-2)
    {
        //var wide = (i/2) + 1;
        drone.box("251:14",i,5,1);
        drone.up(1).right(1);
    }

    drone.move("left");
    drone.right(loop);
    drone.box("251:14",1,4,1);
    
}