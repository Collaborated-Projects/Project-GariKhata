//Ellipse
function Ellipse(vector_point, radiusX, radiusY, stroke_or_fill)
{
	this.vector_point = vector_point;
	this.radiusX = radiusX;
	this.radiusY = radiusY;

	this.col = 135;

	if(stroke_or_fill === "fill")
	{
		fill(this.col);
	}
	else if(stroke_or_fill === "stroke")
	{
		stroke(this.col)
	}
	
	ellipse(this.vector_point.x, this.vector_point.y, this.radiusX, this.radiusY);

	this.color = function(c)
	{
		//clear();
		this.col = c;
		
		if(stroke_or_fill === "fill")
		{
			fill(this.col);
		}
		else if(stroke_or_fill === "stroke")
		{
			stroke(this.col)
		}
		
		ellipse(this.vector_point.x, this.vector_point.y, this.radiusX, this.radiusY);
	};


}

//Circle
function Circle(vector_point, radius, stroke_or_fill)
{
	this.vector_point = vector_point;
	this.radius = radius;

	//Calling a function
	var circle = new Ellipse(this.vector_point, this.radius, this.radius, stroke_or_fill);
}

//Polygon
function Polygon(array_of_vectors, stroke_or_fill)
{
	this.array_of_vectors = array_of_vectors;
	
	this.col = 135;

	if(stroke_or_fill === "fill")
	{
		fill(this.col);
	}
	else if(stroke_or_fill === "stroke")
	{
		stroke(this.col)
	}
	
	beginShape();
	var i = 0;
	for(i=0; i<this.array_of_vectors.length; i++)
	{
		vertex(array_of_vectors[i].x, array_of_vectors[i].y);
	}
	endShape();

	this.color = function(c)
	{
		//clear();
		this.col = c;
		
		if(stroke_or_fill === "fill")
		{
			fill(this.col);
		}
		else if(stroke_or_fill === "stroke")
		{
			stroke(this.col);
		}
		
		beginShape();
		var i = 0;
		for(i=0; i<this.array_of_vectors.length; i++)
		{
			vertex(this.array_of_vectors[i].x, this.array_of_vectors[i].y);
		}
		endShape();
	};
}

//Rectangle
function Rectangle(array_of_vectors, stroke_or_fill)
{
	this.array_of_vectors = array_of_vectors;
	
	this.col = 135;

	if(stroke_or_fill === "fill")
	{
		fill(this.col);
	}
	else if(stroke_or_fill === "stroke")
	{
		stroke(this.col);
	}
	
	rect(this.array_of_vectors[0].x, this.array_of_vectors[0].y, this.array_of_vectors[1].x, this.array_of_vectors[1].y);

	this.color = function(c)
	{
		//clear();
		this.col = c;
		
		if(stroke_or_fill === "fill")
		{
			fill(this.col);
		}
		else if(stroke_or_fill === "stroke")
		{
			stroke(this.col);
		}
		
		rect(this.array_of_vectors[0].x, this.array_of_vectors[0].y, this.array_of_vectors[1].x, this.array_of_vectors[1].y);
	};
}

//PolyLine
function PolyLine(array_of_vectors)
{
	this.array_of_vectors = array_of_vectors;
	this.col = 0;

	stroke(this.col);
	strokeWeight(2);

	var i=0;
	for(i=0; i<this.array_of_vectors.length - 1; i++)
	{
		line(this.array_of_vectors[i].x, this.array_of_vectors[i].y, this.array_of_vectors[i+1].x, this.array_of_vectors[i+1].y);
	}
	
	this.color = function(c)
	{
		this.col = c;
		stroke(this.col);
		strokeWeight(2);

		var i=0;
		for(i=0; i<this.array_of_vectors.length - 1; i++)
		{
			line(this.array_of_vectors[i].x, this.array_of_vectors[i].y, this.array_of_vectors[i+1].x, this.array_of_vectors[i+1].y);
		}
	};
}

//Tooltip
function Tooltip(title, startX, startY, width, height)
{
	this.title = title;
	this.startX = startX;
	this.startY = startY;
	this.width = width;
	this.height = height;

	this.show = function()
	{
		fill(255, 0, 0);
		rect(this.startX, this.startY, this.width, this.height);
		fill(255);
		textSize(15);
		text(this.title, this.startX+20, this.startY+20);
	};

	this.hide = function()
	{
		clear();
	};
}