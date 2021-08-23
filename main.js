
var canvas = new fabric.Canvas("myCanvas")
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	fabric.get_image.fromURL(get_image, function(Img){
		block_image_object = Img;

		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToWidth(block_image_height);
		block_image_object.set({
		top : block_y,
		left : block_x;
		})
		canvas.add(block_image_object)
	})
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '75') {
		new_image("Kai.png")
	}
	if(keyPressed == '78')
	{
		block_x = 200;
		new_image("nya.jpg")
	}
	
	if(keyPressed == '67')
	{
		block_x =350;
		new_image("Cole.jpg")
	}
	if(keyPressed == '90')
	{
		block_x = 600;
		new_image("Scuba_Zane.jpg")
	}
	if(keyPressed == '76')
	{
		block_x = 700;
		new_image("Lloyd.jpg")
	}
	if(keyPressed == '74')
	{
		block_x = 700;
		new_image("Jay.jpg")
	}
	
	
}

