class Rectangle {
	constructor(height, width){
		this.height = height;
		this.width  = width;
	}
}

//vs

function Rectangle(options) {
	this.height = options.height;
	this.width - options.width;
}

