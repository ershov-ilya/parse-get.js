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
        keys:[],
        all:false,
        redirect:false
    };
    var clean_url;
    PUBLIC.arr={};

    PUBLIC.config=function(data){
        if(typeof data == 'undefined'){
            console.log(config);
            return true;
        }
        if(typeof $ != 'undefined'){
            config=$.extend(config, data);
            return true;
        }
        for(k in data){
            config[k]=data[k];
        }
        return false;
    };

    PUBLIC.set=function(key, val){
        config[key]=val;
    };

    PUBLIC.parse=function(url){
        get_keys = config.keys;
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

        console.log(params);
        var r, z;
        if(config.all){
            for (r=0; r<params.length; r++){
                key = params[r].split('=');
                GET[key[0]]=key[1]||true;
            }
        }else{
            for (r=0; r<params.length; r++){
                for (z=0; z<get_keys.length; z++){
                    if(params[r].indexOf(get_keys[z]+'=') > -1 || params[r]==get_keys[z]){
                        key = params[r].split('=');
                        GET[key[0]]=key[1]||true;
                    }
                }

                key = params[r].split('=');
                if(get_keys.indexOf(key[0])==-1) {
                    OTHER.push(params[r]);
                }
            }
            if(OTHER.length) new_url+='?'+OTHER.join('&');
            if(window.location.hash) new_url+=window.location.hash;
            clean_url=new_url;
            if(config.redirect) window.history.pushState(window.history.state, '', new_url);
        }

        PUBLIC.arr=GET;
        return (GET);
    };

    PUBLIC.redirect=function() {
        if(typeof clean_url != 'undefined') window.history.pushState(window.history.state, '', clean_url);
    };

    PUBLIC.init=function(options){
        PUBLIC.config(options);
        return PUBLIC.parse();
    };

    return PUBLIC;
})();
