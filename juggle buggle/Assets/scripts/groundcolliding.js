#pragma strict
public var ballcollider : Collider2D;

public var groundcollider:Collider2D;
function Start () {

}

function Update () {
if(groundcollider.IsTouching(ballcollider))
{
GameControl.control.save();

 Application.LoadLevel ("menu");
Debug.Log('count');

}

}