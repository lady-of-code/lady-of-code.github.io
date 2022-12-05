$(document).ready(function () {
console.log("its working");
    // jQuery methods go here...
    $.ajax( {
        url:"https://api.github.com/users/lady-of-code",
        method:"get",
        success: (res) => {
            console.log(res);
            $(".name").text(res.name);
            $(".aboutMe").text(res.bio);

        },
        error:(error)=>{
            console.log("its an error",error);
        }
    })
});