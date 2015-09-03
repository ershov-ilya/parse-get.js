/**
 * Created by PhpStorm.
 * Author:   ershov-ilya
 * GitHub:   https://github.com/ershov-ilya/
 * About me: http://about.me/ershov.ilya (EN)
 * Website:  http://ershov.pw/ (RU)
 * Date: 03.09.2015
 * Time: 14:58
 */

var GET=(function(){
    var PUBLIC={};
    var config={
        utm_keys:[],
        redirect:false
    };

    PUBLIC.config=function(data){
        config= $.extend(config, data);
    };

    PUBLIC.parse=function(url){
        utm_keys = apicontrol.config.get_keys;
        if(!url || url == '') url = decodeURI(document.location.search);
        if(url.indexOf('?') < 0) return {};

        var GET = {},
            OTHER = [],
            params = [],
            key = [],
            split=[],
            new_url;

        split = url.split('?');
        new_url=window.location.pathname;
        url = split[1];


        if(url.indexOf('#')!=-1){
            url = url.substr(0,url.indexOf('#'));
        }
        if(url.indexOf('&') > -1){ params = url.split('&');} else {params[0] = url; }

        var r,z;
        for (r=0; r<params.length; r++){
            for (z=0; z<utm_keys.length; z++){
                if(params[r].indexOf(utm_keys[z]+'=') > -1){
                    if(params[r].indexOf('=') > -1) {
                        key = params[r].split('=');
                        GET[key[0]]=key[1];
                    }
                }
            }

            //
            key = params[r].split('=');
            if(utm_keys.indexOf(key[0])==-1) {
                OTHER.push(params[r]);
            }
        }
        if(OTHER.length) new_url+='?'+OTHER.join('&');
        if(window.location.hash) new_url+=window.location.hash;
        return (GET);
    };
})();
