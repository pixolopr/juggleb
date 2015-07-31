#pragma strict
var touch:boolean;
var position:Vector3;
public var ballcollider : Collider2D;
public var playercollider : Collider2D;

function Start () {
touch=true;

}

function Update () {

if(touch==true)
{
if(playercollider.IsTouching(ballcollider))
{
touch=false;
Debug.Log('count');
}
}
if(touch==false)
{
if(!playercollider.IsTouching(ballcollider))
{
touch=true;
Debug.Log('count1');
}
}


 if (Input.GetKeyDown(KeyCode.LeftArrow))
                 {
                         position = this.transform.position;
                         position.x = position.x - 0.3f;
                         this.transform.position = position;
                 }
                 if (Input.GetKeyDown(KeyCode.RightArrow))
                 {
                         position = this.transform.position;
                         position.x = position.x+ 0.3f;
                         this.transform.position = position;
                 };
//transform.Translate(Input.acceleration.x, 0, 0);
}