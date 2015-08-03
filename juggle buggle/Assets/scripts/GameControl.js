#pragma strict
public var score:int;
public static var control:GameControl;
function Awake () {
if(control==null){
DontDestroyOnLoad(transform.gameObject);
control=this;
}
else if(control!=this){
Destroy(transform.gameObject);

}
}

function OnGUI () {
 GUI.Label(Rect(20,20,100,30),"Score:"+score);
}