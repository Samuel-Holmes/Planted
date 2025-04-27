// tab interactivity 

const tabChanger = () => {
    if (document.hidden){
        document.title = "Come Back!!";
    }else{
        document.title = "Welcome!";
    }
};

document.addEventListener("visibilitychange", tabChanger);