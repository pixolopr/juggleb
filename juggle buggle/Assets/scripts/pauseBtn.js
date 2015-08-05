#pragma strict
var clicked:boolean;
public var football:GameObject;
function Start () {
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
football.GetComponent.<Rigidbody2D>().velocity=Vector3.zero;
football.GetComponent.<Rigidbody2D>().angularVelocity=0f;
football.GetComponent.<Rigidbody2D>().gravityScale=0f;

}
if(clicked==false)
{
//football.GetComponent.<Rigidbody2D>().velocity=Vector3.zero;
//football.GetComponent.<Rigidbody2D>().angularVelocity=0f;
football.GetComponent.<Rigidbody2D>().gravityScale=0.8;
}
}