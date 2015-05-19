function loadJs(path, delegate)
{
    var headerTag = document.getElementsByTagName('head')[0];
    var scriptTag = document.createElement('script');
    scriptTag.type = 'text/javascript';
    scriptTag.src = path;
    if(delegate){
    script.onreadystatechange = delegate;
    script.onload = delegate;
    }
    head.appendChild(script);
}