#pragma strict

var gem : Transform;
var count : int;

function Start () {
	count = 0;
}

function Update () {
	count += 1;
	if(count == 60) {
		Spawn();
		count = 0;
	}
}

function OnGUI () {
	var score = GameObject.Find("/hero").GetComponent(HeroScript).score;
	
	GUI.Box (Rect ((Screen.width / 2) - 60,0,120,30), "Score: "+score);
}

function Spawn() {
	var rand = Random.value;
	
	if(rand > 0.5) {
		Instantiate(gem, Vector3 (8.5, 5, 0), Quaternion.identity);
	} else {
		Instantiate(gem, Vector3 (-8.5, 5, 0), Quaternion.identity);
	}
}