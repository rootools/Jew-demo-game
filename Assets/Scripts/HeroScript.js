#pragma strict

var score : int;

function Start () {
	score = 0;
}

function Update () {
	var move = Input.GetAxis("Horizontal");
	
	if(move > 0) {
		transform.position.x += 0.15;
	} else if(move < 0) {
		transform.position.x -= 0.15;
	}
}

function OnCollisionEnter2D(col : Collision2D) {
	if(col.transform.tag == "Gem") {
		score += 1;
	}
}