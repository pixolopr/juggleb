#pragma strict

function Start () {

}

function Update () {
transform.Translate(Input.acceleration.x, 0, 0);
}