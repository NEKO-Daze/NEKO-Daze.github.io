window.onload = function() {
    var tag1 = document.getElementById("tag1");
    var tag2 = document.getElementById("tag2");
    var tag3 = document.getElementById("tag3");
    var tag4 = document.getElementById("tag4");
    var tag5 = document.getElementById("tag5");
    var tag6 = document.getElementById("tag6");
    

    for (let i = 0.1; i <= 1.0; i+=0.1)
        {
            setTimeout(function() {
                tag1.style.opacity = i.toString();
            }, 100)
            
            
        }
        
        for (let i = 0.1; i <= 1.0; i+=0.1)
        {
            tag2.style.opacity = i.toString();
        }
        for (let i = 0.1; i <= 1.0; i+=0.1)
        {
            tag3.style.opacity = i.toString();
        }
        for (let i = 0.1; i <= 1.0; i+=0.1)
        {
            tag4.style.opacity = i.toString();
        }
        for (let i = 0.1; i <= 1.0; i+=0.1)
        {
            tag5.style.opacity = i.toString();
        }
        for (let i = 0.1; i <= 1.0; i+=0.1)
        {
            tag6.style.opacity = i.toString();
        }
}