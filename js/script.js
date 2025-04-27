// tab interactivity changing tab title based on visibility 

const tabChanger = () => {
    if (document.hidden){
        document.title = "Come Back <3";
    }else{
        document.title = "Planted";
    }
};

document.addEventListener("visibilitychange", tabChanger);