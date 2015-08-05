#pragma strict
import System.Runtime.Serialization.Formatters.Binary;
import System.Runtime.Serialization;
import System.IO;

public var score:int;
public static var control:GameControl;
public var scorearray : int[];

function Awake() {
	if(control==null){
		DontDestroyOnLoad(transform.gameObject);
		control=this;
	}
	else if(control!=this){
		Destroy(transform.gameObject);
	}
	Debug.Log("Load");
	load();
	
	//Debug.Log(Application.persistantDataPath+"/scores.dat");
}

function Update() {
    if (Input.GetKeyDown("r")) {
        save();
    }
    if (Input.GetKeyDown("f")) {
        load();
    }
}

function OnGUI () {
 	GUI.Label(Rect(20,50,100,30),"Score:"+score);
 	GUI.Label(Rect(20,60,100,30),"Score:"+(scorearray[0]+score));
}

function save(){
	var sw : StreamWriter = new StreamWriter("/Pixolo undertakes/testWrite.txt");
    
     var o = new MemoryStream(); //Create something to hold the data
    // ar[1,1] = scorearray;  //Set a value to test
     var bf = new BinaryFormatter() ; //Create a formatter
var      values = new SavedData();
 //Debug.Log(scorearray[1]);
   values.X =scorearray[0]+score;
    values.Y = scorearray[1];
    values.Z = scorearray[3];
 
     bf.Serialize(o,values);//Save the array
     var data = System.Convert.ToBase64String(o.GetBuffer()); //Convert the data to a string
 	sw.WriteLine(data);
 	//sw.WriteLine(data);
 	Debug.Log(data);  
 	 
    //sw.WriteLine("Another Line");
    sw.Flush();
    sw.Close();
}

function load(){
var sr = new File.OpenText("/Pixolo undertakes/testWrite.txt");
 
    var data = "";
   
    var bf = new BinaryFormatter() ; //Create a formatter
    while (true) {
        data = sr.ReadLine();
        // Debug.Log(data);
        if (data == null) { break; }
        var ins = new MemoryStream(System.Convert.FromBase64String(data)); //Create an input stream from the string
      var values=bf.Deserialize(ins) as SavedData;
     //Read back the data
     //var x : int[] = bf.Deserialize(ins);
     //print(x[1,1]); //Make sure we have the same value
     //Debug.Log("line="+x);
    }
    var x:int[];
    scorearray[0] = values.X;
     
    sr.Close();
}
@SerializeField
class SavedData{
    var X : int;
    var Y : int;
    var Z : int;
    }
