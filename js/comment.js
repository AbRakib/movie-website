
const f_name = document.getElementById("f_name");
const email = document.getElementById("email");
const comment = document.getElementById("comment");

const postbtn = document.getElementById("postbtn");


const database = firebase.database();

postbtn.addEventListener('click',(e) => {
    e.preventDefault();

    database.ref('/users/' + id.value).set({

        fullname: f_name.value,
        email: email.value,
        post: comment.value


    });
});