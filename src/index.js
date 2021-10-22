const $= require('jquery');
$(function(){
    $('#btn').on({
        click:function(){
            $.ajax({
                post:'get',
                url:'/btn',
                success:function(e){
                    console.log('发送',e);
                }
            })
        }
    })
})