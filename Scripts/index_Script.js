//   Here the Index Scripts goes =>
/* 
function: Making the Password's text visible with using font awesome icons
(1). Select the password container and both font awesome icons
(2). Create if else when the password container type is password, on clicking the icon then change into type of text.
(3). And when the password type is text then click on the icon to change it to password format.
*/

function Password_Visible() {
    const Password = document.getElementById("Password");
    const eye = document.getElementById('eye');
    const eye_slash = document.getElementById('eye_slash');
    if (Password.type === "password") {
        Password.type = "text";
        eye_slash.style.visibility = "hidden";
        eye.style.visibility = "visible";
    } else {
        Password.type = "password";
        eye.style.visibility = "hidden";
        eye_slash.style.visibility = "visible";
    }
}