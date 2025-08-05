const typeConsole =(type = "log")=>{
    console[type]("Đây là type: ",type);
};
typeConsole("log");
typeConsole("warn");
typeConsole("error");
typeConsole();

