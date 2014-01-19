#pragma strict

var boom : Sprite;

function Start () {

}

function Update () {

}

function OnCollisionEnter2D(col : Collision2D) {
	if(col.transform.tag == "Ground") {
		GetComponent(SpriteRenderer).sprite = boom;
		yield WaitForSeconds(0.1);
		Destroy(gameObject);
	}
	
	if(col.transform.tag == "Player") {
		Destroy(gameObject);
	}
}