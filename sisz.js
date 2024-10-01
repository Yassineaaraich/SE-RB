let originalImage = null;

function loadImage() {
    const fileInput = document.getElementById("image-upload");
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const img = document.getElementById("image-preview");
        img.src = e.target.result;
        img.style.display = 'block';

        originalImage = new Image();
        originalImage.src = e.target.result;

        // Enable resize button after loading the image
        document.getElementById("resize-btn").disabled = false;
    };

    if (file) {
        reader.readAsDataURL(file);
    }
}

function resizeImage() {
    const width = document.getElementById("width-input").value;
    const height = document.getElementById("height-input").value;

    if (!width || !height) {
        alert("Please enter both width and height in pixels.");
        return;
    }

    if (originalImage) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        canvas.width = width;
        canvas.height = height;

        ctx.drawImage(originalImage, 0, 0, canvas.width, canvas.height);

        const resizedImageURL = canvas.toDataURL("image/png");

        const img = document.getElementById("image-preview");
        img.src = resizedImageURL;

        // Show download button
        const downloadBtn = document.getElementById("download-btn");
        downloadBtn.style.display = 'inline-block';
        downloadBtn.href = resizedImageURL;
        downloadBtn.download = "resized-image.png";
    }
}
