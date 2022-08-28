// Option 2
const openBtn = document.getElementById('open');
var newWindow;


openBtn.addEventListener('click', function () {
    newWindow = window.open('', 'newWindow', 'width=400, height=200, top=200px, left=500px')
    newWindow.document.body.innerHTML =
        `
        <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>PopUp</title>
                    <link rel="preconnect" href="https://fonts.googleapis.com">
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                            <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet">
                                <link rel="stylesheet" href="reset.css" />
                                <link rel="stylesheet" href="grid.css" />
                                <link rel="stylesheet" href="style.css" />
                            </head>

                            <body>
                            <p>Please login:</p>
                            <p>
                                <form method="post" action="#">
                                    Enter your username:
                                    <input type="text" name="username">
                                    <br/>
                                    Enter your password:
                                    <input type="text" name="password">
                                    <br/>
                                    <input type="submit" value="Submit">
                                </form>
                            </p>
                            </body>
                        </html>
                        `
});


// Option 1
function openPopUp() {
    alert("We will notify you!");
}


/*
// Option 3
let windowObjectReference = null; // global variable
function openPopUp(url, windowName) {
    if (windowObjectReference === null || windowObjectReference.closed) {
        windowObjectReference = window.open(url, windowName, "popup");
    } else {
        windowObjectReference.focus();
    };
}

const link = document.querySelector("a[target='OpenWikipediaWindow']");
link.addEventListener("click", (event) => {
    openPopUp(link.href);
    event.preventDefault();
}, false);
*/