function nasaImageOfDay() {
   var url = "https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo";

   global.$.ajax({
      url: url,
      
        success: function(result){
            if("copyright" in result) {
            global.$("#copyright").text("Image Credits: " + result.copyright);
            }
            else {
            global.$("#copyright").text("Image Credits: " + "Public Domain");
            }
            
            if(result.media_type == "video") {
            global.$("#apod_img_id").css("display", "none"); 
            global.$("#apod_vid_id").attr("src", result.url);
            }
            else {
            global.$("#apod_vid_id").css("display", "none"); 
            global.$("#apod_img_id").attr("src", result.url);
            }
        }
    });
}