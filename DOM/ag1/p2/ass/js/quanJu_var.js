function ceShi(tak) {
        var test = tak * tak;       //没有var为全局
        return test;
}
var test = 50;
var trying = ceShi(20);         //ceShi(20*20)
alert(trying);

