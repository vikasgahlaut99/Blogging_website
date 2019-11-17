function addComments(id){
    var addEventName = id.value +'<br>';
    var a = document.getElementById('userComments');
    document.getElementById('addEventNames').innerHTML += '<p>'+addEventName+'</p>';          
    a.value=a.defaultValue;
}

var count=1;
function countLikes()
{
    var txt="<i class='fa fa-thumbs-up'> Liked!</i>";
    document.getElementById("likeBlog").innerHTML=txt;
    var text=count+" person likes this!";
    document.getElementById("likeCount").innerHTML=text;
    document.getElementById("likeBlog").addEventListener("click", counting);
}

function counting()
{
    count=count+1;
    var text=count+" people have liked this!";
    document.getElementById("likeCount").innerHTML=text;
}

function addComments()
{
    var input=document.getElementById("userComments");
    var text="<p id='comments'>"+document.getElementById("userComments").value+"</p>";
    document.getElementById("addEventNames").innerHTML+=text;
    input.value=input.defaultValue;
}

function editText()
{
    document.getElementById("blogBody").contentEditable=true;
    var changeText="Save"+"<i class='icon-save'></i>";
    document.getElementById("edit").innerHTML=changeText;
    document.getElementById("edit").addEventListener("click", function(){document.getElementById("blogBody").contentEditable=false;
    document.getElementById("edit").innerHTML="Edit";});
}
        