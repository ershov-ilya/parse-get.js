# parse-get.js

Parsing GET parameters of URL and makes redirect if needed

Simple include
**parse-get.js** or **parse-get.min.js** file.

GET.init(options) is alias for GET.config and GET.parse methods:
```
GET.init=function(options){
    GET.config(options);
    return GET.parse();
};
```

Default options:
```
config={
    keys:[],
    all:true,
    redirect:false
};
```

Where keys - array of only keys to parse (needs **all** parameter off)

And redirect:true - enables hide from URI parsed GET keys  (needs **all** parameter off)

i.e alternative configuration
```
var options={
    keys:['utm_source','utm_campaign','utm_term','referal'],
    all:false,
    redirect:true
};
GET.init(options);
```

