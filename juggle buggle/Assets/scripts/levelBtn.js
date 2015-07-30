#pragma strict

function Start () {

}

function Update () {
if (Input.touchCount == 1) {

			if(Input.GetTouch(0).phase == TouchPhase.Began)
			{
				var ray = Camera.main.ScreenToWorldPoint (Input.GetTouch (0).position);
				//RaycastHit2D hit = Physics2D.Raycast(ray, Vector2.zero);
				var hit: RaycastHit2D = Physics2D.Raycast(ray, Vector2.zero);
				//COLLIDER TOUCHED
				if (hit.collider != null) {
					if(hit.collider.gameObject.name == "levelbtn")
					{
					Application.LoadLevel ("levels");
					}
					}
					}
};
}