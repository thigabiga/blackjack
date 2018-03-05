(function () {
    //var myNode = document.getElementsByClassName("image-square");
    var myNode = document.querySelector(".insta-block");
    myNode.addEventListener("click", function (e) {
        if (e.target.tagName === "IMG") {
            var myOverlay = document.createElement("div");
            myOverlay.id = "overlay";
            document.body.appendChild(myOverlay);

            // Overlay Styles
            myOverlay.style.position = "absolute";
            myOverlay.style.top = 0;
            myOverlay.style.backgroundColor = 'rgba(0,0,0,.7)';
            myOverlay.style.cursor = "pointer";
            myOverlay.style.width = window.innerWidth + 'px';
            myOverlay.style.height = window.innerHeight + 'px';
            myOverlay.style.top = window.pageYOffset + 'px';
            myOverlay.style.left = window.pageXOffset + 'px';

            // Add Image
            var srcArray = e.target.src.split("/");
            lastIndex = srcArray.length - 1;
            var imageSrc = "images/" + srcArray[lastIndex];
            var largeImage = document.createElement('img');
            largeImage.id = 'largeImage';
            largeImage.src = imageSrc;
            largeImage.style.display = 'block';
            largeImage.style.position = 'absolute';
            myOverlay.appendChild(largeImage);

            largeImage.addEventListener('load', function () {
                if (this.height > window.innerHeight) {
                    this.ratio = window.innerHeight / this.height;
                    this.height = this.height * this.ratio;
                    this.width = this.width * this.ratio;
                };

                //Resize if wider
                if (this.width > window.innerWidth) {
                    this.ratio = window.innerWidth / this.width;
                    this.height = this.height * this.ratio;
                    this.width = this.width * this.ratio;
                }

                //centerImage(this);
                myOverlay.appendChild(largeImage);

            }); //image has loaded

            largeImage.addEventListener('click', function () {
                if (myOverlay) {
                    myOverlay.parentNode.removeChild(myOverlay);
                };
            }, false);

            window.addEventListener('scroll', function () {
                if (myOverlay) {
                    myOverlay.style.top = window.pageYOffset + 'px';
                    myOverlay.style.left = window.pageXOffset + 'px';
                };
            }, false);

        }; // target is an image

    }, false); //image is clicked



})();
