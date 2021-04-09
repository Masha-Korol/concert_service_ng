const webpack = require('webpack');
module.exports = {
    plugins: [
    new webpack.DefinePlugin({
        $ENV: { API_URL: `"http://${JSON.stringify(process.env.TOMCAT_PROD_IP).replace(/\"/g, "")}:8080/api"` }
    })]
}; 