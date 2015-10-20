#pragma strict
var clicked:boolean;
var angularvelo:float;
var velocity:Vector3;
public var football:GameObject;
function Start () {
Debug.Log(football);
clicked = false;
}

function Update () {
//if (Input.touchCount == 1) {

			/*if(Input.GetTouch(0).phase == TouchPhase.Began)
			{
				var ray = Camera.main.ScreenToWorldPoint (Input.GetTouch (0).position);
				//RaycastHit2D hit = Physics2D.Raycast(ray, Vector2.zero);
				var hit: RaycastHit2D = Physics2D.Raycast(ray, Vector2.zero);
				//COLLIDER TOUCHED
				if (hit.collider != null) {
					if(hit.collider.gameObject.name == "backbtn")
					{
					Application.LoadLevel ("menu");
					}
					}
					}
};*/
if(Input.GetMouseButtonDown(1))
{
clicked=!clicked;
}
if(clicked==true)
{
if(football.GetComponent.<Rigidbody2D>().angularVelocity!=0f)
{
angularvelo=football.GetComponent.<Rigidbody2D>().angularVelocity;
velocity=football.GetComponent.<Rigidbody2D>().velocity;
}
football.GetComponent.<Rigidbody2D>().velocity=Vector3.zero;
football.GetComponent.<Rigidbody2D>().angularVelocity=0f;
football.GetComponent.<Rigidbody2D>().gravityScale=0f;

}
if(clicked==false)
{
if(football.GetComponent.<Rigidbody2D>().gravityScale==0f)
{
football.GetComponent.<Rigidbody2D>().angularVelocity=angularvelo;
football.GetComponent.<Rigidbody2D>().velocity=velocity;
Debug.Log(angularvelo);
}
//football.GetComponent.<Rigidbody2D>().velocity=Vector3.zero;
//football.GetComponent.<Rigidbody2D>().angularVelocity=0f;
football.GetComponent.<Rigidbody2D>().gravityScale=0.8;
}
}

