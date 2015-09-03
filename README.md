# parse-get.js

Parsing GET parameters of URL and makes redirect if needed

###Easy start

Simple include
**parse-get.js** or **parse-get.min.js** file.

And call method:
```
GET.init(); // parse and returns array of GET parameters
// After it you can access the array of GET parameter, without parsing, via:
console.log(GET.arr); // array of GET parameters
```

Also you can filter which parameters are needed to parse from URL with options

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

Where **keys:[]** - array of only keys to parse (needs **all** parameter off)

And **redirect:true** - enables hide from URI parsed GET keys  (needs **all** parameter off)

**all** disables options *keys* and *redirect* and makes GET.parse to simple return array with all found parameters:values.

i.e alternative configuration
```
var options={
    keys:['utm_source','utm_campaign','utm_term','referal'],
    all:false,
    redirect:true
};
GET.init(options);
```

