#pragma strict

function Start () {

}

function Update () {
if (Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Ended) {
		// Get movement of the finger since last frame
		transform.position = Vector3(0f, 7.20f, 0f);
	}
}