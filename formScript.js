function validateForm(){
    var name=document.forms["ideaPage"]["resourceName"].value;
    var email=document.forms["ideaPage"]["Email"].value;
    var urls=document.forms["ideaPage"]["url"].value;
    var cat=document.forms["ideaPage"]["categories"].value;
    var form=document.forms["ideaPage"]["datafile"].value;
    if (name==null||name==" ")
    {
    alert("Name of resource cannot be blank");
    return false;
    }
    else if(email==null||email==" ")
    {
    alert("Email cannot be blank");
    return false;
    }
    else if(urls==null||urls==" ")
    {
    alert("Url cannot be blank");
    return false;
    }
    else if(cat[0].checked==false)
    {
    alert("Please select a category");
    return false;
    }
    else if (form.selectIndex[0]){
    alert("Please select an image");
    return false;
    }


    }
