/*
 -Initialize your app
 -Export selectors engine
 */
var myApp = new Framework7();
var $$ = Dom7;

var mainClass=function()
{
    this.initializeApp=function()
    {
        $$('#cyanBtn').on('click', function () {
            myApp.alert('Text');
        });
        $$('#tealBtn').on('click', function () {
            myApp.alert('Text and Title','Custom Title');
        });
        $$('#greenBtn').on('click', function () {
            myApp.alert('Text and CallBack',function(){
                alert('CallBack handled');
            });
        });
        $$('#blueBtn').on('click', function () {
            myApp.alert('Text, title and CallBack','Custom Title',function(){
                alert('CallBack handled');
            });
        });
    }
}

m=new mainClass();
m.initializeApp();