#pragma strict

var dot:GameObject;
var movementDistance 	= 0.5;
var speed:float 		= 2f;
var isDotPlaced 		= false;
var dotClone:GameObject;

var leftBoundary:float 		= 9.68;
var rightBoundary:float		= -9.82;
var topBoundary:float 		= -4.75;
var bottomBoundary:float 	= 4.75;

var maximumDotSize:float = 0.5f;
var minimumDotSize:float = 0.1f;

function Start () {
}

function Update () {

	if (Input.GetKeyDown(KeyCode.UpArrow)) {
		if (transform.localPosition.z > topBoundary) {
			transform.Translate (0,0,-movementDistance);
		}
    }
    else if (Input.GetKeyDown(KeyCode.DownArrow)) {
	    if (transform.localPosition.z < bottomBoundary) {
	    	transform.Translate (0,0,movementDistance);
	    }
    }
    else if (Input.GetKeyDown(KeyCode.LeftArrow)) {
	    if (transform.localPosition.x < leftBoundary) {
	    	transform.Translate (movementDistance,0,0);
	    }
    }
    else if (Input.GetKeyDown(KeyCode.RightArrow)) {
	    if (transform.localPosition.x > rightBoundary) {
	    	transform.Translate (-movementDistance,0,0);
	    }
    }
    else if (Input.GetKey(KeyCode.X)) {
    
    	// First, place one dot
    	if (isDotPlaced == false) {
    	    
    		dotClone = Instantiate(dot, transform.position, transform.rotation);
			isDotPlaced = true;
    	}
    	
    	//Debug.Log(dotClone.transform.localScale);
    	
    	if (dotClone.transform.localScale.x <= maximumDotSize) {
    		dotClone.transform.localScale.x += dotClone.transform.localScale.x * (Time.deltaTime * speed);
			dotClone.transform.localScale.z += dotClone.transform.localScale.z * (Time.deltaTime * speed);
    	}
    	
    	

    }
    else if (Input.GetKeyUp(KeyCode.X)) {
		isDotPlaced = false;
    }
    
}