const HtmlWebpackPlugin=require('html-webpack-plugin')

module.exports={
    mode:'development',
    module:{},
    devServer:{
        open:true,
        port:5000,
        host:'127.0.0.1',
        onBeforeSetupMiddleware:function(server){
            server.app.get('/btn',function(req,res){
                res.send({msg:"成功"})
            })
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./index.html'
        })
    ],


}